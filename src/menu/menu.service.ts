import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {
	constructor(private readonly prismaService: PrismaService) {}

	async getMenu() {
		return this.prismaService.menu.findMany({});
	}
}
