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
    const { id } = msg.chat

if (msg.text.toLowerCase() === 'hello'){
    bot.sendMessage(id, `Hello, ${msg.from.first_name}`);
} else {
    bot.sendMessage(id, debug(msg))
}
})
