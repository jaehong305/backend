import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteResolver } from './site.resolver';

@Module({
  providers: [SiteService, SiteResolver],
})
export class SiteModule {}
