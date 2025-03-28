import { Controller, Get } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';



describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

@Controller()
export class AppController {
  constructor(private readonly appService: AppController) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
