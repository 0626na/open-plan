# 오픈플랜 프론트엔드 과제전형 (한석진)

오픈 플랜 과제 리포지토리 입니다. 과제 내용, 해결 과정, 배운내용 등을 작성했습니다.

## 과제 내용

과제 내용은 다음과 같습니다.

### 필수사항

- [x] 터보레포를 설치해 주세요. (패키지 매니저는 pnpm)
- [x] 터보레포의 워크스페이스 2개의 워크스페이스를 만들어주세요. (web, storybook)
- [x] web 워크스페이스의 작업은 첨부한 피그마를 참고해서 만들어주세요.
- [x] 터보레포 ui 패키지에 버튼을 만들어 주세요.
- [x] 생성한 버튼의 스토리북을 만들어주세요. (상태별)
- [x] 생성한 버튼을 web에 import해서 사용해주세요.
- [x] Css 작성은 자유롭게 해주셔도 됩니다. (Ex. Css module, tailwind….)
- [x] 사진 조회 전 route : “.../”, 조회 후 : “/result”
- [x] 사진 조회 api는 “https://picsum.photos/id/0/info” 을 이용해주세요.
- [x] 사진 조회 api 통신 후 response를 “/result” 페이지에 전달하는 방식으로 만들어주세요.
- [x] github에 Public으로 해당 프로젝트를 올려주세요.
- [x] web 워크스페이스를 vercel을 사용해서 배포해주세요.
- [x] Github url과 배포 Url을 메일로 회신해주세요.

### 추가사항

- [x] api 데이터 상태 관리는 tanstack-query를 사용해주세요.
- [x] 사진 조회 데이터는 전역상태 라이브러리를 사용해서 관리해주세요. (Zustand 요망)
- [x] 새로 고침 시에도 데이터가 유지되게 해주세요.
- [x] 사진 조회 버튼 클릭 액션에 디바운스 혹은 스로틀링을 걸어주세요.
- [x] 버튼 디바운스/ 스로틀링 시 로딩 애니메이션을 넣어주세요. (애니메이션 방식은 자유. Ex. Lottie, css…. )
- [x] 사진을 한번이라도 조회한 이력이 있을 시 “/result” 페이지로 자동으로 이동하게 해주세요.
- [x] 사진 조회페이지의 정보 영역에 스켈레톤 처리를 해주세요.
- [x] 사진을 조회한 이력없이 “/result”로 이동하는 경우, 1초 뒤 메인 페이지로 이동시켜주세요.
- [x] 사진 조회 페이지의 배경은 조회한 사진을 이용해서 만들어주세요.
- [x] 404페이지를 만들고 존재하지 않는 route에 접근 시 노출시켜 주세요.
- [x] Read me를 작성해주세요.

## 프로젝트 폴더구조

