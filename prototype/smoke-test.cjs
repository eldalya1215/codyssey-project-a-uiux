const { chromium } = require('../../node_modules/playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 430, height: 764 } });
  const landingUrl = pathToFileURL(path.join(__dirname, '..', 'index.html')).href;
  await page.goto(landingUrl);
  if (await page.getByRole('heading', { name: '하루 5분, 웃는 몸' }).count() !== 1) {
    throw new Error('제출 허브 제목 확인 실패');
  }
  const landingBrokenImages = await page.locator('img').evaluateAll((images) =>
    images.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src));
  if (landingBrokenImages.length) throw new Error(`제출 허브 이미지 로딩 실패: ${landingBrokenImages.join(', ')}`);
  await page.getByRole('link', { name: '프로토타입 실행' }).click();
  await page.waitForURL(/prototype/);

  await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href);

  const brokenImages = await page.locator('img').evaluateAll((images) =>
    images.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src));
  if (brokenImages.length) throw new Error(`이미지 로딩 실패: ${brokenImages.join(', ')}`);

  const states = [];
  states.push(await page.locator('[data-screen]:not([hidden])').getAttribute('data-screen'));
  await page.getByRole('button', { name: '5분 운동 시작' }).click();
  states.push(await page.locator('[data-screen]:not([hidden])').getAttribute('data-screen'));
  const pause = page.locator('[data-action="pause"]');
  await pause.click();
  if (await pause.getAttribute('aria-pressed') !== 'true') throw new Error('일시정지 상태가 반영되지 않음');
  await page.getByRole('button', { name: '운동 계속하기' }).click();
  await page.getByRole('button', { name: '다음 동작, 운동 완료' }).click();
  states.push(await page.locator('[data-screen]:not([hidden])').getAttribute('data-screen'));
  await page.getByRole('button', { name: '내일 운동 확인' }).click();
  states.push(await page.locator('[data-screen]:not([hidden])').getAttribute('data-screen'));

  const expected = ['today', 'progress', 'complete', 'today'];
  if (JSON.stringify(states) !== JSON.stringify(expected)) {
    throw new Error(`화면 흐름 불일치: ${states.join(' -> ')}`);
  }

  await page.goto(`${pathToFileURL(path.join(__dirname, 'index.html')).href}#complete`);
  if (await page.locator('[data-screen]:not([hidden])').getAttribute('data-screen') !== 'complete') {
    throw new Error('해시 직접 진입 실패');
  }
  await page.keyboard.press('Escape');
  await page.waitForTimeout(100);
  if (await page.locator('[data-screen]:not([hidden])').getAttribute('data-screen') !== 'today') {
    throw new Error('키보드 뒤로가기 실패');
  }
  console.log(`통과: ${states.join(' -> ')}`);
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
