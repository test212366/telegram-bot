
const TelegramApi = require('node-telegram-bot-api')
const translate = require('translate')

const token = '5242190280:AAEc6cJfv5qnDGCgTCaFTb2iOkDV1Ro81qs'

const bot = new TelegramApi(token, { polling: true })

bot.on('message', msg => {
	const text = msg.text
	const chatId = msg.chat.id
	const api = async () => {
		const translateText = await translate(`${text}`, 'ru')
		bot.sendMessage(chatId, `${translateText}`)
	}
	api()
})