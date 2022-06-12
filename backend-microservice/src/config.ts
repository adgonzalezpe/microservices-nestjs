import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export default registerAs('config', () => {
    return {};
});
