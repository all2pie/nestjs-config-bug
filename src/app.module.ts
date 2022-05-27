import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AModule } from './a.module';
import { BModule } from './b.module';
import { CModule } from './c.module';

@Module({
  imports: [AModule, BModule, CModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
