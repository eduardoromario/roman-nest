import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  convertToRoman(toConvert :number): string{
    let numberRoman: string = ""; 

    const convertTable = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I"
    };

    const keys = Object.keys(convertTable).reverse();

    keys.forEach(key => {
      while (toConvert >= parseInt(key)) {
        toConvert -= parseInt(key)
        numberRoman += convertTable[key]
      }
    });
    return numberRoman;
  }
}
