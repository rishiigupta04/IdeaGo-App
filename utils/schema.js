import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const Ideas = pgTable("ideas", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  username: text("username").notNull(),
  vote: integer("vote").default(0),
  createdAt: text("created_at").notNull(),
});
