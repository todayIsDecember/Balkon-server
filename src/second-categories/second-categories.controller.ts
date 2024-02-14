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
import { SecondCategoriesService } from './second-categories.service';
import { CreateSecondCategoryDto } from './dto/createSecondCategories.dto';
import { ALREADY_EXIST_ERROR } from 'src/menu/menu.constants';
import { NOT_FOUND } from 'src/first-categories/firstCategories.constants';

@Controller('second-categories')
export class SecondCategoriesController {
	constructor(private readonly secondCategoriesService: SecondCategoriesService) {}
	@HttpCode(201)
	@Post('create')
	async create(@Body() dto: CreateSecondCategoryDto) {
		const category = await this.secondCategoriesService.findByName(dto.second_category_name);
		if (category) {
			throw new HttpException(ALREADY_EXIST_ERROR, HttpStatus.BAD_REQUEST);
		}
		return this.secondCategoriesService.create(dto);
	}

	@HttpCode(200)
	@Get('byMenuId/:id')
	async getByMenuId(@Param('id') id: number) {
		return this.secondCategoriesService.getByFirstCategoryId(id);
	}

	@Delete(':id')
	async delete(@Param('id') id: number) {
		const category = this.secondCategoriesService.findById(id);
		if (!category) {
			throw new HttpException(NOT_FOUND, HttpStatus.NOT_FOUND);
		}
		return this.secondCategoriesService.deleteById(id);
	}

	@HttpCode(200)
	@Get('byId/:id')
	async getById(@Param('id') id: number) {
		return this.secondCategoriesService.findById(id);
	}
}
