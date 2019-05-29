import { Controller, Get, Param} from '@nestjs/common';
import { RomanService } from './app.service';

@Controller()
export class RomanController {
  constructor(private readonly romanService: RomanService) {}

  @Get('convert/:number')
  public convertNumber(@Param('number') number): string {
    const toConvert :number = parseInt(number);
    return this.romanService.convertToRoman(toConvert);
  }
}