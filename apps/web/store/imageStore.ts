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
      name: "image-store", // localStorage에 저장될 key 이름
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
