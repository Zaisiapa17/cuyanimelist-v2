/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "placehold.jp",
                hostname: "cdn.myanimelist.net"
            }
        ]
    }
}

module.exports = nextConfig
