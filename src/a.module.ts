import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({
      name: 'A',
    })),
  ],
})
export class AModule {
  constructor(config: ConfigService) {
    console.log('Module ====================', config.get('name'));
  }
}
