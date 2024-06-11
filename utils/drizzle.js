import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://neondb_owner:i2rFa6AqSteK@ep-round-star-a1uzry59.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
);
export const db = drizzle(sql, { schema });
