import * as cookie from "cookie";
import { createHash, timingSafeEqual } from "node:crypto";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { Session } from "@contracts/constants";
import { getSessionCookieOptions } from "./lib/cookies";
import { createRouter, authedQuery, publicQuery } from "./middleware";
import { signSessionToken } from "./kimi/session";
import { env } from "./lib/env";
import { upsertUser } from "./queries/users";

// Owner-only credentials (fixed single admin account)
const OWNER_USERNAME = "porwanadmin1001";
const OWNER_PASSWORD_HASH = createHash("sha256")
  .update("detectivepor")
  .digest();

export const authRouter = createRouter({
  loginWithPassword: publicQuery
    .input(z.object({ username: z.string(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userOk = input.username === OWNER_USERNAME;
      const passOk =
        input.password.length > 0 &&
        timingSafeEqual(
          createHash("sha256").update(input.password).digest(),
          OWNER_PASSWORD_HASH,
        );

      if (!userOk || !passOk) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
        });
      }

      const unionId = "local:porwanadmin1001";
      await upsertUser({
        unionId,
        name: "Porwan",
        role: "admin",
        lastSignInAt: new Date(),
      });

      const token = await signSessionToken({ unionId, clientId: env.appId });
      const opts = getSessionCookieOptions(ctx.req.headers);
      ctx.resHeaders.append(
        "set-cookie",
        cookie.serialize(Session.cookieName, token, {
          httpOnly: opts.httpOnly,
          path: opts.path,
          sameSite: opts.sameSite?.toLowerCase() as "lax" | "none",
          secure: opts.secure,
          maxAge: Session.maxAgeMs / 1000,
        }),
      );
      return { success: true };
    }),

  me: authedQuery.query((opts) => opts.ctx.user),
  logout: authedQuery.mutation(async ({ ctx }) => {
    const opts = getSessionCookieOptions(ctx.req.headers);
    ctx.resHeaders.append(
      "set-cookie",
      cookie.serialize(Session.cookieName, "", {
        httpOnly: opts.httpOnly,
        path: opts.path,
        sameSite: opts.sameSite?.toLowerCase() as "lax" | "none",
        secure: opts.secure,
        maxAge: 0,
      }),
    );
    return { success: true };
  }),
});
