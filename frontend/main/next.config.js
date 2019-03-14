const sharedWebpack = require("@dk3/shared-frontend/next.webpack.config")

module.exports = {
  target: "serverless",

  exportPathMap: async () => ({
    "/": { page: "/" },
    "/c": { page: "/c" },
  }),

  webpack: sharedWebpack,
}
