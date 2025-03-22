import Image from "next/image";

export default function ImageSection({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-full aspect-[3/2]">
      <Image src={src} alt={alt} fill className="object-cover rounded-3xl" />
    </div>
  );
}
