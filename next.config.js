const mdxPrism = require("mdx-prism");
const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  rehypePlugins: [mdxPrism],
})();
