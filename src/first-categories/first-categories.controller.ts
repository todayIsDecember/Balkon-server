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
import { FirstCategoriesService } from './first-categories.service';
import { CreateFirstCategoryDto } from './dto/createFirstCategoryDto';
import { ALREADY_EXIST_ERROR, NOT_FOUND } from './firstCategories.constants';

@Controller('first-categories')
export class FirstCategoriesController {
	constructor(private readonly firstCategoriesService: FirstCategoriesService) {}

	@HttpCode(201)
	@Post('create')
	async create(@Body() dto: CreateFirstCategoryDto) {
		const category = await this.firstCategoriesService.findByName(dto.first_category_name);
		if (category) {
			throw new HttpException(ALREADY_EXIST_ERROR, HttpStatus.BAD_REQUEST);
		}
		return this.firstCategoriesService.create(dto);
	}

	@HttpCode(200)
	@Get('byMenuId/:id')
	async getByMenuId(@Param('id') id: number) {
		return this.firstCategoriesService.getByMenuId(id);
	}

	@Delete(':id')
	async delete(@Param('id') id: number) {
		const category = this.firstCategoriesService.findById(id);
		if (!category) {
			throw new HttpException(NOT_FOUND, HttpStatus.NOT_FOUND);
		}
		return this.firstCategoriesService.deleteById(id);
	}

	@HttpCode(200)
	@Get('byId/:id')
	async getById(@Param('id') id: number) {
		return this.firstCategoriesService.findById(id);
	}
}
