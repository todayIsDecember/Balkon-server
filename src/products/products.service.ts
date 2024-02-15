import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/createProductDto';

@Injectable()
export class ProductsService {
	constructor(private readonly prismaService: PrismaService) {}

	// Отримати продукт по імені
	async getByName(name: string) {
		return this.prismaService.products.findFirst({
			where: {
				product_name: name,
			},
		});
	}

	//Створити новий продукт
	async create(dto: CreateProductDto) {
		return this.prismaService.products.create({
			data: {
				product_name: dto.product_name,
				product_photo: dto.product_description,
				product_price: dto.product_price,
				product_description: dto.product_description,
				product_weight: dto.product_weight,
				category_id: dto.category_id,
			},
		});
	}
}
