# 하루 5분, 웃는 몸 — AI 기반 UI/UX 디자인 시안

> 승인 상태: 2026-08-13 로컬 산출물 최종 승인. Figma 프로젝트와 공유 링크는 별도 등록 필요.

> 평가용 요약: [`SUBMISSION.md`](SUBMISSION.md)에서 산출물과 빠른 검토 순서를 한눈에 확인할 수 있습니다.

Codyssey **[Project A] AI 기반 UI/UX 디자인 시안 제작** 미션을 위한 프로젝트입니다.
기존 저장소의 “50대 여성이 혼자서도 운동을 꾸준히 할 수 있도록 돕는 AI 운동 코칭 앱” 아이디어를 UI/UX 시안으로 구체화합니다.

## 1. 프로젝트 개요

| 항목 | 내용 |
| --- | --- |
| 프로젝트명 | 하루 5분, 웃는 몸 |
| 대상 사용자 | 혼자 운동을 지속하기 어려운 50대 여성 |
| 핵심 가치 | 부담 없는 5분 운동, 작은 성공 경험, 안전한 맞춤 추천 |
| 우선 플랫폼 | Android 모바일 |
| 디자인 형식 | 모바일 9:16 |
| 이미지 생성 도구 | OpenAI 내장 이미지 생성 도구 |
| 디자인 편집 도구 | Figma 활용 예정 |

## 2. 해결하려는 문제

- 운동 방법보다 매일 실천할 동기가 부족함
- 복잡한 가입과 많은 개인정보 입력이 진입 장벽이 됨
- 큰 목표는 쉽게 포기하게 만듦
- 무릎이 약한 사용자는 일반적인 운동 콘텐츠를 따라 하기 어려움
- 여러 운동을 한꺼번에 제시하면 무엇부터 해야 할지 판단하기 어려움

## 3. 핵심 사용자 경험

1. 간단한 가입으로 서비스를 시작함
2. AI가 오늘의 몸 상태와 컨디션을 질문함
3. 첫 화면에서 오늘 해야 할 운동 하나만 추천함
4. 사용자는 5분 운동을 완료함
5. 칭찬 메시지와 배지를 받아 작은 성취를 경험함
6. 7일 연속 운동을 완료하면 새로운 챌린지가 열림

## 4. 화면 구성

### 화면 1 — 오늘의 운동

- 오늘의 컨디션 한 줄 확인
- 추천 운동 1개만 크게 노출
- 예상 소요 시간과 무릎 부담 수준 표시
- `5분 운동 시작` 버튼
- 연속 운동 일수와 현재 배지 표시

![오늘의 운동 화면](assets/screens/01-today-workout.png)

### 화면 2 — 운동 진행

- 동작 이미지 또는 영상
- 남은 시간과 진행률
- 자세 설명
- `잠시 쉬기`, `이전 동작`, `다음 동작` 버튼
- 통증 발생 시 중단할 수 있는 안전 안내

![운동 진행 화면](assets/screens/02-workout-progress.png)

### 화면 3 — 완료 및 보상

- 운동 완료 축하 메시지
- 획득한 배지와 연속 운동 일수
- 오늘의 컨디션 변화 기록
- 후기 작성 버튼
- 다음 챌린지까지 남은 진행률

![완료 및 보상 화면](assets/screens/03-completion-reward.png)

## 5. 디자인 원칙

- 한 화면에는 하나의 핵심 행동만 강조함
- 큰 글자와 충분한 여백으로 가독성을 높임
- 버튼의 의미를 색상뿐 아니라 문구와 아이콘으로 함께 전달함
- 과도한 경쟁보다 작은 성공과 지속성을 강조함
- 무릎 보호 운동을 우선 제공하고 통증 시 중단 안내를 명확히 표시함
- 개인정보 입력을 최소화함

## 6. 비주얼 스타일 가이드

| 요소 | 기준 |
| --- | --- |
| 분위기 | 따뜻함, 신뢰감, 활력, 부담 없는 건강관리 |
| 주요 색상 | 코랄 오렌지 `#F47B5B` |
| 보조 색상 | 크림 `#FFF7EF`, 세이지 그린 `#7FAF9A` |
| 본문 색상 | 딥 네이비 `#24313D` |
| 글꼴 방향 | 굵고 읽기 쉬운 산세리프 |
| 카드 | 둥근 모서리, 낮은 그림자, 충분한 내부 여백 |
| 이미지 | 현실적인 한국인 중년 여성, 안전하고 편안한 실내 운동 |

## 7. 프롬프트 작업 로그

### 초안

```text
mobile fitness app UI for middle-aged women, warm colors, simple design
```

**관찰**

- 대상 사용자의 연령과 사용 환경이 충분히 드러나지 않음
- 화면의 핵심 기능과 정보 우선순위가 모호함
- 일반적인 피트니스 앱처럼 보여 차별점이 부족함

### 수정 1

```text
Korean mobile fitness coaching app UI for women in their 50s,
warm coral and cream color palette, large readable Korean typography,
one recommended five-minute low-impact exercise,
knee-friendly indicator, daily streak and reward badge,
simple Android app layout, 9:16
```

