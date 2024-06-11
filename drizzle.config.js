import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:i2rFa6AqSteK@ep-round-star-a1uzry59.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
  schema: "./utils/schema.js",
  out: "./drizzle",
});
