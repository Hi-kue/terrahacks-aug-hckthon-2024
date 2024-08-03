import { integer, SQLiteTable, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

/**
 * Users Schema
 * @type {SQLiteTable}
 */
export const users: SQLiteTable = sqliteTable('users', {
    id: integer('id', { mode: 'number' }).notNull().primaryKey(),
    role: text('role').notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    createdAt: text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    modifiedAt: text('modified_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
});