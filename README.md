# Next.js MDX Blog Template

Next.js와 MDX를 기반으로 한 블로그 템플릿입니다.  
MDX 문서 기반의 포스트 작성, 커스텀 컴포넌트, StackBlitz 임베드, Tailwind CSS 스타일링 등을 지원합니다.

## 주요 기능

- **MDX 기반 포스트 작성**: `src/content` 폴더에 `.mdx` 파일로 포스트 작성
- **커스텀 MDX 컴포넌트**: 헤딩, 리스트, 코드블록 등 스타일 적용
- **StackBlitz 임베드**: MDX에서 `<StackBlitzEmbed />` 컴포넌트로 StackBlitz 프로젝트 임베드
- **자동 OG 이미지 생성**: 포스트별 OG 이미지 자동 생성
- **반응형 레이아웃**: Tailwind CSS 기반 반응형 UI
- **Next.js App Router**: 최신 Next.js 구조 적용

## 설치 및 실행

```bash
git clone https://github.com/your-repo/next-mdx-blog-template.git
cd next-mdx-blog-template
pnpm install
pnpm dev
```

## 커밋 메시지 컨벤션

- [commitlint](https://commitlint.js.org/)를 사용하여 [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/) 규칙을 적용합니다.
- 커밋 메시지는 반드시 컨벤셔널 커밋 형식을 따라야 하며, 그렇지 않으면 커밋이 거부됩니다.
- 대소문자 규칙은 한국 문화권에 맞지 않아 비활성화 하였습니다.

## 폴더 구조

```
next-mdx-blog-template/
├── src/
│   ├── app/                # Next.js app 디렉토리
│   │   ├── posts/          # 포스트 상세/OG 이미지 라우트
│   │   ├── header.tsx      # 헤더 컴포넌트
│   │   ├── footer.tsx      # 푸터 컴포넌트
│   │   ├── layout.tsx      # 전체 레이아웃
│   │   └── page.tsx        # 메인 페이지(포스트 리스트)
│   ├── components/
│   │   └── stack-blitz-embed.tsx  # StackBlitz 임베드 컴포넌트
│   ├── content/            # MDX 포스트 파일 위치
│   └── mdx-components.tsx  # MDX용 커스텀 컴포넌트
├── public/
├── package.json
├── next.config.ts
├── tailwind.config.js
└── ...
```

## 기술 스택

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [MDX](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (애니메이션)
- [StackBlitz Embed API](https://developer.stackblitz.com/docs/platform/embedding/)

## MDX에서 StackBlitz 임베드 사용 예시

```mdx
<StackBlitzEmbed
  repo='GyeongtaeGim/react-scroll-interaction-example'
  height='700px'
/>
```

## 커스텀 MDX 컴포넌트

- Heading1~6, Paragraph, Blockquote, List, CodeBlock 등 스타일 적용
- `src/mdx-components.tsx`에서 정의

## 라이선스

MIT License
