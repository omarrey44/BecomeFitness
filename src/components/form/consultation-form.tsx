"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2, AlertCircle } from "lucide-react";
import {
  consultationSchema,
  type ConsultationInput,
} from "@/lib/schema";
import {
  goalOptions,
  experienceOptions,
  contactMethods,
} from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const steps = ["Your goal", "Experience", "Your details"] as const;

// Fields validated before advancing each step.
const stepFields: (keyof ConsultationInput)[][] = [
  ["goal"],
  ["experience"],
  [
    "firstName",
    "lastName",
    "email",
    "phone",
    "preferredContact",
    "consent",
  ],
];

export function ConsultationForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");

  const {
    register,
    handleSubmit,
    trigger,
    control,
    setValue,
    formState: { errors },
  } = useForm<ConsultationInput>({
    resolver: zodResolver(consultationSchema),
    mode: "onTouched",
    defaultValues: {
      goal: undefined,
      experience: undefined,
      preferredContact: "Email",
      consent: false,
      company: "",
    },
  });

  const goal = useWatch({ control, name: "goal" });
  const experience = useWatch({ control, name: "experience" });

  const next = async () => {
    const valid = await trigger(stepFields[step], { shouldFocus: true });
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: ConsultationInput) => {
    if (status === "submitting") return; // duplicate-submission guard
    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Request failed");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <motion.div
        role="status"
        aria-live="polite"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-card border border-lime/30 bg-lime/5 p-10 text-center"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink">
          <Check className="h-7 w-7" aria-hidden />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-paper">
          Request received.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-gray-soft">
          Thanks for reaching out. We&apos;ll be in touch to talk through your
          goals and availability. Submitting this form does not confirm a
          training session.
        </p>
      </motion.div>
    );
  }

  const fieldBase =
    "w-full rounded-xl border border-paper/15 bg-charcoal/60 px-4 py-3 text-paper placeholder:text-gray-soft/60 focus:border-lime focus:outline-none";
  const errClass = "mt-1.5 flex items-center gap-1 text-xs text-ember";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Progress */}
      <div className="mb-8 flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <span
              className={`data-label ${i <= step ? "text-lime" : "text-gray-soft/50"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`h-1 flex-1 rounded-full transition-colors ${
                i <= step ? "bg-lime" : "bg-paper/10"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Honeypot — visually hidden, off accessibility tree */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {step === 0 && (
            <fieldset>
              <legend className="font-display text-xl font-bold text-paper">
                What&apos;s your main goal?
              </legend>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {goalOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() =>
                      setValue("goal", opt, { shouldValidate: true })
                    }
                    className={`rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                      goal === opt
                        ? "border-lime bg-lime/10 text-paper"
                        : "border-paper/15 text-gray-soft hover:border-paper/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {errors.goal && (
                <p className={errClass}>
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.goal.message}
                </p>
              )}
            </fieldset>
          )}

          {step === 1 && (
            <fieldset>
              <legend className="font-display text-xl font-bold text-paper">
                How much training experience do you have?
              </legend>
              <div className="mt-5 grid gap-2.5">
                {experienceOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() =>
                      setValue("experience", opt, { shouldValidate: true })
                    }
                    className={`rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                      experience === opt
                        ? "border-lime bg-lime/10 text-paper"
                        : "border-paper/15 text-gray-soft hover:border-paper/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {errors.experience && (
                <p className={errClass}>
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.experience.message}
                </p>
              )}
            </fieldset>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="data-label text-gray-soft">
                    First name
                  </label>
                  <input
                    id="firstName"
                    autoComplete="given-name"
                    className={`mt-2 ${fieldBase}`}
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className={errClass}>
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="data-label text-gray-soft">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    autoComplete="family-name"
                    className={`mt-2 ${fieldBase}`}
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className={errClass}>
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="data-label text-gray-soft">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    spellCheck={false}
                    className={`mt-2 ${fieldBase}`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className={errClass}>
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="data-label text-gray-soft">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    className={`mt-2 ${fieldBase}`}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className={errClass}>
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="preferredContact"
                    className="data-label text-gray-soft"
                  >
                    Preferred contact
                  </label>
                  <select
                    id="preferredContact"
                    className={`mt-2 ${fieldBase}`}
                    {...register("preferredContact")}
                  >
                    {contactMethods.map((m) => (
                      <option key={m} value={m} className="bg-charcoal">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="preferredDays"
                    className="data-label text-gray-soft"
                  >
                    Preferred days
                  </label>
                  <input
                    id="preferredDays"
                    placeholder="e.g. Mon, Wed…"
                    className={`mt-2 ${fieldBase}`}
                    {...register("preferredDays")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="preferredTimes"
                    className="data-label text-gray-soft"
                  >
                    Preferred times
                  </label>
                  <input
                    id="preferredTimes"
                    placeholder="e.g. Mornings…"
                    className={`mt-2 ${fieldBase}`}
                    {...register("preferredTimes")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="data-label text-gray-soft">
                  Short message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Anything you'd like us to know…"
                  className={`mt-2 ${fieldBase} resize-none`}
                  {...register("message")}
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-gray-soft">
                <input
                  type="checkbox"
                  className="mt-0.5 h-5 w-5 shrink-0 accent-lime"
                  {...register("consent")}
                />
                <span>
                  I agree to be contacted about my inquiry.
                  <span className="mt-1 block text-xs text-gray-soft/70">
                    Submitting this form does not confirm a training session. We
                    will contact you to discuss availability.
                  </span>
                </span>
              </label>
              {errors.consent && (
                <p className={errClass}>
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.consent.message}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {status === "error" && (
        <p
          role="alert"
          aria-live="assertive"
          className="mt-5 flex items-center gap-2 rounded-xl border border-ember/40 bg-ember/10 px-4 py-3 text-sm text-ember"
        >
          <AlertCircle className="h-4 w-4" aria-hidden /> {serverError}
        </p>
      )}

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-3 text-sm font-medium text-paper transition-colors hover:border-lime hover:text-lime"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        ) : (
          <span />
        )}

        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
          >
            Continue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                Send Request <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
