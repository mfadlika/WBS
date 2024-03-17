const path = require("path");

module.exports = {
  i18n: {
    locales: ["default", "en", "id", "de"],
    defaultLocale: "default",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};
