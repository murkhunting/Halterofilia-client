/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    MONGO_URI:
      "mongodb+srv://marc:halterofilia@halterofilia.3juxkmf.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
