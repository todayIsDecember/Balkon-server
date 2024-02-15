import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto/createReviewDto';

@Injectable()
export class ReviewsService {
	constructor(private readonly prismaService: PrismaService) {}

	// Створити відгук
	async create(dto: CreateReviewDto) {
		return this.prismaService.reviews.create({
			data: {
				title: dto.title,
				atmosthereraiting: dto.atmosthereRaiting,
				serviceraiting: dto.serviceRaiting,
				foodraiting: dto.foodRaiting,
			},
		});
	}

	//Отримати всі відгуки
	async getAll() {
		return this.prismaService.reviews.findMany({});
	}

	async getAllCount() {
		return this.prismaService.reviews.count({});
	}
}
