import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AboutService {
	constructor(private readonly prismaService: PrismaService) {}

	async get() {
		return this.prismaService.about.findFirst();
	}
}
