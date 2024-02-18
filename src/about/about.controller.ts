import { Controller, Get, HttpCode } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
	constructor(private readonly aboutService: AboutService) {}

	@HttpCode(200)
	@Get()
	async get() {
		return this.aboutService.get();
	}
}
