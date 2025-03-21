"use client";

import { Button } from "@repo/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useImageStore } from "../store/imageStore";
import debounce from "lodash/debounce";
import { useEffect, useMemo, useState } from "react";

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

export default function Page() {
  const router = useRouter();
  const setImageData = useImageStore((state) => state.setImageData);
  const imageData = useImageStore((state) => state.imageData);
  const [loading, setLoading] = useState(false);

  const { refetch } = useQuery<ImageInfo>({
    queryKey: ["imageInfo"],
    queryFn: fetchImageInfo,
    enabled: false,
    staleTime: 1000 * 60 * 5,
  });

  const handleClick = useMemo(
    () =>
      debounce(async () => {
        setLoading(true);
        // API 호출: 캐시에 데이터가 없으면 호출됨
        const result = await refetch();
        if (result.data) {
          setImageData(result.data);
          router.push("/result");
        }
        setLoading(false);
      }, 300), // 300ms 후 마지막 클릭만 실행
    [refetch, router, setImageData]
  );

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

      <div className="flex w-full flex-col items-center font-semibold size-8">
        <span>안녕하세요</span>
        <span>한석진입니다.</span>
      </div>

      <Button
        className="text-white bg-black w-80 h-16 rounded-xl mb-10 flex justify-center items-center"
        onClick={handleClick}
      >
        {loading ? (
          <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin" />
        ) : (
          "다음"
        )}
      </Button>
    </div>
  );
}
