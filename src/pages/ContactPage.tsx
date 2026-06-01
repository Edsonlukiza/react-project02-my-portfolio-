import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_gu2vzvp",
        "template_0ro2zkx",
        form.current,
        "XaKDX1_9RW6Lb_4Ut"

      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="min-h-screen bg-white dark:bg-background text-slate-900 dark:text-white transition-colors duration-300 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-950 sm:p-12">

        {/* Header */}
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Contact</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Let's build something together</h1>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            Reach out for freelance work, collaborations, or any project ideas.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">

          {/* FORM */}
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <h2 className="text-2xl font-semibold">Send a message</h2>

            <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-5">

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
                <input
                  type="text"
                  name="user_name"
                  required
                  className="mt-2 w-full rounded-2xl border px-4 py-3"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
                <input
                  type="email"
                  name="user_email"
                  required
                  className="mt-2 w-full rounded-2xl border px-4 py-3"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-2xl border px-4 py-3"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-[#5d0037] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading && (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                )}
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>

          {/* CONTACT INFO (RESTORED) */}
          <div className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-slate-100 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <div>
              <h3 className="text-xl font-semibold">Contact Info</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Email, phone and social links are the fastest way to connect.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl bg-white px-5 py-4 shadow-sm dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <p className="mt-1 font-medium">edsonlukiza@gmail.com</p>
              </div>

              <div className="rounded-3xl bg-white px-5 py-4 shadow-sm dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                <p className="mt-1 font-medium">+255 699 508 695</p>
              </div>

              <div className="rounded-3xl bg-white px-5 py-4 shadow-sm dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                <p className="mt-1 font-medium">Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactPage;