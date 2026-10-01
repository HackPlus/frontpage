const gfm = require('remark-gfm');
const withMDX = require("@next/mdx")({
    extension: /\.mdx$/,
    options: {
      remarkPlugins: [ gfm ],
      providerImportSource: '@mdx-js/react',
    }
});

// Legacy hostnames that should permanently redirect to the canonical hackplus.org
const LEGACY_HOSTS = [
    "hackplus.io",
    "www.hackplus.io",
    "hackplus.com",
    "www.hackplus.com",
    "hackpl.us",
    "www.hackpl.us",
    "hack.vercel.app",
];

module.exports = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    async redirects() {
        return LEGACY_HOSTS.map((host) => ({
            source: "/:path*",
            has: [{ type: "host", value: host }],
            destination: "https://hackplus.org/:path*",
            permanent: true,
        }));
    },
});
