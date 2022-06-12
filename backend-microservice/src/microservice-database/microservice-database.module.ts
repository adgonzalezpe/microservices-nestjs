import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
    ClientProxyFactory,
    ClientsModule,
    Transport,
} from '@nestjs/microservices';
import config from 'src/config';

@Global()
@Module({
    providers: [
        {
            provide: 'DATABASE_SERVICE',
            useFactory: (configService: ConfigType<typeof config>) => {
                return ClientProxyFactory.create({ transport: Transport.TCP });
            },
            inject: [config.KEY],
        },
    ],
    exports: ['DATABASE_SERVICE'],
})
export class MicroserviceDatabaseModule {}
