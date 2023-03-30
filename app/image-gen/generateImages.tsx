import { useState, useMemo, memo, useEffect } from "react";
import Image from "next/image";

type ImageData = {
  url: string;
};

type GeneratedImagesProps = {
  data: ImageData[];
  alt: string;
  handleSelectedImg: (e: React.MouseEvent<HTMLDivElement>, index: number) => void;
};

const GeneratedImages = memo<GeneratedImagesProps>(function GeneratedImages({ data, alt, handleSelectedImg }) {
  return (
    <>
      {data.map(({ url }: ImageData, index: number) => (
        <div
          className="img-container after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          key={url}
          onClick={(e) => handleSelectedImg(e, index)}
        >
          <Image
            alt={alt}
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            src={url}
            fill
          />
        </div>
      ))}
    </>
  );
});

GeneratedImages.displayName = "GeneratedImages";

export default GeneratedImages;
