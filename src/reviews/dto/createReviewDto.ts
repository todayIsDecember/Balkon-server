import { IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
	@IsString({
		message: 'це поле обов`язкове',
	})
	title: string;

	@IsString({
		message: 'це поле обов`язкове',
	})
	description: string;

	@IsNumber()
	raiting: number;
}
