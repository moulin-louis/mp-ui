import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });
export default defineConfig({
  dialect: 'postgresql',
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  dbCredentials: {
    url: process.env.POSTGRES_URL || process.exit('42'),
  },
});
