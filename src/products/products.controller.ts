import {
	Controller,
	HttpCode,
	Post,
	Body,
	HttpException,
	HttpStatus,
	Param,
	Get,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/createProductDto';
import { ALREADY_EXIST_ERROR, PRODUCT_NOT_FOUND } from './products.constants';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@HttpCode(201)
	@Post()
	async create(@Body() dto: CreateProductDto) {
		const isExist = await this.productsService.getByName(dto.product_name);
		if (isExist) {
			throw new HttpException(ALREADY_EXIST_ERROR, HttpStatus.BAD_REQUEST);
		}
		return this.productsService.create(dto);
	}

	@Get(':id')
	async getProduct(@Param('id') id: number) {
		const product = await this.productsService.getProductById(id);
		if (!product) {
			throw new HttpException(PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
		return product;
	}
}
