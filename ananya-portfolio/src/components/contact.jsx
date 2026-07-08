import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <div className="contact-box">

        <div className="contact-card">
          <h3>📧 Email</h3>
          <a href="mailto:riyasingh255325@gmail.com">
            riyasingh255325@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h3>💻 GitHub</h3>
          <a
            href="https://github.com/riyasinghananya"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>

        <div className="contact-card">
          <h3>💼 LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/ananya-singh-b57b42360"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn
          </a>
        </div>

      </div>

      <button className="resume-btn">
        Download Resume
      </button>
    </section>
  );
}

export default Contact;