CREATE TABLE IF NOT EXISTS "ideas" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"username" text NOT NULL,
	"vote" integer DEFAULT 0,
	"created_at" timestamp NOT NULL
);
