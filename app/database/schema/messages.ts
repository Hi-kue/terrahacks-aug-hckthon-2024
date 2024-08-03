import { integer, SQLiteTable, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

/**
 * Users Schema
 * @type {SQLiteTable}
 */
export const users: SQLiteTable = sqliteTable('messages', {
    id: integer('id', { mode: 'number' }).notNull().primaryKey(),
    user_id: integer('user_id').notNull(),
    model: text('model').notNull(),
    content: text('content').notNull(),
    timestamp: text('timestamp').notNull().default(sql`(CURRENT_TIMESTAMP)`),
});