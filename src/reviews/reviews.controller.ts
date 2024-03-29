import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpException,
	HttpStatus,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/createReviewDto';
import { REVIEW_NOT_FOUND_ERROR } from './reviews.constants';
import { TelegramService } from 'src/telegram/telegram.service';
import { generateMessage } from './message';

@Controller('reviews')
export class ReviewsController {
	constructor(
		private readonly telegramService: TelegramService,
		private readonly reviewsService: ReviewsService,
	) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(201)
	@Post()
	async create(@Body() dto: CreateReviewDto) {
		const message = generateMessage(dto);
		this.telegramService.sendMessage(message);
		return this.reviewsService.create(dto);
	}

	@HttpCode(200)
	@Get()
	async getAll() {
		const reviewsCount = await this.reviewsService.getAllCount();
		if (!reviewsCount) {
			throw new HttpException(REVIEW_NOT_FOUND_ERROR, HttpStatus.NOT_FOUND);
		}
		const reviews = await this.reviewsService.getAll();
		const avg = await this.reviewsService.getAverageRaiting();
		return new Object({
			count: reviewsCount,
			avg,
			reviews: reviews,
		});
	}
}
