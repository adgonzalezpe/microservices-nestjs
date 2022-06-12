import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
    constructor(@Inject('DATABASE_SERVICE') private client: ClientProxy) {}

    welcome() {
        return `Microservice with database POSTGRESS example`;
    }
}
