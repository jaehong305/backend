import { Module } from '@nestjs/common';
import { SiteModule } from './apis/site.module';

@Module({
  imports: [SiteModule],
})
export class AppModule {}
