import { IsNumber, IsString } from 'class-validator';

export class CreateSecondCategoryDto {
	@IsString({ message: 'поле має бути заповнене в текстовому форматі' })
	second_category_name: string;

	@IsString()
	second_category_photo: string;

	@IsNumber()
	first_category_id: number;
}
