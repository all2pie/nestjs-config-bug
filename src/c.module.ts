import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({
      name: 'C',
    })),
  ],
})
export class CModule {
  constructor(config: ConfigService) {
    console.log('Module ====================', config.get('name'));
  }
}
