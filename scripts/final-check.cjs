const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const required = [
  'README.md',
  'SUBMISSION.md',
  'index.html',
  'AGENTS.md',
  'assets/screens/01-today-workout.png',
  'assets/screens/02-workout-progress.png',
  'assets/screens/03-completion-reward.png',
  'docs/design-system.md',
  'docs/figma-handoff.md',
  'docs/final-approval.md',
  'docs/mission-checklist.md',
  'docs/references.md',
  'docs/submission-note.md',
  'docs/usability-test.md',
  'docs/work-log.md',
  'docs/prototype-guide.md',
  'prototype/index.html',
  'prototype/smoke-test.cjs'
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error(`필수 파일 누락:\n- ${missing.join('\n- ')}`);
  process.exit(1);
}

const tinyImages = required
  .filter((file) => file.endsWith('.png'))
  .filter((file) => fs.statSync(path.join(root, file)).size < 100_000);
if (tinyImages.length) {
  console.error(`이미지 파일 크기 이상:\n- ${tinyImages.join('\n- ')}`);
  process.exit(1);
}

const smoke = spawnSync(process.execPath, [path.join(root, 'prototype/smoke-test.cjs')], {
  cwd: root,
  encoding: 'utf8'
});
process.stdout.write(smoke.stdout);
process.stderr.write(smoke.stderr);
if (smoke.status !== 0) process.exit(smoke.status || 1);

const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
const openItems = [...readme.matchAll(/^- \[ \] (?!선택 사항:)(.+)$/gm)].map((match) => match[1]);
const optionalItems = [...readme.matchAll(/^- \[ \] 선택 사항: (.+)$/gm)].map((match) => match[1]);

console.log(`필수 산출물 ${required.length}개 확인 완료`);
console.log(`미완료 외부 작업 ${openItems.length}개`);
openItems.forEach((item) => console.log(`- ${item}`));
console.log(`선택 확장 작업 ${optionalItems.length}개`);
optionalItems.forEach((item) => console.log(`- ${item}`));
console.log(openItems.length ? '결론: 조건부 승인 준비 완료' : '결론: 최종 승인 가능');
