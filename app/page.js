const services = [
  {
    title: "Audio Visual Consulting",
    body:
      "Often the equipment you own doesn't need to be replaced — it may just need a redeployment or minor maintenance to bring it back up to speed. We always look for the most cost-effective solution first, and only replace components when it truly makes sense.",
  },
  {
    title: "Film",
    body:
      "Our videos take your audience through a customer experience — letting them see, hear, and experience your brand first-hand. We share your back story, highlight your values, products and services, and place client testimonials front and center.",
  },
  {
    title: "Graphics & Media",
    body:
      "We create result-driven websites built from custom designs, plus exceptional services like logo design, packaging design, animation, and SEO — all built to set your company up for success.",
  },
  {
    title: "Web & Marketing",
    body:
      "Your website is your storefront. We make sure yours is state-of-the-art and builds credibility, with pages that tell your story clearly. Built with clean code and fully responsive across desktop, mobile, and tablet.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="brand">DACO<span>PRODUCTIONS</span></div>
        <a className="nav-cta" href="tel:4043959092">404.395.9092</a>
      </header>

      <section className="hero">
        <p className="eyebrow">Full-Service Media &amp; Production</p>
        <h1>
          We move your organization<br />to the next level.
        </h1>
        <p className="lede">
          Daco is a full-service media and production company with a deep
          understanding of audio visual systems and best practices. Let us put
          our years of knowledge and experience to work for you.
          <br />
          <strong>No cost to start the conversation.</strong>
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="mailto:dave@dacoproductions.com">
            Start a conversation
          </a>
          <a className="btn btn-ghost" href="#services">
            Our services
          </a>
        </div>
      </section>

      <section id="services" className="services">
        <h2>What we do</h2>
        <div className="grid">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="methods">
        <h2>Our approach</h2>
        <p>
          We are problem solvers. There are usually many ways to get the result
          you need — whether that's production management, a full overhaul of
          your audio/visual system, or help with web and graphic design. Let us
          work with you to find the solution that saves time and money.
        </p>
      </section>

      <section id="contact" className="contact">
        <h2>Let's talk</h2>
        <p>Ready to get started? Reach out — there's no cost to start the conversation.</p>
        <div className="contact-links">
          <a href="tel:4043959092">404.395.9092</a>
          <a href="mailto:dave@dacoproductions.com">dave@dacoproductions.com</a>
        </div>
      </section>

      <footer className="footer">
        <div className="brand small">DACO<span>PRODUCTIONS</span></div>
        <p>&copy; {new Date().getFullYear()} Daco Productions LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}
