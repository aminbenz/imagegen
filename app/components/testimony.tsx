"use client";
import Image from "next/image";
import Link from "next/link";
import { Props } from "next/script";
import React, { PropsWithChildren } from "react";

const TwitterHandle: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-blue-500">{children}</span>;
};

const Author: React.FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="duration-150 text-zinc-200 hover:text-zinc-50"
  >
    {children}
  </Link>
);

const Title: React.FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="text-sm duration-150 text-zinc-500 hover:text-zinc-300"
  >
    {children}
  </Link>
);

export const Testimonials = () => {
  const posts: {
    content: React.ReactNode;
    link: string;
    author: {
      name: React.ReactNode;
      title?: React.ReactNode;
      image: string;
    };
  }[] = [
    {
      content: (
        <div>
          <p>
            This website, created by <TwitterHandle>@AminBenzz</TwitterHandle>
          </p>
          <p>
            lets you generate unique images using prompts. Just describe what
            you want the image to look like and the AI system will create it for
            you.
          </p>
          <br />
          <p>
            It&apos;s a really fun and creative way to explore your imagination
            and see what kind of images you can come up with.
          </p>
          <br />
          <p>
            Give it a try and see what kind of amazing images you can generate
            😉
          </p>
        </div>
      ),
      link: "https://twitter.com/AminBenzz",
      author: {
        name: <Author href="https://twitter.com/AminBenzz">Amin Benz</Author>,
        title: (
          <Title href="https://twitter.com/AminBenzz">CEO @AminBenzz</Title>
        ),
        image:
          "https://i.ibb.co/GnPG9Ph/E6-F39-A74-882-B-4102-8-EDB-AEB7-E078-ED60-1675348658008.jpg",
      },
    },
    {
      content: (
        <div>
          <p>
            <TwitterHandle>@ghassen_demni</TwitterHandle> I absolutely love this
            website! The image generation feature is incredible. I can enter a
            few words describing what I want the image to look like, and in just
            a few seconds, the AI system generates a beautiful, unique image.
          </p>
          <br />
          <p>
            I highly recommend this website to anyone looking for a fun and
            creative way to generate unique images.
          </p>
        </div>
      ),
      link: "https://twitter.comAminBenzz",
      author: {
        name: (
          <Author href="https://twitter.com/AminBenzz">Ghassen Demni</Author>
        ),
        title: <Title href="https://vercel.com">Developer at ImageGen</Title>,
        image:
          "https://i.ibb.co/0XQ7Dwv/278810180-5092194797524813-4745366525720262407-n.jpg",
      },
    },
    {
      content: (
        <div>
          <p>
            <TwitterHandle>@yesmine</TwitterHandle> This website uses
            cutting-edge artificial intelligence to generate images based on
            user prompts. It&apos;s really amazing to see how the AI can take a
            simple idea and turn it into a beautiful and unique image ✨
          </p>
        </div>
      ),
      link: "https://twitter.com/AminBenzz",
      author: {
        name: <Author href="https://twitter.com/AminBenzz">@Yesmine</Author>,
        title: <Title href="https://twitter.com/AminBenzz">Model</Title>,

        image:
          "https://i.ibb.co/BrRh9Hq/331644870-747546146683996-5666235681419514249-n.jpg",
      },
    },
  ];

  return (
    <section className="container mx-auto">
      <ul
        role="list"
        className="grid max-w-2xl grid-cols-1 gap-16 mx-auto sm:gap-8 lg:max-w-none lg:grid-cols-3"
      >
        {posts.map((post: any, i: number) => (
          <div
            key={i}
            className="flex flex-col justify-between duration-150 border rounded border-zinc-500/30 hover:border-zinc-300/30 hover:bg-zinc-900/30 group"
          >
            <Link
              href={post.link}
              target="_blank"
              className="whitespace-pre-line text text-zinc-500 p-6"
            >
              {post.content}
            </Link>
            <div className="relative flex items-start justify-between p-6 duration-150 border-t bg-zinc-900/40 border-zinc-500/30 group-hover:border-zinc-300/30">
              <div>
                <div className="text-base font-display text-zinc-200">
                  {post.author.name}
                </div>
                <div className="mt-1 text-sm text-zinc-500">
                  {post.author.title}
                </div>
              </div>
              <div className="overflow-hidden rounded-full bg-zinc-50">
                <Image
                  className="object-cover h-14 w-14"
                  src={post.author.image}
                  alt=""
                  width={56}
                  height={56}
                />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};
