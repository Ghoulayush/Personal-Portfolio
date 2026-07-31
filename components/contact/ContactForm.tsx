"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { submitMessage } from "@/lib/contact";

type FieldName = "name" | "email" | "message";
type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success";

const initialValues: FormValues = { name: "", email: "", message: "" };

const labels: Record<FieldName, string> = {
  name: "Name",
  email: "Email",
  message: "Message",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Your message must be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitMessage(values);
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("idle");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
      className="border border-line bg-surface p-6 sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
            {labels.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-accent">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
            {labels.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-accent">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-soft">
            {labels.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => handleChange("message", event.target.value)}
            aria-required="true"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="mt-2 w-full resize-y border border-line bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />
          {errors.message && (
            <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-accent">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent hover:border-accent focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
        <p role="status" className="font-mono text-xs text-ink-soft" aria-live="polite">
          {status === "success"
            ? "Message sent — I'll get back to you soon."
            : ""}
        </p>
      </div>
    </form>
  );
}
