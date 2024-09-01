/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "'just-tutor-lah-stage.s3.us-east-1.amazonaws.com'",
              }
            ],
    },
};

export default nextConfig;
