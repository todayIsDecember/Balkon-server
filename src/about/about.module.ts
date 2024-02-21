import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FilesModule } from 'src/files/files.module';

@Module({
	imports: [PrismaModule],
	providers: [AboutService],
	controllers: [AboutController],
})
export class AboutModule {}
