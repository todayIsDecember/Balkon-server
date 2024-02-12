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
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/createMenuDto';
import { ALREADY_EXIST_ERROR, MENU_NOT_FOUND } from './menu.constants';

@Controller('menu')
export class MenuController {
	constructor(private readonly menuService: MenuService) {}

	@HttpCode(200)
	@Get()
	async getMenu() {
		return this.menuService.getMenu();
	}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateMenuDto) {
		const existMenu = await this.menuService.findMenuByName(dto.menu_name);
		if (!existMenu) {
			return this.menuService.createMenu(dto);
		}
		throw new HttpException(ALREADY_EXIST_ERROR, HttpStatus.BAD_REQUEST);
	}

	@HttpCode(200)
	@Delete(':id')
	async delete(@Param('id') id: number) {
		const deleted = await this.menuService.findMenuById(id);
		if (!deleted) {
			throw new HttpException(MENU_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
		return this.menuService.delete(id);
	}
}
