import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    sassOptions: {
      includePaths: [path.resolve(new URL(".", import.meta.url).pathname, "styles")],
    },
  },
};

export default nextConfig;
