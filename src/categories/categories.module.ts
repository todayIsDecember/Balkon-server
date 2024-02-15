import { Module } from '@nestjs/common';
import { FirstCategoriesController } from './categories.controller';
import { FirstCategoriesService } from './categories.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [FirstCategoriesController],
	providers: [FirstCategoriesService],
})
export class FirstCategoriesModule {}
