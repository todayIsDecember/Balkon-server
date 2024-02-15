import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpException,
	HttpStatus,
	Param,
	Post,
} from '@nestjs/common';
import { ALREADY_EXIST_ERROR, NOT_FOUND } from './categories.constants';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/CreateCategoryDto';

@Controller('categories')
export class CategoriesController {
	constructor(private readonly categoriesService: CategoriesService) {}

	//Створити категорію
	@HttpCode(201)
	@Post('create')
	async create(@Body() dto: CreateCategoryDto) {
		const category = await this.categoriesService.findByName(dto.category_title);
		if (category) {
			throw new HttpException(ALREADY_EXIST_ERROR, HttpStatus.BAD_REQUEST);
		}
		return this.categoriesService.create(dto);
	}

	//Видалити категорію
	@Delete(':id')
	async delete(@Param('id') id: number) {
		const category = this.categoriesService.findById(id);
		if (!category) {
			throw new HttpException(NOT_FOUND, HttpStatus.NOT_FOUND);
		}
		return this.categoriesService.deleteById(id);
	}

	//Отримати категорію
	@HttpCode(200)
	@Get('byId/:id')
	async getById(@Param('id') id: number) {
		return this.categoriesService.findById(id);
	}
}
