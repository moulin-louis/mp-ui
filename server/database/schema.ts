import { pgSchema, serial, text, varchar } from 'drizzle-orm/pg-core';
import { avaibleTemplates } from '../../constants/framework';
export const component_schema = pgSchema('component_schema');

export const ComponentTable = component_schema.table('components', {
  id: serial('id').primaryKey(),
  name: text('name'),
  framework: varchar('framework', { length: 15, enum: avaibleTemplates as string[] }),
  code: text('code').unique(),
});
