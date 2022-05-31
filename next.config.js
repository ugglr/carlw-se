/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
