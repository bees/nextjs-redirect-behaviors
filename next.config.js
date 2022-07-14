/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/both-defined",
        destination: "/?fromConfig=true",
        statusCode: 301,
      },
      {
        source: "/config-only",
        destination: "/?fromConfig=true",
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