자세히는 아니지만 대략적인 이 Turborepo의 구조입니다. Turborepo의 [TailwindCSS Starter](https://github.com/vercel/turborepo/tree/main/examples/with-tailwind) 팩을 이용하였습니다.

```sh
//npm
npx create-turbo@latest -e with-tailwind

//pnpm 과제에서는 pnpm을 사용
pnpm create turbo --example with-tailwind
```

```text
open-plan/
├── apps/
│   └── web/                     # 메인 Next.js 웹 애플리케이션 (App Router)
│       ├── app/                 # 라우트 디렉토리 (App Router)
│       ├── components/          # 웹 전용 컴포넌트
│       ├── store/               # zustand 상태 관리 저장소
│       ├── public/              # 정적 파일
│       ├── tailwind.config.ts   # 웹 프로젝트용 Tailwind 설정
│       ├── package.json
│       └── ...
│
├── packages/
│   ├── ui/                      # 공통 UI 컴포넌트
│   │   ├── src/
│   │   │   └── button.tsx
│   │   ├── global.css           # Tailwind 포함한 UI 전용 스타일
│   │   ├── tailwind.config.ts   # UI 전용 Tailwind 설정 (편집기용)
│   │   ├── .storybook/          # Storybook 설정
│   │   │   ├── main.ts          # Storybook 메인 설정
│   │   │   ├── preview.ts       # 글로벌 파라미터 설정 (tailwind import 포함)
│   │   └── Button.stories.tsx   # Story 파일 예시
│   │
│   ├── tailwind-config/         # Tailwind Preset 설정 공유
│   │   └── index.ts
│   │
│   ├── typescript-config/       # 공통 tsconfig preset
│   ├── eslint-config/           # 공통 eslint 설정 preset
│
├── .github/                     # GitHub 설정 (CI/CD 등)
├── .gitignore
├── package.json                 # Turborepo 루트 package
├── turbo.json                   # Turborepo 설정
└── tsconfig.json                # 루트 tsconfig
```

## 해결과정

### 과제할떄의 저의 수준

> 저는 Turborepo, Storybook, pnpm을 실무에서 사용해 본적이 없습니다. 이 3일간 최대한으로 학습하고 시행착오를 겪으면서 요구사항을 충족하려 노력하였습니다. 틀린부분이나 미흡한 부분이 있더라도 이를 감안해 주신다면 대단히 감사하겠습니다.

### 요구사항 1. 터보레포를 설치해주세요

위에서 설명했듯 터보레포 공식문서에서 제공하는 TailwindCSS 스타터팩으로 설치를 하였습니다. pnpm기준으로 설치를 하였습니다.

### 요구사항 2. 터보레포의 워크스페이스 2개의 워크스페이스를 만들어주세요. (web, storybook)

먼저, storybook 폴더를 생성하고 Storybook 공식문서에서 제공하는 설치 명령어를 이용하여 설치했습니다.

```sh
cd storybook
pnpm create storybook@latest
```

이후, 프레임워크는 Next.js를 추가 하였습니다.

```sh
pnpm dlx storybook@8.6.0 init --type nextjs
```

### 요구사항 3. web 워크스페이스의 작업은 첨부한 피그마를 참고해서 만들어주세요.

web 워크스페이스에서 figma로 주어진 페이지 및 로직을 개발하였습니다. 자세한 내역은 github의 commit 목록을 참조부탁드립니다.

### 요구사항 4. 터보레포 ui 패키지에 버튼을 만들어 주세요.

터보레포 ui 패키지에 button을 추가하였습니다. 그리고 이를 web 프로젝트에 import하여 사용하였습니다.

```tsx
// 작성한 Button 컴포넌트
// packages/ui/src/button.tsx

export function Button({
  label,
  loading = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bg-black text-white w-80 h-16 rounded-xl mb-10 flex justify-center items-center ${className ?? ""}`}
      {...props}
      disabled={loading}
    >
      {loading && (
        <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin" />
      )}
      {!loading && <span>{label}</span>}
    </button>
  );
}
```

```tsx
// web/app/page.tsx
// web 프로젝트에서 사용내역 중 일부

import { Button } from "@repo/ui/button";

// ... 중략

<Button
  label="다음"
  loading={loading}
  onClick={handleClick}
  className="mb-10"
