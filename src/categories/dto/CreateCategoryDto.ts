import { IsNumber, IsString } from 'class-validator';

export class CreateCategoryDto {
	@IsString({ message: 'поле має бути заповнене в текстовому форматі' })
	category_title: string;

	@IsString()
	category_photo: string;

	@IsNumber()
	father_id: number;
}
