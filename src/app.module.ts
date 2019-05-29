import { Module } from '@nestjs/common';
import { RomanController } from './app.controller';
import { RomanService } from './app.service';

@Module({
  imports: [],
  controllers: [RomanController],
  providers: [RomanService],
})
export class RomanModule {}