**개선 내용**

- 대상 사용자와 한국어 환경을 명시함
- 5분 운동, 무릎 보호, 연속 운동 기록을 추가함
- 큰 글자와 단순한 화면 구조를 지정함

### 최종

```text
High-fidelity Android mobile UI design for a Korean AI fitness coaching app
named "하루 5분, 웃는 몸", designed for women in their 50s.
Use a warm coral, cream, sage green and deep navy palette.
Large accessible Korean typography, generous spacing, rounded cards,
clear high-contrast primary buttons, calm and encouraging visual tone.
Show a realistic Korean middle-aged woman doing a gentle knee-friendly
indoor exercise. Create a consistent 9:16 mobile screen.
Avoid tiny text, crowded navigation, distorted hands, garbled letters,
medical claims, aggressive fitness imagery and excessive gamification.
```

**최종 개선 방향**

- 앱 이름과 브랜드 톤을 고정함
- 접근성과 고대비 버튼을 명시함
- 이미지 오류와 글자 깨짐 방지 조건을 추가함
- 의료적 효능을 단정하는 표현을 제외함

## 8. 이미지 생성 및 후가공

1. 공통 팔레트와 화면 비율을 적용해 첫 화면을 생성함
2. 첫 화면을 참조 이미지로 사용해 두 번째 화면의 인물과 스타일을 유지함
3. 앞선 두 화면을 참조해 세 번째 화면을 생성함
4. 세 결과물을 PNG로 저장해 `assets/screens/`에 등록함
5. 주요 한글 문구와 인체 표현을 육안으로 점검함
6. 세부 작업 결과와 후가공 필요 항목을 [`docs/work-log.md`](docs/work-log.md)에 기록함

정적 이미지 생성은 완료했지만, 편집 가능한 실제 텍스트와 컴포넌트로 교체하는
Figma 후가공은 아직 필요합니다.

브라우저에서 화면 흐름을 검증할 수 있는 로컬 클릭형 프로토타입은
[`prototype/index.html`](prototype/index.html)에 구현했습니다. 실행 및 Figma 이전
절차는 [`docs/prototype-guide.md`](docs/prototype-guide.md)를 참고합니다.
최종 승인 상태와 제출 직전 점검은 [`docs/final-approval.md`](docs/final-approval.md)에
정리했습니다.
Figma 제작 좌표와 연결값은 [`docs/figma-handoff.md`](docs/figma-handoff.md), 제출용
설명문은 [`docs/submission-note.md`](docs/submission-note.md)에 준비했습니다.

## 9. 프로토타입 흐름

```text
오늘의 운동
   ↓ 5분 운동 시작
운동 진행
   ↓ 운동 완료
완료 및 보상
   ↓ 내일 운동 확인
오늘의 운동
```

Figma에서는 다음 영역을 Hotspot으로 연결할 예정입니다.

- `5분 운동 시작` → 운동 진행
- `다음 동작` → 다음 운동 단계
- `운동 완료` → 완료 및 보상
- `내일 운동 확인` → 오늘의 운동

## 10. 산출물 체크리스트

- [x] UI 디자인 이미지 3장 이상
- [x] 초안 → 수정 → 최종 프롬프트 작업 로그
- [x] 프롬프트별 변경 이유와 개선점
- [x] 화면 구성과 사용자 흐름 정의
- [x] 로컬 클릭형 프로토타입 구현 및 자동 화면 전환 검증 완료
- [x] 디자인 스타일 가이드
- [x] 이미지 속 주요 한글과 인체 표현 1차 점검
- [ ] Figma에서 텍스트·아이콘·컴포넌트 정밀 후가공
- [ ] Figma 프로젝트 생성
- [ ] 클릭 가능한 화면 전환 연결
- [ ] Figma 공유 링크 등록
- [x] 사용 도구와 프로젝트 기반 자료 출처 기록

## 11. 저장소 구조

```text
.
├─ AGENTS.md
├─ README.md
├─ assets/
│  └─ screens/
│     ├─ 01-today-workout.png
│     ├─ 02-workout-progress.png
│     └─ 03-completion-reward.png
└─ docs/
   ├─ design-system.md
   ├─ references.md
   └─ work-log.md
```

저장소 구조와 문서 규칙은 `AGENTS.md`에 기록합니다.
세 UI 이미지와 로컬 프로토타입은 완료했으며 Figma 프로토타입과 공유 링크는 제작 후 추가합니다.

## 12. 저작권 및 윤리

- 이미지 생성에 사용한 AI 도구의 이름과 이용 조건을 기록함
- 타인의 UI 작업물을 그대로 캡처하거나 제출하지 않음
- 외부 레퍼런스를 활용할 경우 원본 링크와 제작자를 기록함
- AI 생성 이미지를 실제 인물이나 의료 전문가의 보증처럼 표현하지 않음
- 운동 효과를 과장하거나 의학적 치료 효과를 단정하지 않음

## 13. Figma 링크

> 제작 예정 — 프로토타입 완성 후 공유 링크 추가