/>;
```

### 요구사항 5. 생성한 버튼의 스토리북을 만들어주세요. (상태별)

이 버튼은 `다음`,`이전` 이라는 두 가지 버튼에서 사용되었습니다. story 파일은 다음과 같습니다.

```tsx
// apps/storybook/src/stories/Button.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button"; // ✅ UI 패키지에서 가져옴

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "다음",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: "다음",
  },
};
```

저는 두가지의 상태로 분류 하였습니다.

- 버튼의 기본상태
- 버튼의 로딩상태

기본상태는 문자 그대로 평상시의 상태입니다. 그리고 로딩상태는 버튼을 클릭하여 해당 버튼에서 api를 호출하여
데이터를 불러오는 동안에 중복 호출이 되는 것을 막고자하는 상태입니다. 그 외에 좀더 다양한 상태를 분류할수 있나 고민하였으나
해당 과제에서는 페이지수가 두개뿐이고, 버튼이 하는 역할도 두가지뿐이라고 생각하여 이렇게 두가지 상태로 분류하였습니다.

### 요구사항 6. 생성한 버튼을 web에 import해서 사용해주세요.

요구사항 4번에서 같이 설명하였습니다.

### 요구사항 7. Css 작성은 자유롭게 해주셔도 됩니다. (Ex. Css module, tailwind….)

styling으로 tailwind 기술스택을 사용하였습니다.

### 요구사항 8. 사진 조회 전 route : “.../”, 조회 후 : “/result”

web 프로젝트에서 루트 페이지를 사진을 조회하는 버튼이 존재하는 페이지, result 페이지를 사진을 조회하는 버튼 (다음버튼)을 클릭하면 이동하는 페이지로 설정하여 개발하였습니다. 디자인은 주어진 figma를 참조하였습니다. 자세한 내용은 아래 두 파일을 참조 부탁드립니다.

- web/app/page.tsx
- web/app/result/page.tsx

### 요구사항 9. 사진 조회 api는 “https://picsum.photos/id/0/info” 을 이용해주세요.

주어진 api를 tanstack query를 활용하여 조회하였습니다.

```tsx
//web/app/utils.ts
export interface ImageInfo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export async function fetchImageInfo(): Promise<ImageInfo> {
  const res = await fetch("https://picsum.photos/id/0/info");
  if (!res.ok) {
    throw new Error("데이터 불러오기 실패");
  }
  return res.json();
}
```

### 요구사항 10. 사진 조회 api 통신 후 response를 “/result” 페이지에 전달하는 방식으로 만들어주세요.

루트 페이지에서 다음 버튼을 클릭하면 tanstack Query useMutation hook을 이용하여 데이터를 받아오고 이를 zustand에 저장한 다음에, result 페이지로 이동하는 방식으로 개발하였습니다.

```tsx
//web/app/page.tsx

