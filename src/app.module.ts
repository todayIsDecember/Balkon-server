import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FilesModule } from './files/files.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AboutModule } from './about/about.module';

@Module({
	imports: [PrismaModule, FilesModule, ProductsModule, CategoriesModule, ReviewsModule, AboutModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
