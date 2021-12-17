
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "whoisbob",
  cooldown: 10,
  description: i18n.__("whoisbob.description"),
  execute(message) {
    message
      .reply(i18n.__mf("whoisbob.result"))
      .catch(console.error);
  }
};