import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoriesService } from './categories.service';

@Module({
	imports: [PrismaModule],
	controllers: [CategoriesController],
	providers: [CategoriesService],
})
export class CategoriesModule {}
