import { z } from "zod";
import { goalOptions, experienceOptions, contactMethods } from "./content";

const tuple = <T extends readonly string[]>(arr: T) =>
  arr as unknown as [string, ...string[]];

export const consultationSchema = z.object({
  // Step 1
  goal: z.enum(tuple(goalOptions), {
    message: "Please choose a goal.",
  }),
  // Step 2
  experience: z.enum(tuple(experienceOptions), {
    message: "Please choose your experience level.",
  }),
  // Step 3
  firstName: z.string().trim().min(1, "First name is required.").max(80),
  lastName: z.string().trim().min(1, "Last name is required.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(160),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(30)
    .regex(/^[0-9+().\-\s]+$/, "Enter a valid phone number."),
  preferredContact: z.enum(tuple(contactMethods)),
  preferredDays: z.string().trim().max(120).optional().or(z.literal("")),
  preferredTimes: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please confirm you agree to be contacted.",
  }),
  // Honeypot — must stay empty (bots tend to fill every field).
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
