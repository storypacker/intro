# 스토리패커 홈페이지 (www.storypacker.com)

이 저장소는 GitHub Pages로 www.storypacker.com 에 공개됩니다. 파일을 바꾸고 Commit 하면 1~3분 뒤 사이트에 반영됩니다.

## 인사이트 글 운영

| 하고 싶은 일 | 방법 |
|---|---|
| 새 글 올리기 | 글쓰기 도구(Claude의 ‘스토리패커 글쓰기’)에서 쓰고 **복사하고 새 글 만들기** → GitHub에서 **Commit changes** |
| 글 고치기 | `_posts` 폴더에서 글 파일 열기 → 연필(✎) 아이콘 → 고친 뒤 **Commit changes** |
| 잠시 숨기기 | 글 머리말의 `published: true` 를 `published: false` 로 바꾸기 |
| 글 지우기 | 글 파일 열기 → 오른쪽 위 `…` → **Delete file** → **Commit changes** |
| 이미지 올리기 | `img/insights` 폴더 → **Add file → Upload files** (가로 1200px 안팎, .webp 또는 .jpg 권장) |
| 반영 확인 | 위쪽 **Actions** 탭: 초록 체크는 완료, 빨간 X는 오류 |

- 글 파일 이름: `날짜-영문주소.md` (예: `_posts/2026-11-20-story-first-marketing.md`)
- 글 주소: `https://www.storypacker.com/insights/분야/영문주소/`
- 분야(category): `storytelling`(스토리텔링 마케팅), `ai-robot`(AI·로봇 비즈니스), `new-business`(신사업 기획)
- 머리말 항목 설명은 `_templates/post-template.md` 를 보세요.

## 폴더 구조

- `index.html` 홈페이지 / `apps/` 작은 앱들 / `img/` 이미지 / `data/shorts.txt` 쇼츠 목록
- `_posts/` 인사이트 글 / `insights/` 인사이트 목록·분야 페이지
- `_layouts/`, `_includes/`, `assets/site.css` 글 페이지 디자인 (보통 손대지 않아도 됩니다)
- `_config.yml` 사이트 설정 / `_data/categories.yml` 분야 목록
- `privacy.html` 개인정보처리방침 / `terms.html` 이용약관 / `sitemap.xml` 자동 사이트맵 / `robots.txt`, `ads.txt`

## 앱 페이지 광고 켜고 끄기

앱 13개에는 앱 아래, ‘앱 안내’(원리·사용법·자주 묻는 질문) 위에 광고 구역이 있습니다. 스위치는 `assets/sp-ads.js` 한 곳에 있습니다.

1. `assets/sp-ads.js` 파일을 열고 연필(✎) 아이콘을 누릅니다.
2. `on: false,` 를 `on: true,` 로 바꾸고 **Commit changes** 를 누르면 모든 앱에 광고가 나옵니다. 끌 때는 다시 `false` 로 바꿉니다.
3. 특정 앱만 빼려면 그 앱 `index.html` 의 `<div class="sp-ad" hidden ...>` 에 `data-off` 를 붙입니다. 예: `<div class="sp-ad" data-off hidden aria-label="광고"></div>`

애드센스 승인 전에는 `false` 로 두는 것을 권장합니다. 홈페이지와 인사이트 글의 광고는 `_config.yml` 의 `adsense_client` 로 관리합니다.

## Actions에 빨간 X가 떴을 때

대부분 글 머리말(맨 위 `---` 사이)의 따옴표가 짝이 맞지 않아서입니다. 마지막에 고친 글 파일의 머리말을 확인하거나, 글쓰기 도구로 다시 만들어 붙여 넣으세요. 오류가 나도 사이트는 마지막으로 정상 반영된 상태로 유지됩니다.
