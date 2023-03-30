import getRandomUrls from "@/lib/getRandomUrls";
import Image from "next/image";
import React, { memo } from "react";

type LocalImagesProps = {
  images_urls?: any;
  n?: number;
  handleSelectedImg?: any;
};

const local_images_urls = getRandomUrls();

const LocalImages = memo<any>(({ handleSelectedImg }: any) => {
  return local_images_urls.map((url: string, index: any) => (
    <div
      className="img-container after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
      key={index}
      onClick={(e) => handleSelectedImg(e, index)}
    >
      <Image
        alt={"Dall2 aAI image"}
        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        src={url}
        fill
      />
    </div>
  ));
});

LocalImages.displayName = "LocalImages";

export default LocalImages;
