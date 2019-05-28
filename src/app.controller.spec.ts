import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('numbers conversion', () => {
    it('should return "I"', () => {
      expect(appController.convertNumber(10)).toBe('X');
    });
    it('should return "DIII"', () => {
      expect(appController.convertNumber(503)).toBe('DIII');
    });
    it('should return "MMXIX"', () => {
      expect(appController.convertNumber(2019)).toBe('MMXIX');
    });
  });

  describe('not a number', () => {
    it('should return empty', () => {
      expect(appController.convertNumber('aaaa')).toBe('');
    });
  });
});
