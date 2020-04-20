const kick = require("../commands/kick");

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})

module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message);
  }
};
