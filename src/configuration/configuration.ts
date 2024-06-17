import { registerAs } from '@nestjs/config';

export default registerAs('dao', () => ({
  PORT: process.env.PORT,
}));
