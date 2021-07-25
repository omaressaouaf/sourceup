const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  reactStrictMode: true,
  react : {useSuspense : false},
  env: {
    APP_NAME: process.env.APP_NAME,
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  // },
});