export default function Page() {
  const router = useRouter();
  const setImageData = useImageStore((state) => state.setImageData);
  const imageData = useImageStore((state) => state.imageData);
  const [loading, setLoading] = useState(false);

  // useMutation의 mutate 함수를 활용
  const { mutateAsync } = useMutation({
    mutationFn: fetchImageInfo,
    onSuccess: (data) => {
      setImageData(data);
      router.push("/result");
    },
    onError: (error) => {
      console.error("API 호출 실패", error);
    },
  });

  // 디바운스를 적용하여 여러번 클릭해도 api 중복호출이 되지않도록 방지
  const debouncedClick = useMemo(
    () =>
      debounce(async () => {
        try {
          await mutateAsync();
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }, 500),
    [mutateAsync]
  );

  const handleClick = () => {
    setLoading(true);
    debouncedClick();
  };

  useEffect(() => {
    if (imageData) {
      router.replace("/result");
    }
  }, [imageData, router]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between ">
      <div className="flex justify-center w-full size-4 font-medium mt-4">
        <span>한석진</span>
      </div>

      <div className="flex w-full flex-col items-center font-semibold text-3xl ">
        <span>안녕하세요</span>
        <span>한석진입니다.</span>
      </div>

      <Button
        label="다음"
        loading={loading}
        onClick={handleClick}
        className="mb-10"
      />
    </div>
  );
}
```

> - **useQuery가 아닌 useMutation을 사용한 이유**
>   tanstack Query에서는 보통 데이터를 받아올때는 useQuery를 이용합니다. 하지만 useQuery의 경우, 실행할 함수를 지정하면 해당 페이지에 접속하는 순간 api 함수 호출이 일어납니다. 하지만 해당 과제에서는 다음 버튼을 눌렀을때 api 호출이 일어나고 페이지를 이동하는 구조입니다.
>   맨처음에는 useQuery를 선언하고 disabled 처리를 한후에 버튼을 클릭할때 refetch 함수를 사용하는 식으로 만들었습니다. 하지만 이는 useQuery를 사용하기에는 좀 번거롭다고 느껴졌고 useMutation hook을 이용하는 것이 좀더 코드 상으로도 깔끔할것이라 판단하여 useMutation을 사용하였습니다.

### 요구사항 10. github에 Public으로 해당 프로젝트를 올려주세요.

https://github.com/0626na/open-plan 현재 깃허브 URL입니다.

### 요구사항 11. web 워크스페이스를 vercel을 사용해서 배포해주세요.

https://open-plan-web.vercel.app vercel에 배포된 URL입니다.

### 요구사항 12. Github url과 배포 Url을 메일로 회신해주세요.

문병곤님의 이메일로 03월 23일 오전 6시 22분에 송신하였습니다.

이하는 추가사항입니다.

### 추가사항 1. api 데이터 상태 관리는 tanstack-query를 사용해주세요.

요구사항 10번을 참조부탁드립니다.

### 추가사항 2. 사진 조회 데이터는 전역상태 라이브러리를 사용해서 관리해주세요. (Zustand 요망)

```tsx
// web/store/imageStore.ts
// zustand 선언 코드입니다.
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ImageInfo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface ImageStore {
  imageData: ImageInfo | null;
  setImageData: (data: ImageInfo) => void;
}

export const useImageStore = create(
  persist<ImageStore>(
    (set) => ({
      imageData: null,
      setImageData: (data: ImageInfo) => set({ imageData: data }),
    }),
    {
      name: "image-store", // sessionStorage에 저장될 key 이름
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
```

```tsx
// web/app/page.tsx
// ...

const setImageData = useImageStore((state) => state.setImageData);
const imageData = useImageStore((state) => state.imageData);
const [loading, setLoading] = useState(false);

const { mutateAsync } = useMutation({
  mutationFn: fetchImageInfo,
  onSuccess: (data) => {
    setImageData(data);
    router.push("/result");
  },
  onError: (error) => {
    console.error("API 호출 실패", error);
  },
});

// ...
```

zustand를 생성하였고 이를 tanstack-query를 활용하여 받은 데이터를 zustand에 저장하는 식으로 사용하였습니다.
새로고침을 해도 데이터가 유지되도록 sessionStorage에 저장할수 있도록 설정하였습니다.

### 추가사항 3. 새로 고침 시에도 데이터가 유지되게 해주세요.

추가사항 2번을 참조부탁드립니다.

### 추가사항 4. 사진 조회 버튼 클릭 액션에 디바운스 혹은 스로틀링을 걸어주세요.

```tsx
// web/app/page.tsx

//....
const { mutateAsync } = useMutation({
  mutationFn: fetchImageInfo,
  onSuccess: (data) => {
    setImageData(data);
    router.push("/result");
  },
  onError: (error) => {
    console.error("API 호출 실패", error);
  },
});

// 해당 함수에서 디바운스 처리를 합니다.
const debouncedClick = useMemo(
  () =>
    debounce(async () => {
      try {
        await mutateAsync();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 500),
  [mutateAsync]
);

const handleClick = () => {
  setLoading(true);
  debouncedClick();
};

//....
```

### 추가사항 5. 버튼 디바운스/ 스로틀링 시 로딩 애니메이션을 넣어주세요. (애니메이션 방식은 자유. Ex. Lottie, css…. )

tailwind css를 활용하여 로딩 애니메이션을 추가했습니다.

```tsx
//pacakges/ui/src/button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
  label: string;
}

export function Button({
  label,
  loading = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bg-black text-white w-80 h-16 rounded-xl mb-10 flex justify-center items-center ${className ?? ""}`}
      {...props}
      disabled={loading}
    >
      // 로딩처리 부분
      {loading && (
        <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin" />
      )}
      {!loading && <span>{label}</span>}
    </button>
  );
}
```

### 추가사항 6. 사진을 한번이라도 조회한 이력이 있을 시 “/result” 페이지로 자동으로 이동하게 해주세요.

useEffect hook을 이용하여, 현재 사진 전역 데이터가 존재할시에 /에 접속해도 바로 result로 이동하도록 설정하였습니다.

```tsx
//web/app/page.tsx

//...

useEffect(() => {
  if (imageData) {
    router.replace("/result");
  }
}, [imageData, router]);

//...
```

### 추가사항 7. 사진 조회페이지의 정보 영역에 스켈레톤 처리를 해주세요.

```tsx
// web/app/result/page.tsx

// ...

     {/* 본문 내용 */}
      <div className="flex w-full flex-col xl:flex-row gap-20 items-center justify-center flex-1">
        {/* 이미지 */}
        {imageData?.download_url ? (
          <ImageSection src={imageData?.download_url} alt="이미지" />
        ) : (
          <ImageLoading />
        )}

        {/* 사진정보*/}
        <div className="flex flex-col gap-4 items-center w-full">
          {/* id / author */}
          <Card>
            <CardItem
              title="id"
              value={imageData?.id ?? ""}
              loading={!imageData?.id}
              className="flex-1"
            />
            <CardItem
              title="author"
              value={imageData?.author ?? ""}
              loading={!imageData?.author}
              className="flex-1"
            />
          </Card>

          {/* width / height */}
          <Card>
            <CardItem
              title="width"
              value={imageData?.width.toLocaleString() ?? ""}
              className="flex-1"
              loading={!imageData?.width}
            />
            <CardItem
              title="height"
              value={imageData?.height.toLocaleString() ?? ""}
              className="flex-1"
              loading={!imageData?.height}
            />
          </Card>

          {/* url / download_url */}
          <div className="flex flex-col w-full bg-white p-4 rounded-xl shadow-sm">
            <div className="mb-2">
              <p className="text-sm font-bold text-black">url</p>
              {imageData?.url ? (
                <Link
                  href={imageData.url}
                  target="_blank"
                  className="text-black text-opacity-50 underline break-all"
                >
                  {imageData?.url}
                </Link>
              ) : (
                <InfoLoading />
              )}
            </div>
            <div>
              <p className="text-sm font-bold text-black">download_url</p>
              {imageData?.download_url ? (
                <Link
                  href={imageData?.download_url ?? ""}
                  target="_blank"
                  className="text-black text-opacity-50 underline break-all"
                >
                  {imageData?.download_url ?? ""}
                </Link>
              ) : (
                <InfoLoading />
              )}
            </div>
          </div>
```

```tsx
// web/app.result/components/loading.tsx
export function InfoLoading() {
  return <div className="w-full h-8 bg-gray-200 animate-pulse rounded" />;
}

export function ImageLoading() {
  return (
    <div className="aspect-[3/2] w-full bg-gray-300 rounded-xl animate-pulse" />
  );
}
```

사진 조회 페이지에서, 사진과 id, author등의 각 데이터마다 조회가 됐는지 안됐는지를 확인하고 아직 조회중이면
스켈레톤 컴포넌트가 출력되도록 설정하였습니다.

### 추가사항 8. 사진을 조회한 이력없이 “/result”로 이동하는 경우, 1초 뒤 메인 페이지로 이동시켜주세요.

```tsx
//web/app/result/page.tsx

// 이미지 조회 이력이 없으면 1초 후 메인 페이지로 이동
useEffect(() => {
  if (!imageData) {
    const timer = setTimeout(() => {
      router.replace("/"); // 메인 페이지로 이동 (replace 사용하여 히스토리 관리)
    }, 1000); // 1초 후 실행
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }
}, [imageData, router]);
```

useEffect hook을 활용하여, 전역 상태의 이미지 데이터가 존재하지 않을시, 1초후에 루트 페이지로 이동하도록 하였습니다.

### 추가사항 9. 사진 조회 페이지의 배경은 조회한 사진을 이용해서 만들어주세요.

```tsx
//web/app/result/page.tsx

//...

 return (
    <div className="relative flex flex-col lg:flex-row min-h-screen w-full justify-center p-4">
      {/* 배경 이미지 */}
      {imageData && (
        <Image
          src={imageData?.download_url ?? ""}
          alt="배경 이미지"
          fill
          className="object-cover opacity-40 blur-sm brightness-75 z-[-1]"
          priority
        />
      )}

      {/* 본문 내용 */}
      <div className="flex w-full flex-col xl:flex-row gap-20 items-center justify-center flex-1">
        {/* 이미지 */}
        {imageData?.download_url ? (
          <ImageSection src={imageData?.download_url} alt="이미지" />
        ) : (
          <ImageLoading />
        )}

//...
```

api로 받아온 이미지를 전체 배경이미지로 설정하였습니다.

### 추가사항 10. 404페이지를 만들고 존재하지 않는 route에 접근 시 노출시켜 주세요.

```tsx
// web/app/not-found.tsx

"use client";

import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F2F3F5] text-center px-4">
      <h1 className="text-4xl font-bold text-black mb-4">
        404 - 페이지를 찾을 수 없습니다
      </h1>
      <p className="text-gray-600 mb-8">
        요청하신 경로가 존재하지 않아요. 경로가 올바른지 확인해주세요.
      </p>
      <Button
        className="bg-black text-white px-6 py-3 rounded-xl"
        onClick={() => router.push("/")}
        label="메인으로 돌아가기"
      />
    </div>
  );
}
```

not-found 파일을 선언하여 404 페이지를 생성하였습니다.

## 어려웠던 부분

저는 터보레포와 스토리북을 거의 다뤄본 경험이 없습니다. 해서 이 두 부분을 설정하는게 어려웠습니다. 특히 터보레포의 환경설정을 하는것이
많은 어려움이 있었습니다.

### tailwind config 경로 설정하기

터보레포는 하나의 리포지토리가 아닌 멀티 리포지토리를 다루는 기술 스택입니다. 그래서 제가 예상했던 것과 다르게 움직이는 케이스가 많았습니다.

- web 프로젝트에 import한 package/ui 버튼에 tailwind css가 적용이 되지 않는다.
  코드를 작성할떄 tailwind가 적용이되었고 인텔리센스도 작동을 하여 tailwind로 스타일링을 하였습니다. 하지만, 로컬환경에서 실행을 해보니 적용이 되지 않거나.. tailwind 코드와 전혀 상관없이 스타일링이 나타나는 등의 경우가 많았습니다. 처음에는 계속 코드부분에서 원인을 찾다보니까 도무지 알수가 없었습니다. 많은 시간을 들여서 tailwind config 파일에 package/ui의 경로도 추가를 해주어야 한다는 것을 알게 되어 해결하게 되었습니다. 단순 경로문제였지만 터보레포 경험이 거의 없던 저에게는 가장 큰 고비였습니다.

### 배포시에 각 프로젝트간의 의존성

web 프로젝트를 vercel에 배포하고나서 로컬환경에서는 정상적으로 나오던 버튼 컴포넌트가 배포된 url에서는 tailwind가 또 적용되지 않는 문제를 만나게 되었습니다. 이또한 왜 되지 않는지 원인을 찾는것에 많은 시간이 걸렸습니다. 나중에 원인은 ui 패키지의 tailwind css를 선언한 global.css 파일을 import하는 프로젝트의 root파일에.. (Next.js에서는 rootLayout)에 import를 하지 않아서 였습니다.
이 또한 결국 터보레포의 경로문제였습니다.

이러한 어려움이 있었지만 결국 원인을 찾아내어 해결을 하였습니다.

## 이 과제로 보여드리는 부분

저는 위에서 말했듯이 터보레포와 스토리북에 관해서 잘 모르는 상태로 과제를 시작하였습니다. 하지만 이 3일간 포기하지 않고 최대한 빠르게 학습을 하고 여러 문제를 해결하면서 제가 할수 있는 최대한으로 과제에 성실하게 임했습니다. 저는 이러한 장점이 있습니다.

- 적극적인 학습태도 및 빠른 학습능력
  현대의 개발환경은 기술 춘추전국시대라 할수 있을정도로 정말 빠른시간에 많은 기술들이 쏟아져나옵니다. 이러한 모든 기술들을 전부다 외우고 익힌다는 것은 현실적으로 불가능하다고 생각합니다. 그렇기에 개발자는 언제나 새로운걸 배우는데에 익숙해져야 합니다. 그리고 빠르게 배울수 있어야 합니다. 저는 이러한 태도와 능력을 가지고 있습니다.

- 끝까지 포기하지 않는 끈기
  빠르게 학습을 한다고 했지만 그래도 3일은 매우 짦은시간이었습니다. 과제를 하면서 나중에 알고보면 정말 사소한 부분에서 너무 많은 시간을 허비하는 일을 여러번 겪으면서 이 과제를 그냥 포기할까라는 생각도 많이 들었습니다. 하지만 시간이 주어진 이상 끝까지 할수있는데까지는 해보자라는 마음가짐으로 결국 과제를 끝낼수 있게 되었습니다. 저에게는 개발자라면 가지고 있어야할 끈기를 가지고 있습니다.
