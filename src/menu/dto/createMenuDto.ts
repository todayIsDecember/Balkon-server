import { IsString } from 'class-validator';

export class CreateMenuDto {
	@IsString({ message: 'поле має бути заповнене в текстовому форматі' })
	menu_name: string;

	@IsString()
	menu_photo: string;
}
