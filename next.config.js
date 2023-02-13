/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const nextConfig = withLess({
    reactStrictMode: false,
    lessLoaderOptions: {},
    experimental: {
        appDir: true
    },
    images: {
        domains: ['cdn.staticaly.com', 'jsd.cdn.zzko.cn', 'localhost']
    }
});

module.exports = nextConfig;
