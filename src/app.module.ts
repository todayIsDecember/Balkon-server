import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FilesModule } from './files/files.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AboutModule } from './about/about.module';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTelegramConfig } from './config/getTelegramConfig';

@Module({
	imports: [
		ConfigModule.forRoot(),
		PrismaModule,
		FilesModule,
		ProductsModule,
		CategoriesModule,
		ReviewsModule,
		AboutModule,
		TelegramModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTelegramConfig,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
