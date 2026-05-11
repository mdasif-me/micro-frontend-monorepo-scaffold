import Image from 'next/image';
export interface IconProps {
  src: string;
  alt: string;
}
export default function Icon({ src, alt }: IconProps) {
  return (
    <Image
      draggable={false}
      src={src}
      alt={alt}
      width={20}
      height={20}
      aria-label={alt}
    />
  );
}
