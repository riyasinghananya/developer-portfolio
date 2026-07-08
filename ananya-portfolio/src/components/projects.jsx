import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects-box">

        {/* Portfolio Website */}
        <div className="project-card">
          <h3>🌐 Portfolio Website</h3>
          <p>
            A modern responsive developer portfolio built using React.js with
            smooth animations and a clean UI.
          </p>

          <div className="project-btns">
            <button>Live Demo</button>
            <button>GitHub</button>
          </div>
        </div>

        {/* AI Phishing Detection */}
        <div className="project-card">
          <h3>🛡️ AI Phishing Detection</h3>
          <p>
            AI-powered phishing website detection system that identifies
            suspicious and malicious URLs.
          </p>

          <div className="project-btns">
            <button>Live Demo</button>

            <a
              href="https://github.com/riyasinghananya/phishguard-ai.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>

        {/* Password Generator */}
        <div className="project-card">
          <h3>🔐 Password Generator</h3>
          <p>
            Generate strong and secure passwords with customizable options.
          </p>

          <div className="project-btns">
            <button>Live Demo</button>

            <a
              href="https://github.com/riyasinghananya/codsoft_python_internship_tasks.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>

        {/* AI Chatbot */}
        <div className="project-card">
          <h3>🤖 AI Chatbot</h3>
          <p>
            AI-powered chatbot developed during internship that provides
            intelligent responses and interactive conversations.
          </p>

          <div className="project-btns">
            <button>Live Demo</button>

            <a
              href="https://github.com/riyasinghananya/codsoft_python_internship_tasks.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>

        {/* Task Manager */}
        <div className="project-card">
          <h3>📋 Task Manager</h3>
          <p>
            A task management application to create, update and organize daily
            tasks with a clean user interface.
          </p>

          <div className="project-btns">
            <button>Live Demo</button>
            <button>GitHub</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;