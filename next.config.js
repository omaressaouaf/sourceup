const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  // reactStrictMode: true,
  // react : {useSuspense : false},
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  // },
});
