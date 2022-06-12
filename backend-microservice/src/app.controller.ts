import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller('')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    welcome() {
        return this.appService.welcome();
    }
}
