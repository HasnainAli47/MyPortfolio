import emailjs from "@emailjs/browser";

// Email service isolated for future integration
// These identifiers were extracted from the previous Contact component
const EMAILJS_SERVICE_ID = "service_8j3m4qc";
const EMAILJS_TEMPLATE_ID = "template_lo1498b";
const EMAILJS_PUBLIC_KEY = "DuClVwzLddDqFv0bt";

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


