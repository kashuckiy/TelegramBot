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

bot.onText(/\/start/, msg => {
    const { id } = msg.chat

    bot.sendMessage(id, debug(msg))

})

bot.onText(/\help (.+)/, (msg, [source, match]) => { //Забираюмо все рлюс остаток
    const { id } = msg.chat 
    
    bot.sendMessage(id, debug(match))
}) 

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Message!')
})
