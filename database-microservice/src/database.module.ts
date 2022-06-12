import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
import { Client } from 'pg';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigType<typeof config>) => {
                const { db, host, password, port, user } =
                    configService.postgres;
                return {
                    type: 'postgres',
                    database: db,
                    username: user,
                    password,
                    port,
                    host,
                    synchronize: true,
                    autoLoadEntities: true,
                };
            },
            inject: [config.KEY],
        }),
    ],
    providers: [
        {
            provide: 'PG',
            useFactory: (configService: ConfigType<typeof config>) => {
                const { db, host, password, port, user } =
                    configService.postgres;
                const client = new Client({
                    user,
                    host,
                    database: db,
                    password,
                    port,
                });
                client.connect();
                return client;
            },
            inject: [config.KEY],
        },
    ],
    exports: ['PG', TypeOrmModule],
})
export class DatabaseModule {}
