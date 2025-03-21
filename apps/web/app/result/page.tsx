"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { useImageStore } from "../../store/imageStore";
import { useEffect } from "react";

export default function Result() {
  const router = useRouter();
  const imageData = useImageStore((state) => state.imageData);

  // 이미지 조회 이력이 없으면 1초 후 메인 페이지로 이동
  useEffect(() => {
    if (!imageData) {
      const timer = setTimeout(() => {
        router.replace("/"); // 메인 페이지로 이동 (replace 사용하여 히스토리 관리)
      }, 1000); // 1초 후 실행
      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
    }
  }, [imageData, router]);

  // 스켈레톤 UI: imageData가 없을 때 보여줌
  if (!imageData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F2F3F5] p-8 animate-pulse">
        <div className="flex gap-10 items-center">
          {/* 이미지 영역 스켈레톤 */}
          <div className="w-[660px] h-[440px] bg-gray-300 rounded-xl"></div>
          {/* 정보 영역 스켈레톤 */}
          <div className="flex flex-col gap-4">
            {/* 첫 번째 행 스켈레톤 */}
            <div className="flex w-full justify-between items-center bg-white p-4 rounded-xl shadow-sm min-w-[660px]">
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-24"></div>
              </div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-24"></div>
              </div>
            </div>
            {/* 두 번째 행 스켈레톤 */}
            <div className="flex w-full justify-between items-center bg-white p-4 rounded-xl shadow-sm min-w-[660px]">
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-24"></div>
              </div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-24"></div>
              </div>
            </div>
            {/* 세 번째 행 스켈레톤 */}
            <div className="flex flex-col w-full bg-white p-4 rounded-xl shadow-sm min-w-[660px]">
              <div className="mb-2">
                <div className="h-4 bg-gray-300 rounded w-40"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-300 rounded w-40"></div>
              </div>
            </div>
            {/* 버튼 스켈레톤 */}
            <div className="w-80 h-16 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center  p-8">
      {/* 배경 이미지 */}
      <Image
        src={imageData.download_url}
        alt="배경 이미지"
        fill
        className="object-cover opacity-40 blur-sm brightness-75 z-[-1]"
        priority
      />

      <div className="flex gap-10 items-center">
        {/* 이미지 영역 */}
        {imageData && (
          <Image
            src={imageData.download_url}
            width={660}
            height={440}
            className="rounded-3xl"
            alt="이미지"
          />
        )}

        {/* 우측 카드 영역 */}
        <div className="flex flex-col gap-4 items-center">
          {/* 1. id / author */}
          <div className="flex w-full justify-between items-center bg-white p-4 rounded-xl shadow-sm min-w-[660px]">
            <div className="flex-1">
              <p className="text-sm font-bold text-black">id</p>
              <p className="text-black text-opacity-50">{imageData?.id}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-black">author</p>
              <p className="text-black text-opacity-50">{imageData?.author}</p>
            </div>
          </div>

          {/* 2. width / height */}
          <div className="flex w-full justify-between items-center bg-white p-4 rounded-xl shadow-sm min-w-[660px]">
            <div className="flex-1">
              <p className="text-sm font-bold text-black">width</p>
              <p className="text-black text-opacity-50">
                {imageData?.width?.toLocaleString()}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-black">height</p>
              <p className="text-black text-opacity-50">
                {imageData?.height?.toLocaleString()}
              </p>
            </div>
          </div>

          {/* 3. url / download_url */}
          <div className="flex flex-col w-full bg-white p-4 rounded-xl shadow-sm min-w-[660px]">
            <div className="mb-2">
              <p className="text-sm font-bold text-black">url</p>
              <Link
                href={imageData?.url ?? ""}
                target="_blank"
                className="text-black text-opacity-50 underline break-all"
              >
                {imageData?.url}
              </Link>
            </div>
            <div>
              <p className="text-sm font-bold text-black">download_url</p>
              <Link
                href={imageData?.download_url ?? ""}
                target="_blank"
                className="text-black text-opacity-50 underline break-all"
              >
                {imageData?.download_url}
              </Link>
            </div>
          </div>

          {/* 버튼 */}
          <Button
            className="text-white bg-black w-80 h-16 rounded-xl"
            onClick={() => router.back()}
          >
            이전
          </Button>
        </div>
      </div>
    </div>
  );
}
