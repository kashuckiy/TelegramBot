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

bot.on('inline_query', query =>{

    const results = []

    for(let i = 0; i < 5; i++){
        results.push({
           type: 'article',
           id: i.toString(),
           title: 'Title ' + i,
           input_message_content:{
            message_text:  `Article #${i+1}`
           }
        })
    }

    bot.answerInlineQuery(query.id, results, {
        cache_time: 0
    })
})
