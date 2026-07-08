import hero from "../assets/ananyas.jpeg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="intro">HELLO, I'M</span>

        <h1>
          Ananya <br />
          <span>Singh</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <h3>Cyber Security Enthusiast</h3>

        <p>
          Passionate about creating modern, secure and responsive web
          applications using React, JavaScript and Cyber Security concepts.
        </p>

        <div className="hero-btns">
          <button className="primary">View Projects</button>
          <button className="secondary">Download CV</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>

        <img src={hero} alt="Ananya Singh" />
      </div>
    </section>
  );
}

export default Hero;