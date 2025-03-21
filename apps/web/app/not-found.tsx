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
      >
        메인으로 돌아가기
      </Button>
    </div>
  );
}
