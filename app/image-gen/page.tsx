"use client";
import { useState, useMemo, memo, useEffect } from "react";
import Image from "next/image";
import { ErrorMessage } from "@components/error";
import fetchSuggestion from "lib/getSuggestion";
import SquigglyLines from "../components/SquigglyLines";
import getRandomSuggestion, {
  suggestions,
} from "../../lib/getRandomSuggestion";
import ImageSkeleton from "./skeleton";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import LinearDeterminate from "./progressbar";
import Carousel from "../components/carousel";
import useScreenSize from "@/hooks/useScreenSize";
import LocalImages from "./local_images";
import getRandomUrls from "@/lib/getRandomUrls";
import GeneratedImages from "./generateImages";

type ImageData = {
  id: number;
  public_id: string;
  format: string;
  blurDataUrl: string;
  url: string;
};

type GeneratedImagesProps = {
  data: ImageData[];
  alt: string;
  handleSelectedImg: (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => void;
};

interface ImageGenProps {}

type Size = "1024x1024" | "512x512" | "256x256";

type Style =
  | "Retro or vintage"
  | "Grunge"
  | "Digital Art"
  | "Modern"
  | "Flat design"
  | "Illustrative "
  | "Fantasy"
  | "Pixel Art"
  | "Gothic"
  | "3D render";

// DONE: add download futures and zoom in zoom out
// TODO: add count in DB of gen images
// TODO: add muti langues
// TODO: add more AI IMAGES
// TODO: USER GALLARI IMAGES GENERATED
// TODO: FULL AUTO GEN TEXT FEAT
// FEAT: use can uplaod photo and dallee generate photos like him

export default function ImageGen(props: ImageGenProps) {
  const isGreaterThanHD = useScreenSize();
  const [prompt, setPrompt] = useState<string>("");
  const [style, setStyle] = useState<string>("");
  const [n, setN] = useState<number>(3);
  const [size, setSize] = useState<Size>("1024x1024");
  const [data, setData] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const styles: Style[] = useMemo(
    () => [
      "Retro or vintage",
      "Grunge",
      "Digital Art",
      "Modern",
      "Flat design",
      "Illustrative ",
      "Fantasy",
      "Pixel Art",
      "Gothic",
      "3D render",
    ],
    []
  );

  const sizes: Size[] = useMemo(() => ["1024x1024", "512x512", "256x256"], []);

  const onSubmit = async () => {
    setIsLoading(true);

    const payload = {
      prompt: style.trim() ? `${prompt}, ${style}` : prompt,
      style,
      n,
      size,
    };

    try {
      const { status, result }: any = await fetchSuggestion(payload);
      reset();
      if (status === 200) setData(result);
    } catch (e) {
      console.error(e);
      setError("Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isGreaterThanHD) {
      setN(4);
    } else {
      setN(3);
    }
  }, [isGreaterThanHD]);

  const reset = () => {
    setStyle("");
    setError("");
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [viewedPhoto, setViewedPhoto] = useState<string>();
  const [index, setIndex] = useState<number>(0);

  const handleSelectedImg = (e: any, index: number) => {
    const src = e.target.src;
    setViewedPhoto(src);
    setIsOpen(true);
    setIndex(index);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <div className="container px-8 mx-auto mb-10 mt-16 lg:mt-32 ">
      {error ? <ErrorMessage message={error} /> : null}
      {isOpen && (
        <div className="carousel-container">
          <Carousel
            images={data.length ? data.map(({ url }) => url) : getRandomUrls()}
            index={index}
            setIsOpen={setIsOpen}
            viewedPhotoSrc={viewedPhoto}
          />
        </div>
      )}
      <h1 className="text-center mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300">
        <span
          className="generate"
          onClick={() => setPrompt(getRandomSuggestion())}
        >
          Generate{" "}
        </span>
        your image{" "}
        <span className="relative whitespace-nowrap text-blue-600">
          <SquigglyLines />
          <span className="relative">using AI</span>
        </span>{" "}
      </h1>
      <form
        className="max-w-3xl mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex flex-col sm:flex-row align-center mt-8 gap-3">
          <label
            htmlFor="prompt"
            className="prompt-label block text-xs w-full sm:w-auto px-3 py-2 border rounded border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0"
          >
            <p className="font-medium text-zinc-100">Describe your image</p>
            <input
              list="sugg"
              type="search"
              name="prompt"
              id="prompt"
              required={true}
              minLength={5}
              maxLength={100}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
              placeholder="A cat submarine chimera, digital art"
              className="w-full p-0 text-base bg-transparent border-0 appearance-none text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
              value={prompt}
            />
            <datalist id="sugg">
              {suggestions.map((suggestion) => (
                <option key={suggestion} value={suggestion} />
              ))}
            </datalist>
          </label>
          <button
            style={{ cursor: !prompt.trim() ? " not-allowed" : undefined }}
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className={`btn btn-generate
      inline-flex w-full sm:w-auto justify-center items-center transition-all rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800 bg-zinc-200 ring-1 duration-15
      ${
        prompt.trim() && "hover:bg-white hover:drop-shadow-cta hover:text-black"
      }
      ${isLoading ? "animate-pulse" : ""}
    `}
          >
            <span>
              {isLoading ? (
                <Cog6ToothIcon className="w-5 h-5 animate-spin" />
              ) : (
                "Generate"
              )}
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-4 mt-4 sm:flex-row">
          {/* <div className="w-full sm:w-1/5">
              <label
                className="flex items-center justify-center h-15 px-3 py-2 text-sm whitespace-no-wrap duration-150 border rounded hover:border-zinc-100/80 border-zinc-600 focus:border-zinc-100/80 focus:ring-0 text-zinc-100 hover:text-white hover:cursor-pointer "
                htmlFor="file_input"
              >
                Upload a file
              </label>
              <input
                className="hidden"
                id="file_input"
                type="file"
                onChange={(e) => {
                  const file = e.target.files![0];
                  if (file.size > 1024 * 16) {
                    // setError("File size must be less than 16kb");
                    return;
                  }

                  const reader = new FileReader();
                  reader.onload = (e) => {
                    const t = e.target!.result as string;
                    // setText(t);
                  };
                  reader.readAsText(file);
                }}
              />
            </div> */}
          <div className="relative w-full h-15 px-3 py-2 duration-150 border rounded sm:w-2/5 hover:border-zinc-100/80 border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 ">
            <label
              htmlFor="style"
              className="block text-xs font-medium text-zinc-100"
            >
              Style
            </label>
            <input
              type="text"
              name="style"
              id="style"
              className="w-full p-0 text-base bg-transparent border-0 appearance-none text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="style" className="sr-only" />
              <select
                id="style"
                name="style"
                className="h-full py-0 pl-2 bg-transparent border-0 border-transparent rounded pr-7 text-zinc-500 focus:ring-0 sm:text-sm"
                onChange={(e) => setStyle(e.target.value)}
              >
                {styles.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full h-15 px-3 py-2 duration-150 border rounded sm:w-2/5 hover:border-zinc-100/80 border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 ">
            <label
              htmlFor="n"
              className="block text-xs font-medium text-zinc-100"
            >
              Number of images
            </label>
            <input
              type="number"
              max={4}
              min={1}
              name="n"
              id="n"
              className="w-full p-0 text-base bg-transparent border-0 appearance-none text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
              value={n}
              onChange={(e) => setN(e.target.valueAsNumber)}
            />
          </div>
          <div className="relative w-full h-15 px-3 py-2 duration-150 border rounded sm:w-2/5 hover:border-zinc-100/80 border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 ">
            <label
              htmlFor="size"
              className="block text-xs font-medium text-zinc-100"
            >
              Size
            </label>
            <input
              type="text"
              name="size"
              id="size"
              className="w-full p-0 text-base bg-transparent border-0 appearance-none text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
              value={size}
              onChange={(e: any) => setSize(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="style" className="sr-only" />
              <select
                id="style"
                name="style"
                className="h-full py-0 pl-2 bg-transparent border-0 border-transparent rounded pr-7 text-zinc-500 focus:ring-0 sm:text-sm"
                onChange={(e: any) => setSize(e.target.value)}
              >
                {sizes.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>
      <section
        className="sugg"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {isLoading && <LinearDeterminate />}
        <div
          className="image-gallery"
          style={{
            gridTemplateColumns: `repeat(auto-${
              data.length < 3 ? "fill" : "fit"
            }, minmax(300px, 1fr)`,
          }}
        >
          {isLoading ? (
            Array.from({ length: n <= 4 ? 4 : 3 }).map((_, index) => (
              <ImageSkeleton key={index} />
            ))
          ) : data.length === 0 ? (
            <LocalImages handleSelectedImg={handleSelectedImg} />
          ) : (
            <GeneratedImages
              data={data}
              alt={prompt}
              handleSelectedImg={handleSelectedImg}
            />
          )}
        </div>
      </section>
    </div>
  );
}
