import type { SubmitEvent } from "react";

export function Contact() {

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Sending...")
  }

  return (
    <section id="contact" className="contact">
      <h2>Let's get in touch</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            aria-required="true"
          />
        </label>
        <label>
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="My Name"
            aria-required="true"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            id="message"
            placeholder="Write your message here..."
            aria-required="true"
          ></textarea>
        </label>

        <input type="submit" value="Send" />
      </form>
    </section>
  );
}
