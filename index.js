const TelegramApi = require('node-telegram-bot-api');
const token = '7212623280:AAHf2wu06-8yaTnVgJfEH62xDUU961-l5o4';

const bot = new TelegramApi(token, { polling: true });

const start = () => {

	bot.setMyCommands([
		{ command: '/start', description: 'Старт' },
		{ command: '/chat_id', description: 'Получить ID чата' },
		{ command: '/help', description: 'Помощь' }
	])

	bot.on('message', async msg => {
		const chatId = msg.chat.id;
		const text = msg.text;

		if (text === '/start') {
			await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp');
			return bot.sendMessage(chatId, 'Hello');
		}

		if (text === '/chat_id') {
			return bot.sendMessage(chatId, `Your chat id: ${chatId}`);
		}

		if (text === '/help') {
			return bot.sendMessage(chatId, `Напиши /start`);
		}


		return bot.sendMessage(chatId, 'Я вас не понимаю, выберите команду');
	})


	bot.on('callback_query', async msg => {
		const data = msg.data;
		const chatId = msg.message.chat.id;
		console.log(chats[chatId]);
		if (+data === chats[chatId]) {
			return bot.sendMessage(chatId, 'Ты угадал', againOptions);
		} else
			return bot.sendMessage(chatId, `Ты не угадал, бот загадал число ${chats[chatId]}`, againOptions);
	});


}

start();



