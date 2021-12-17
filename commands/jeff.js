
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "whoisjeff",
  cooldown: 10,
  description: i18n.__("whoisjeff.description"),
  execute(message) {
    message
      .reply(i18n.__mf("whoisjeff.result"))
      .catch(console.error);
  }
};