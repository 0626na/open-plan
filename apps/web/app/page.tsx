"use client";

import { Button } from "@repo/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useImageStore } from "../store/imageStore";
import debounce from "lodash/debounce";
import { useEffect, useMemo, useState } from "react";
import { fetchImageInfo } from "./utils";

export default function Page() {
  const router = useRouter();
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
      }, 600),
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
