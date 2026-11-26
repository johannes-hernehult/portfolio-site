import { useState, type SubmitEvent } from "react";
import { sendContactEmail } from "./emailService";
import styles from "./styles.module.css";

type Feedback = {
  type: "success" | "error";
  message: string;
};

export function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    setIsSending(true);
    setFeedback(null);

    try {
      await sendContactEmail(form);
      form.reset();
      setFeedback({
        type: "success",
        message: "Thanks for reaching out! Your message has been sent.",
      });
    } catch (error) {
      console.error("Failed to send contact form:", error);
      setFeedback({
        type: "error",
        message: "Your message couldn't be sent. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <h2>Let's get in touch</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            autoComplete="email"
            required
          />
        </label>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="My Name"
            autoComplete="name"
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            placeholder="Write your message here..."
            required
          ></textarea>
        </label>

        <button type="submit" className="btn" disabled={isSending}>
          <span>{isSending ? "Sending..." : "Send"}</span>
        </button>
        <p
          className={styles.feedback}
          data-type={feedback?.type}
          role="status"
          aria-live="polite"
        >
          {feedback?.message}
        </p>
      </form>
    </section>
  );
}
