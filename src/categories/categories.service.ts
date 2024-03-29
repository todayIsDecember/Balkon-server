import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/CreateCategoryDto';

@Injectable()
export class CategoriesService {
	constructor(private readonly prismaService: PrismaService) {}

	// Пошук категорії по імені
	async findByName(title: string) {
		return this.prismaService.categories.findFirst({
			where: {
				category_title: title,
			},
		});
	}

	// Пошук категорії по ідентифікатору
	async findById(id: number) {
		return this.prismaService.categories.findFirst({
			where: {
				category_id: Number(id),
			},
			include: {
				categories: {
					select: {
						category_title: true,
						category_id: true,
					},
				},
				other_categories: true,
				products: true,
			},
		});
	}

	// Створення нової категорії
	async create(dto: CreateCategoryDto) {
		return this.prismaService.categories.create({
			data: {
				category_title: dto.category_title,
				category_photo: dto.category_photo,
				father_id: dto.father_id,
			},
		});
	}

	// Видалити першу категорію по ідентифікатору
	async deleteById(id: number) {
		return this.prismaService.categories.delete({
			where: {
				category_id: Number(id),
			},
		});
	}

	// Отримуємо головні категорії
	async getFatherCategories() {
		return this.prismaService.categories.findMany({
			where: {
				father_id: null,
			},
			include: {
				other_categories: {
					include: {
						categories: {
							select: {
								category_id: true,
							},
						},
					},
				},
			},
		});
	}
}
