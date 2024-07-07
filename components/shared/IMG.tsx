import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  classes?: string;
  width?: number;
  height?: number;
};

export default function IMG({ src, alt, classes, width, height }: Props) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        className={classes}
        width={width}
        height={height}
        priority
      />
    </div>
  );
}
