/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/inicio',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.stockcake.com',
            pathname: '/public/**'
        }]
    }
};
export default nextConfig;
