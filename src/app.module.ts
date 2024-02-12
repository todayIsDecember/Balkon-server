import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { PrismaModule } from './prisma/prisma.module';
import { FirstCategoriesModule } from './first-categories/first-categories.module';
import { FilesModule } from './files/files.module';

@Module({
	imports: [MenuModule, PrismaModule, FirstCategoriesModule, FilesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
