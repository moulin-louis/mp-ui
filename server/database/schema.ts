import { pgSchema, serial, text, varchar } from 'drizzle-orm/pg-core';

export const mySchema = pgSchema('my_schema');

export const colors = mySchema.enum('colors', ['red', 'green', 'blue']);

export const mySchemaUsers = mySchema.table('components', {
  id: serial('id').primaryKey(),
  name: text('name'),
  framework: varchar('framework', { length: 15 }),
  code: text('code'),
});
