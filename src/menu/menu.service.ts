import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMenuDto } from './dto/createMenuDto';

@Injectable()
export class MenuService {
	constructor(private readonly prismaService: PrismaService) {}

	// Отримати всі меню
	async getMenu() {
		return this.prismaService.menu.findMany({});
	}

	// створити нове поле в меню
	async createMenu(dto: CreateMenuDto) {
		return this.prismaService.menu.create({
			data: {
				menu_name: dto.menu_name,
				menu_photo: dto.menu_photo,
			},
		});
	}

	// знайти меню по назві
	async findMenuByName(name: string) {
		return this.prismaService.menu.findFirst({
			where: {
				menu_name: name,
			},
		});
	}

	// знайти меню по ідентифікатору
	async findMenuById(id: number) {
		return this.prismaService.menu.findFirst({
			where: {
				menu_id: Number(id),
			},
		});
	}

	//Видалити меню за ідентифікатором
	async delete(id: number) {
		return this.prismaService.menu.delete({
			where: {
				menu_id: Number(id),
			},
		});
	}
}
