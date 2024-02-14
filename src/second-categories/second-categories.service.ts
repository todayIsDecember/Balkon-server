import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSecondCategoryDto } from './dto/createSecondCategories.dto';

@Injectable()
export class SecondCategoriesService {
	constructor(private readonly prismaService: PrismaService) {}
	async findByName(name: string) {
		return this.prismaService.second_categories.findFirst({
			where: {
				second_category_name: name,
			},
		});
	}

	// Пошук категорії по ідентифікатору
	async findById(id: number) {
		return this.prismaService.second_categories.findFirst({
			where: {
				second_category_id: Number(id),
			},
		});
	}

	// Створення нової категорії
	async create(dto: CreateSecondCategoryDto) {
		return this.prismaService.second_categories.create({
			data: {
				second_category_name: dto.second_category_name,
				second_category_photo: dto.second_category_photo,
				first_category_id: dto.first_category_id,
			},
		});
	}

	// Отримати всі категорії по меню ідентифікатору
	async getByFirstCategoryId(id: number) {
		return this.prismaService.second_categories.findMany({
			where: {
				first_category_id: Number(id),
			},
		});
	}

	// Видалити першу категорію по ідентифікатору
	async deleteById(id: number) {
		return this.prismaService.second_categories.delete({
			where: {
				second_category_id: Number(id),
			},
		});
	}
}
