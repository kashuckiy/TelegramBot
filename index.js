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

const inline_keyboard = [
    [
        {
            text: 'Forward',
            callback_data: 'forward'
        },
        {
            text: 'Reply',
            callback_data: 'reply'
        }
    ],
    [
        {
            text: 'Edit',
            callback_data: 'edit'
        },
        {
            text: 'Delete',
            callback_data: 'delete'
        }
    ]
]

bot.on('callback_query', query => {

    const { chat, message_id, text } = query.message

    switch(query.data){
        case 'forward':
            //куда, откуда, что(ід того повідомлення які потрібно перенаправити)
            bot.forwardMessage(chat.id, chat.id, message_id)//Перенаправлення повідомлень
            break
    }
    //Застаріла версія
    // bot.answerCallbackQuery({
    //     callback_query_id: query.id
    // })

    bot.answerCallbackQuery(query.id, {callback_query_id: query.id})
    console.log(query)//log
})

bot.onText(/\/start/, (msg, [source, match]) => {
    
    const chatId  = msg.chat.id

    bot.sendMessage(chatId, 'Keyboard', {
        reply_markup:{
            inline_keyboard
        }
    })
})