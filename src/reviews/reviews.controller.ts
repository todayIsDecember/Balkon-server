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

@Controller('reviews')
export class ReviewsController {
	constructor(private readonly reviewsService: ReviewsService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(201)
	@Post()
	async create(@Body() dto: CreateReviewDto) {
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
		return new Object({
			count: reviewsCount,
			...reviews,
		});
	}
}
