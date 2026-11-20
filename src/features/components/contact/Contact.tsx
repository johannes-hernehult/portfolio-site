import { useState, type FormEvent } from "react";
import styles from "./styles.module.css";

type Status = "idle" | "sending" | "sent" | "error";

// TODO: replace with the real request
async function sendMessage(values: Record<string, FormDataEntryValue>) {
  await new Promise((resolve) => setTimeout(resolve, 700));
  console.log("sent", values);
}

/** Renders the contact form and its submission state. */
export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const isSending = status === "sending";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      await sendMessage(values);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <h2>Contact</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.details}>
          <label className={styles.field}>
            Name
            <input autoComplete="name" name="name" required />
          </label>

          <label className={styles.field}>
            Email
            <input autoComplete="email" name="email" type="email" required />
          </label>
        </div>

        <label className={`${styles.field} ${styles.message}`}>
          Message
          <textarea name="message" required />
        </label>

        <button className={styles.submit} type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </button>

        <p role="status">
          {status === "sent" && "Message sent."}
          {status === "error" && "Something went wrong. Please try again."}
        </p>
      </form>
    </section>
  );
}
