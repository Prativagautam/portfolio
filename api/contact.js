// api/contact.js
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { Resend } from "resend";
import { contactSchema } from "../src/lib/schemas.js";

const app = new Hono().basePath("/api");
const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", zValidator("json", contactSchema), async (c) => {
  // c.req.valid("json") is now guaranteed to match contactSchema —
  // no manual checks needed, Hono already rejected anything invalid
  const { name, email, message } = c.req.valid("json");

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "gautam.prativa35@example.com", // ← replace with your inbox
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return c.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return c.json({ error: "Failed to send message. Please try again." }, 500);
  }
});

export const POST = handle(app);