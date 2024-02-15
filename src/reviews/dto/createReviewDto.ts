import { IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
	@IsString({
		message: 'це поле обов`язкове',
	})
	title: string;

	@IsNumber()
	foodRaiting: number;

	@IsNumber()
	serviceRaiting: number;

	@IsNumber()
	atmosthereRaiting: number;
}
