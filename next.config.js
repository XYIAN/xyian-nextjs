/** @type {import('next').NextConfig} */
// const withImages = require('next-images');
module.exports = {
    // Production optimizations
    output: 'standalone', // Optimized for Netlify
    compress: true, // Enable gzip compression
    poweredByHeader: false, // Remove X-Powered-By header for security
    generateEtags: false, // Disable etags for better caching

    // Image optimization
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/XYIANSoftware/images/**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/XYIANSoftware/images/**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/XYIAN/headshots/**',
            },
        ],
        // Optimize images for production
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    },

    // SCSS optimization
    sassOptions: {
        includePaths: ['./src/styles'],
        outputStyle: 'compressed', // Minify SCSS in production
    },

    // Webpack optimizations
    webpack(config, { dev, isServer }) {
        // SVG handling
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        // Production optimizations
        if (!dev && !isServer) {
            // Optimize bundle splitting
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                    styles: {
                        name: 'styles',
                        test: /\.(css|scss)$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            };
        }

        return config;
    },

    // Experimental features for better performance
    experimental: {
        optimizeCss: true, // Optimize CSS
        scrollRestoration: true, // Better scroll restoration
    },

    // Headers for security and caching
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
            {
                source: '/static/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};
