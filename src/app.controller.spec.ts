import { Test, TestingModule } from '@nestjs/testing';
import { RomanController } from './app.controller';
import { RomanService } from './app.service';

describe('RomanController', () => {
  let romanController: RomanController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RomanController],
      providers: [RomanService],
    }).compile();

    romanController = app.get<RomanController>(RomanController);
  });

  describe('numbers conversion', () => {
    it('should return "I"', () => {
      expect(romanController.convertNumber(10)).toBe('X');
    });
    it('should return "DIII"', () => {
      expect(romanController.convertNumber(503)).toBe('DIII');
    });
    it('should return "MMXIX"', () => {
      expect(romanController.convertNumber(2019)).toBe('MMXIX');
    });
  });

  describe('not a number', () => {
    it('should return empty', () => {
      expect(romanController.convertNumber('aaaa')).toBe('');
    });
  });
});
