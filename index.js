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
    const chatId = msg.chat.id
     bot.sendMessage(chatId, 'Inline keyboard', {
         reply_markup:{
             inline_keyboard: [
               [
                   {
                       text: 'Google',
                       url: 'https://google.com'
                   }
               ],
               [
                    {
                    text: 'Reply',
                    callback_data: 'reply'
                    },
                   {
                    text: 'Forward',
                    callback_data: 'forward'     
                   }
               ]  
             ]
         }
     })
})

bot.on('callback_query', query =>{
    bot.sendMessage(query.message.chat.id, debug(query)) //обект query і що в ньому знаходиться
    bot.answerCallbackQuery(query.id, `${query.data}`) // додаткове вилітаюче повідомлення підказка
})
