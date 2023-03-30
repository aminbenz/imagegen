import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24">
      <div className="flex flex-col items-center justify-center max-w-3xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0">
        <div>
          <h1 className="py-4 text-3xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-7xl">
            Amin: <span className="text-gradient-sky">The Full Stack Developer</span> Who Will Bring Your{" "}
            <span className="text-gradient-orange">Ideas to Life</span>
          </h1>
          <p className="mt-6 leading-5 text-zinc-600 sm:text-center">
            Are you looking for a skilled and versatile developer to help you turn your ideas into reality? Look no
            further than Amin Benz, the full stack developer who can handle every aspect of your project, from front-end
            design to back-end coding and everything in between.
          </p>
          <div className="flex flex-col justify-center gap-4 mx-auto mt-8 sm:flex-row sm:max-w-lg">
            <Link
              href="https://aminbenz.vercel.app"
              target={"_blank"}
              className="sm:w-1/2 sm:text-center inline-block space-x-2 rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-white  ring-1 ring-zinc-600 hover:bg-white hover:text-zinc-900 duration-150 hover:ring-white hover:drop-shadow-cta"
            >
              Visit my website
            </Link>
            <Link
              href="/"
              // target={"_blank"}
              className="sm:w-1/2 sm:text-center inline-block transition-all space-x-2  rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800   bg-zinc-50 ring-1 ring-transparent hover:text-zinc-100 hover:ring-zinc-600/80  hover:bg-zinc-900/20 duration-150 hover:drop-shadow-cta"
            >
              <span>Hire me</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
