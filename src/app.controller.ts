import { Controller, Get, Param, HttpStatus, HttpException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('convert/:number')
  public convertNumber(@Param('number') number): string {
    const toConvert :number = parseInt(number);
    return this.appService.convertToRoman(toConvert);
  }
}