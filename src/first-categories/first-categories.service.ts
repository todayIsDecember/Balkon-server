import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFirstCategoryDto } from './dto/createFirstCategoryDto';

@Injectable()
export class FirstCategoriesService {
	constructor(private readonly prismaService: PrismaService) {}

	// Пошук категорії по імені
	async findByName(name: string) {
		return this.prismaService.first_categories.findFirst({
			where: {
				first_category_name: name,
			},
		});
	}

	// Пошук категорії по ідентифікатору
	async findById(id: number) {
		return this.prismaService.first_categories.findFirst({
			where: {
				first_category_id: Number(id),
			},
		});
	}

	// Створення нової категорії
	async create(dto: CreateFirstCategoryDto) {
		return this.prismaService.first_categories.create({
			data: {
				first_category_name: dto.first_category_name,
				first_category_photo: dto.first_category_photo,
				menu_id: dto.menu_id,
			},
		});
	}

	// Отримати всі категорії по меню ідентифікатору
	async getByMenuId(id: number) {
		return this.prismaService.first_categories.findMany({
			where: {
				menu_id: Number(id),
			},
		});
	}

	// Видалити першу категорію по ідентифікатору
	async deleteById(id: number) {
		return this.prismaService.first_categories.delete({
			where: {
				first_category_id: Number(id),
			},
		});
	}
}
