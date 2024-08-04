import { drizzle } from 'drizzle-orm/d1';
import { sql } from '@vercel/postgres';
export { sql, eq, and, or } from 'drizzle-orm';

import * as schema from '../database/schema';

export const tables = schema;

export function useDrizzle() {
    return drizzle(sql, { schema });
}

export type Color = typeof schema.colors;
