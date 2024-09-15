/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: "incremental",
    reactCompiler: true,
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
