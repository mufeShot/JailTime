const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()

fs.readdir("./events/"), (err, files) => {}
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
)

client.login("NzAxODY4MTg1NDAxNjg4MDY0.Xp3v1g.Eto6Uuqj4NK8HcSTQdvmc3b1Xag")
