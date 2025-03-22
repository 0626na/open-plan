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
