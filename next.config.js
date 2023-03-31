/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "twitter.com",
      "pbs.twimg.com",
      "i.ibb.co",
      "images.pexels.com",
      "oaidalleapiprodscus.blob.core.windows.net",
    ],
  },
  
};

module.exports = nextConfig;
