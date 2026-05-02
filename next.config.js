/** @type {import('next').NextConfig} */
module.exports = {
    output: 'standalone',
    compress: true,
    poweredByHeader: false,
    generateEtags: false,

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
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60 * 60 * 24 * 30,
    },

    sassOptions: {
        includePaths: ['./src/styles'],
        outputStyle: 'compressed',
    },

    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },

    webpack(config, { dev, isServer }) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        if (!dev && !isServer) {
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

    experimental: {
        scrollRestoration: true,
    },

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
