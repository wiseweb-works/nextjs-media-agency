/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL("https://fakeimg.pl/**"),
      new URL("https://flowbite.com/docs/images/**"),
      new URL("https://images.unsplash.com/**"),
    ],
  },
};

export default nextConfig;
