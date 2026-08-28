import {
  mysqlTable,
  mysqlEnum,
  serial,
  varchar,
  text,
  mediumtext,
  timestamp,
  // bigint,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  unionId: varchar("unionId", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 320 }),
  avatar: text("avatar"),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
  lastSignInAt: timestamp("lastSignInAt").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ---------- Gallery artworks (uploaded by admin) ----------
export const artworks = mysqlTable("artworks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  caption: text("caption"),
  // base64 data URL of the image (kept small by client-side compression)
  imageData: mediumtext("imageData").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ArtworkRow = typeof artworks.$inferSelect;

// ---------- Case files / timeline entries ----------
export const caseFiles = mysqlTable("caseFiles", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 64 }).notNull(), // e.g. CASE-001
  title: varchar("title", { length: 255 }).notNull(),
  caseType: varchar("caseType", { length: 120 }).notNull(), // ฆาตกรรม / ลักพาตัว / ...
  status: mysqlEnum("status", ["open", "investigating", "closed", "cold"])
    .default("open")
    .notNull(),
  occurredOn: varchar("occurredOn", { length: 64 }), // free-text date label
  summary: text("summary"),
  detail: text("detail"),
  imageData: mediumtext("imageData"), // optional evidence photo (base64 data URL)
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type CaseFileRow = typeof caseFiles.$inferSelect;

// TODO: Add your tables here. See docs/Database.md for schema examples and patterns.
//
// Example:
// export const posts = mysqlTable("posts", {
//   id: serial("id").primaryKey(),
//   title: varchar("title", { length: 255 }).notNull(),
//   content: text("content"),
//   createdAt: timestamp("created_at").notNull().defaultNow(),
// });
//
// Note: FK columns referencing a serial() PK must use:
//   bigint("columnName", { mode: "number", unsigned: true }).notNull()
