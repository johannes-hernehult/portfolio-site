import { useState, type FormEvent } from "react";
import styles from "./styles.module.css";

/** Renders the contact form and its submission state. */
export function Contact() {
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setIsSending(true);
    try {
      await new Promise((resolve) => window.setTimeout(resolve, 700));
      console.log("sent", values);
    } finally {
      setIsSending(false);
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
      </form>
    </section>
  );
}
