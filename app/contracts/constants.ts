export const Session = {
  cookieName: "kimi_sid",
  maxAgeMs: 365 * 24 * 60 * 60 * 1000,
} as const;

export const ErrorMessages = {
  unauthenticated: "Authentication required",
  insufficientRole: "Insufficient permissions",
} as const;

export const Paths = {
  login: "/login",
  oauthCallback: "/api/oauth/callback",
} as const;

// ---------- app-specific ----------
export const statusLabel: Record<string, string> = {
  open: "เปิดรับคดี",
  investigating: "กำลังสืบสวน",
  closed: "ปิดคดีแล้ว",
  cold: "Cold Case",
};

export const caseTypeOptions = [
  "คดีฆาตกรรม",
  "คดีลักพาตัว",
  "คดีบุคคลสูญหาย",
  "คดีวางระเบิดและวัตถุระเบิด",
  "COLD CASE",
  "อื่นๆ",
] as const;
