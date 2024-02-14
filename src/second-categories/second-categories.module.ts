import { Module } from '@nestjs/common';
import { SecondCategoriesController } from './second-categories.controller';
import { SecondCategoriesService } from './second-categories.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [SecondCategoriesController],
	providers: [SecondCategoriesService],
})
export class SecondCategoriesModule {}
