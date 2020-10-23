const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '788420263:AAEV8NT2xeljfJxlCG4L2WI825OpM6dqW-Q'

console.log('Bot has been started...')


const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
         timeout: 10   
        }
    }
})

bot.on('message', msg => {
    const markdown = `
    *Hello, ${msg.from.first_name}*
    _Italik text_
    `

    bot.sendMessage(msg.chat.id, markdown, {
        parse_mode:"Markdown"
    })
})
