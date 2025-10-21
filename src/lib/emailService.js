import emailjs from "@emailjs/browser";

// Prefer env configuration; fall back to existing placeholders for local dev
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8j3m4qc";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_lo1498b";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "DuClVwzLddDqFv0bt";

// Initialize SDK (harmless if also passing the key per request)
try {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }
} catch {}

/**
 * Sends a contact form using EmailJS. Accepts a form element reference.
 * Returns a Promise that resolves on success and rejects on failure.
 */
export function sendContactForm(formElement) {
  return emailjs.sendForm(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    formElement,
    EMAILJS_PUBLIC_KEY
  );
}

/**
 * Sends a message using EmailJS with explicit fields.
 * Useful if not using a form element.
 */
export function sendMessage({ user_name, user_email, message }) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    { user_name, user_email, message },
    EMAILJS_PUBLIC_KEY
  );
}

export function isEmailJsConfigured() {
  return Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
}


