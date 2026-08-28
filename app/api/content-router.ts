import { z } from "zod";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import {
  listArtworks,
  createArtwork,
  deleteArtwork,
  listCaseFiles,
  createCaseFile,
  deleteCaseFile,
} from "./queries/content";

// data URL image, capped ~3.5M chars (≈2.5MB binary) — client compresses before upload
const imageDataSchema = z
  .string()
  .max(3_500_000, "รูปใหญ่เกินไป")
  .refine((s) => s.startsWith("data:image/"), "ต้องเป็นไฟล์รูปภาพ");

export const contentRouter = createRouter({
  // ----- public reads -----
  listArtworks: publicQuery.query(() => listArtworks()),
  listCaseFiles: publicQuery.query(() => listCaseFiles()),

  // ----- admin writes -----
  addArtwork: adminQuery
    .input(
      z.object({
        title: z.string().min(1, "กรุณาใส่ชื่อภาพ").max(255),
        caption: z.string().max(2000).optional(),
        imageData: imageDataSchema,
      }),
    )
    .mutation(({ input }) => createArtwork(input)),

  removeArtwork: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => deleteArtwork(input.id)),

  addCaseFile: adminQuery
    .input(
      z.object({
        code: z.string().min(1, "กรุณาใส่รหัสคดี").max(64),
        title: z.string().min(1, "กรุณาใส่ชื่อคดี").max(255),
        caseType: z.string().min(1, "กรุณาเลือกประเภทคดี").max(120),
        status: z.enum(["open", "investigating", "closed", "cold"]).optional(),
        occurredOn: z.string().max(64).optional(),
        summary: z.string().max(2000).optional(),
        detail: z.string().max(20000).optional(),
        imageData: imageDataSchema.optional(),
      }),
    )
    .mutation(({ input }) => createCaseFile(input)),

  removeCaseFile: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => deleteCaseFile(input.id)),
});
