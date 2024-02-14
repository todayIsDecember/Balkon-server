import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateProductDto {
	@IsString()
	product_name: string;

	@IsString()
	product_photo: string;

	@IsString()
	product_description: string;

	@IsNumber()
	product_price: number;

	@IsNumber()
	product_weight: number;

	@IsNumber()
	first_category_id: number;

	@IsOptional()
	second_category_id: number;
}
