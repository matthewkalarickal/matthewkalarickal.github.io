function App() {
  return (
    <div className="container">

      <header>
        <h1>Matthew Kalarickal</h1>
        <p className="subtitle">
          MS Computer Science Student @ Worcester Polytechnic Institute
        </p>

        <p>
          matthew.kalarickal@wpi.edu
        </p>

        <p>
          Machine Learning · Natural Language Processing · Educational AI
        </p>

        <div className="links">
          <a href="/resume.pdf">Resume</a>
          <a href="https://github.com/matthewkalarickal">GitHub</a>
          <a href="https://www.linkedin.com/in/matthew-kalarickal-05a8a7218/">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=h6BnZXEAAAAJ&hl=en&oi=sra">Google Scholar</a>
        </div>
      </header>


      <section>
        <h2>About</h2>
        <p>
          I am a Master's student in Computer Science at Worcester Polytechnic Institute focused
          on machine learning, natural language processing, and artificial intelligence. I enjoy
          building ML-powered applications and developing models that address real-world challenges
          across diverse domains. My work has involved creating LLM-based systems, designing machine
          learning pipelines, and applying deep learning techniques to solve problems in education
          and language technology. I am passionate about building scalable, reliable AI systems that
          transform ideas into practical applications.
        </p>
      </section>

      <section>
        <h2>Education</h2>

        <div className="item education">
          <div className="education-header">
            <h3>Worcester Polytechnic Institute</h3>
            <span>Expected May 2027</span>
          </div>

          <p>
            M.S. Computer Science · GPA: 4.0/4.0
          </p>
        </div>


        <div className="item education">
          <div className="education-header">
            <h3>College of the Holy Cross</h3>
            <span>2021 - 2025</span>
          </div>

          <p>
            B.A. Computer Science and Mathematics · GPA: 3.83/4.0
          </p>

          <p>
            Magna Cum Laude
          </p>
        </div>
      </section>

      <section>
        <h2>Experience</h2>

        <div className="item">
          <h3>AI Intern — Camgian</h3>
          <p>
            Worked as an AI intern developing machine learning solutions and
            AI-driven applications. Applied software engineering and data science
            techniques to support real-world AI systems, including data processing,
            model development, and evaluation workflows.
          </p>
        </div>

        <div className="item">
          <h3>Teaching Assistant — College of the Holy Cross</h3>
          <p>
            Supported courses including Calculus I, Calculus II, Data Structures, Object Oriented Programming, Multiplayer Network Games.
          </p>
        </div>
      </section>


      <section>
        <h2>Projects</h2>

        <div className="item">
          <h3>
            Fairness of LLM-Generated Educational Feedback
          </h3>
          <p>
            Investigated fairness in large language model educational feedback by
            comparing responses generated for equivalent student answers written in
            different dialects. Applied NLP techniques including semantic similarity,
            sentiment analysis, embedding-based comparisons, and linguistic feature
            analysis to evaluate whether models produced consistent feedback across
            dialect variations.
          </p>
        </div>

        <div className="item">
          <h3>AI Math Hint Generation System</h3>
          <p>
            Developed an LLM-based hint generation pipeline for mathematics education
            that produces pedagogically-informed hints aligned with different
            instructional strategies. The system generates multiple styles of hints,
            including direct guidance, cognitive structuring, and metacognitive
            support. Integrated automatically generated SVG-based instructional
            images to provide additional visual explanations and evaluated generated
            hints in an ASSISTments learning environment.
          </p>
        </div>


        <div className="item">
          <h3>Multi-Agent Reinforcement Learning Pacman</h3>
          <p>
            Designed and implemented a multi-agent reinforcement learning system for
            cooperative Pacman environments as part of a computer science honors
            thesis. Explored how independent agents learn coordinated strategies
            through reward optimization and interaction within complex environments.
          </p>
        </div>
      </section>


      <section>
        <h2>Research</h2>

        <div className="item publication">
          <p>
            [doctoral consortium]{" "}
            <strong>
              Evaluating Pedagogical Styles of LLM-Generated Hint Sets
            </strong>{" "}
            <a
              href="https://link.springer.com/chapter/10.1007/978-3-032-29794-5_60"
              target="_blank"
              rel="noopener noreferrer"
            >
              [paper]
            </a>
          </p>

          <p>
            <strong>Matthew Kalarickal</strong>, Eamon Worden, Neil Heffernan
          </p>

          <p>
            AIED 2026 Doctoral Consortium
          </p>
        </div>
      </section>


      <section>
        <h2>Skills</h2>
        <p>
          Python · C++ · Java · SQL · PyTorch · Transformers ·
          scikit-learn · Git
        </p>
      </section>

    </div>
  );
}

export default App;