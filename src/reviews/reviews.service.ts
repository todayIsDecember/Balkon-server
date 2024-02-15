import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto/createReviewDto';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

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
				created: format(new Date(), 'dd MMMM HH:mm', { locale: uk }),
			},
		});
	}

	//Отримати всі відгуки
	async getAll() {
		return this.prismaService.reviews.findMany({
			orderBy: {
				review_id: 'desc',
			},
		});
	}

	async getAllCount() {
		return this.prismaService.reviews.count({});
	}
}
