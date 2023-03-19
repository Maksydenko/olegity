const path = require("path");
const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@src": resolvePath("./src"),
      "@assets": resolvePath("./src/assets"),
      "@img": resolvePath("./src/assets/img"),

      "@components": resolvePath("./src/components"),
      "@base": resolvePath("./src/components/base"),
      "@common": resolvePath("./src/components/common"),
      "@layout": resolvePath("./src/components/layout"),

      "@pages": resolvePath("./src/pages"),
    },
  },
};
