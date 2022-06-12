import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        postgres: {
            db: process.env.POSTGRES_DB,
            port: parseInt(process.env.POSTGRES_PORT, 2),
            password: process.env.POSTGRES_PASSWORD,
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
        },
        key: '123456',
    };
});
