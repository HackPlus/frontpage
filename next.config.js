const gfm = require('remark-gfm');
const withMDX = require("@next/mdx")({
    extension: /\.mdx$/,
    options: {
      remarkPlugins: [ gfm ],
      providerImportSource: '@mdx-js/react',
    }
});

module.exports = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"]
});
