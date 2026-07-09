import "./certificates.css";

function certificates() {

  const certificates = [
    {
      title: "CodSoft Python Internship",
      issuer: "CodSoft",
      image: "/certificates/codsoft.jpeg",
    },
    {
      title: "AI Agents Intensive Course",
      issuer: "Kaggle",
      image: "/certificates/google-ai.jpeg",
    },
    {
      title: "Generative AI Mastermind",
      issuer: "Outskill",
      image: "/certificates/outskill.jpeg",
    },
    {
      title: "Cyber Security & Ethical Hacking",
      issuer: "Edureka",
      image: "/certificates/edureka.jpeg",
    },
    {
      title: "Internship Common Aptitude Test",
      issuer: "ICAT",
      image: "/certificates/icat.jpeg",
    },
  ];

  return (
    <section className="certificates" id="certificates">

      <h2>My Certificates</h2>

      <div className="certificate-grid">

        {certificates.map((cert, index) => (

          <div className="certificate-card" key={index}>

            <img
              src={cert.image}
              alt={cert.title}
              onClick={() => window.open(cert.image, "_blank")}
            />

            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;
