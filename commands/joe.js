
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "whoisbest",
  cooldown: 10,
  description: i18n.__("whoisbest.description"),
  execute(message) {
    message
      .reply(i18n.__mf("whoisbest.result"))
      .catch(console.error);
  }
};