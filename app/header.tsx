"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { map } from "zod";
import { FaGithub as GitHubIcon } from "react-icons/fa";

const navigation = [
  {
    name: "Image Generator",
    href: "/image-gen",
  },
  {
    name: "About",
    href: "/about",
  },
] satisfies { name: string; href: string; external?: boolean }[];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [locale, setLocal] = useState<string>();

  useEffect(() => {
    const lang = pathname?.split("/")[1] || "en";
    setLocal(lang);
  }, [pathname]);

  return (
    <header className="top-0 z-30 w-full px-4 sm:fixed backdrop-blur bh-zinc-900/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-2 pt-6 sm:h-20 sm:flex-row sm:pt-0">
          <Link
            href="/"
            className="text-2xl font-semibold duration-150 text-zinc-100 hover:text-white"
          >
            ImageGen
          </Link>
          {/* Desktop navigation */}
          <nav className="flex items-center grow">
            <ul className="flex flex-wrap items-center justify-end gap-4 grow">
              {navigation.map((item) => (
                <li className="" key={item.href}>
                  <Link
                    className={`flex items-center px-3 py-2 duration-150 text-sm sm:text-base  hover:text-zinc-50
                    ${
                      pathname === item.href ? "text-zinc-200" : "text-zinc-400"
                    }`}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="hidden md:block">
                <Link
                  href="https://github.com/aminbenz/imagegen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 duration-150 text-sm sm:text-base hover:text-zinc-50 text-zinc-400"
                >
                  <GitHubIcon className="w-5 h-5" />
                </Link>
              </li>
              {/* <li>
                <select
                  className="rounded"
                  defaultValue={locale}
                  onChange={(e) => {
                    const locale = e.target.value;
                    router.push(locale);
                  }}
                >
                  {["en", "ar", "fr"].map((lang: string) => (
                    <option key={lang} selected={lang === locale} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
