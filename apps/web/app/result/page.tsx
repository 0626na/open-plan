"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { useImageStore } from "../../store/imageStore";
import { useEffect } from "react";
import { ImageLoading, InfoLoading } from "./components/loading";
import ImageSection from "./components/imageSection";
import CardItem from "./components/CardItem";
import Card from "./components/Card";

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
  // if (!imageData?.download_url) return <Loading />;

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
          {/* 버튼 */}
          <Button onClick={() => router.back()} label="이전" />
        </div>
      </div>
    </div>
  );
}
