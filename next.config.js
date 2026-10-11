// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Next 16 only allows quality 75 by default; the hero photo uses 95
        qualities: [75, 95],
    },
}

module.exports = nextConfig
