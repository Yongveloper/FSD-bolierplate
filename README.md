# Vite + TypeScript + React + FSD 아키텍처 보일러플레이트

이 프로젝트는 Vite, TypeScript, React를 사용하고 Feature-Sliced Design (FSD) 아키텍처를 따르는 React 애플리케이션을 위한 보일러플레이트입니다.

## 🚀 특징

- ⚡️ 빠른 개발과 빌드를 위한 Vite
- 🔧 타입 안전성을 위한 TypeScript
- ⚛️ 사용자 인터페이스 구축을 위한 React 18
- 🏗️ 확장 가능한 프로젝트 구조를 위한 Feature-Sliced Design (FSD) 아키텍처
- 🧪 단위 및 통합 테스트를 위한 Vitest
- 🎨 코드 린팅과 포맷팅을 위한 ESLint와 Prettier
- 🛣️ 내비게이션을 위한 React Router

## 📁 프로젝트 구조

이 프로젝트는 Feature-Sliced Design (FSD) 아키텍처를 따릅니다:

```
src/
├── app/
│   ├── provider/
│   ├── router/
│   └── styles/
├── entities/
├── features/
├── pages/
├── shared/
└── widgets/
```

- `app/`: 애플리케이션 전반의 설정, 스타일, 프로바이더
- `entities/`: 비즈니스 엔티티 (예: User, Product)
- `features/`: 사용자 상호작용 및 비즈니스 로직
- `pages/`: 애플리케이션 페이지/화면
- `shared/`: 재사용 가능한 컴포넌트, 유틸리티, 타입
- `widgets/`: 페이지를 위한 복합 컴포넌트

### FSD 핵심 규칙

1. **계층 구조**: 프로젝트는 `app`, `processes`, `pages`, `widgets`, `features`, `entities`, `shared` 계층으로 구성됩니다. 각 계층은 특정 책임을 가집니다.

2. **단방향 의존성**: 상위 계층은 하위 계층에만 의존할 수 있습니다. 예를 들어, `features`는 `entities`와 `shared`에 의존할 수 있지만, 그 반대는 불가능합니다.

3. **공개 API**: 각 슬라이스(기능 단위)는 `index.ts` 파일을 통해 공개 API를 제공해야 합니다. 내부 구현은 외부에서 직접 접근할 수 없습니다.

4. **기능 분리**: 각 기능은 자체 슬라이스 내에서 완전히 격리되어야 합니다. 한 기능의 변경이 다른 기능에 영향을 미치지 않아야 합니다.

5. **상태 관리**: 전역 상태는 `entities`나 `features` 계층에서 관리되어야 합니다. `widgets`나 `pages`는 상태를 조합하고 표시하는 역할만 합니다.

6. **컴포지션**: 상위 계층의 컴포넌트는 하위 계층의 컴포넌트를 조합하여 만들어집니다. 예를 들어, `pages`는 `widgets`를, `widgets`는 `features`를 조합합니다.

7. **재사용성**: `shared` 계층의 요소들은 프로젝트 전반에서 재사용 가능해야 하며, 특정 비즈니스 로직에 의존해서는 안 됩니다.

이러한 규칙을 준수함으로써, 프로젝트의 확장성, 유지보수성, 그리고 개발 효율성을 크게 향상시킬 수 있습니다.

## 🛠️ 시작하기

1. 저장소 클론:

   ```
   git clone [your-repo-url]
   ```

2. 의존성 설치:

   ```
   yarn install
   ```

3. 개발 서버 시작:
   ```
   yarn dev
   ```

## 📜 사용 가능한 스크립트

- `yarn dev`: 개발 서버 시작
- `yarn build`: 프로덕션용 프로젝트 빌드
- `yarn lint`: 코드베이스 린팅
- `yarn preview`: 프로덕션 빌드 미리보기
- `yarn coverage`: 커버리지와 함께 테스트 실행
- `yarn test`: 테스트 실행
- `yarn test:ui`: UI와 함께 테스트 실행

## 🧪 테스팅

이 프로젝트는 테스팅에 Vitest를 사용합니다. 다음 명령으로 테스트를 실행하세요:

```
yarn test
```

## 📦 의존성

- React 18
- React Router 6
- @suspensive/react

## 🛠️ 개발 의존성

- Vite
- TypeScript
- ESLint
- Prettier
- Vitest
- Testing Library (React, Jest DOM, User Event)
