import { IsNumber, IsString } from 'class-validator';

export class CreateFirstCategoryDto {
	@IsString({ message: 'поле має бути заповнене в текстовому форматі' })
	first_category_name: string;

	@IsString()
	first_category_photo: string;

	@IsNumber()
	menu_id: number;
}
