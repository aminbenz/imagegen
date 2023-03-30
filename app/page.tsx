import Link from "next/link";
import { Testimonials } from "./components/testimony";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24">
      <div className="flex flex-col items-center justify-center max-w-3xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <Link
            href="https://github.com/aminbenz/image-generator/"
            className="text-zinc-400 relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-zinc-100/10 hover:ring-zinc-100/30 duration-150"
          >
            Created with love by{" "}
            <span className="font-semibold text-zinc-200">
              Amin Benz <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
        <div>
          <h1 className="py-4 text-3xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-7xl">
            Transform Your <span className="text-gradient-sky">Vision</span> into{" "}
            <span className="text-gradient-orange">Reality</span> with <span className="text-gradient-blue">AI-</span>
            Generated Images
          </h1>
          <p className="mt-6 leading-5 text-zinc-600 sm:text-center">
            With our advanced AI technology, you can easily and quickly generate high-quality images that perfectly
            match your vision
          </p>
          <div className="flex flex-col justify-center gap-4 mx-auto mt-8 sm:flex-row sm:max-w-lg ">
            <Link
              href="/about"
              className="sm:w-1/2 sm:text-center inline-block space-x-2 rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-white  ring-1 ring-zinc-600 hover:bg-white hover:text-zinc-900 duration-150 hover:ring-white hover:drop-shadow-cta"
            >
              About me
            </Link>
            <Link
              className="sm:w-1/2 sm:text-center inline-block transition-all space-x-2 rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800   bg-zinc-50 ring-1 ring-transparent hover:text-zinc-100 hover:ring-zinc-600/80 hover:bg-zinc-900/20 duration-150 hover:drop-shadow-cta"
              href="/image-gen"
            >
              <span>Try it</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <h2 className="py-4 text-3xl font-bold text-center text-zinc-300 ">Used and trusted by a growing community</h2>
      <Testimonials />
    </div>
  );
}
