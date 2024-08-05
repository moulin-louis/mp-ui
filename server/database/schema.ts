import { integer, pgSchema, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { avaibleTemplates } from '../../constants/framework';
export const component_schema = pgSchema('component_schema');

export const ComponentTable = component_schema.table('components', {
  id: serial('id').primaryKey(),
  name: text('name'),
  framework: varchar('framework', { length: 15, enum: avaibleTemplates as string[] }),
  description: text('description'),
  category: varchar('category', { length: 50 }),
  code: text('code').unique(),
  version: varchar('version', { length: 20 }),
  creatorId: integer('creator_id').references(() => UsersTable.id),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const TagsTable = component_schema.table('tags', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).unique(),
});

export const ComponentTagsTable = component_schema.table('component_tags', {
  componentId: integer('component_id').references(() => ComponentTable.id),
  tagId: integer('tag_id').references(() => TagsTable.id),
});

export const UsersTable = component_schema.table('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 50 }).unique(),
  email: varchar('email', { length: 255 }).unique(),
  password: varchar('password', { length: 255 }),
});
