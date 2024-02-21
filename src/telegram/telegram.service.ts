import { Inject, Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { ITelegramOptions } from './telegram.interface';
import { getTelegramConfig } from 'src/config/getTelegramConfig';
import { TELEGRAM_MODULE_PROVIDER } from './telegram.constants';

@Injectable()
export class TelegramService {
	bot: Telegraf;
	options: ITelegramOptions;
	constructor(@Inject(TELEGRAM_MODULE_PROVIDER) options: ITelegramOptions) {
		this.bot = new Telegraf(options.token, {});
		this.options = options;
	}

	async sendMessage(message: string, chatId: string = this.options.chat_id) {
		await this.bot.telegram.sendMessage(chatId, message);
	}
}
