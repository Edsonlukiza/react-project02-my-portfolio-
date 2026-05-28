function ContactPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-background text-slate-900 dark:text-white transition-colors duration-300 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-950 sm:p-12">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Contact</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Let's build something together</h1>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            Reach out for freelance work, collaborations, or any project ideas. I respond quickly and enjoy solving real problems with clean code.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <h2 className="text-2xl font-semibold">Send a message</h2>
            <form className="mt-6 space-y-5">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
                <input type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-sky-400 dark:focus:ring-slate-800" />
              </label>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
                <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-sky-400 dark:focus:ring-slate-800" />
              </label>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
                <textarea rows={6} placeholder="Tell me about your project" className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-sky-400 dark:focus:ring-slate-800" />
              </label>
              <button type="submit" className="inline-flex w-full justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-[#5d0037]">
                Send message
              </button>
            </form>
          </div>

          <div className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-slate-100 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <div>
              <h3 className="text-xl font-semibold">Contact Info</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Email, phone and social links are the fastest way to connect. I’m available for freelance and full-time opportunities.</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-white px-5 py-4 shadow-sm dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <p className="mt-1 font-medium">edson@example.com</p>
              </div>
              <div className="rounded-3xl bg-white px-5 py-4 shadow-sm dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                <p className="mt-1 font-medium">+255 123 456 789</p>
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
  )
}

export default ContactPage
