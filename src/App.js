import './App.css';

function App() {
  return (
    <div className="App">

      <main className="main-content">

        <img src="profile.jpg" alt="Mehmet Serhat ABA" />

        <div className="content">
          <h1>Mehmet Serhat ABA</h1>
          <p>Self-taught Front-end Developer & Tech Enthusiast</p>

          <ul>
            <li><i className="fa-solid fa-code"></i> HTML5 & CSS3 Fundamentals</li>
            <li><i className="fa-solid fa-layer-group"></i> Responsive Web Design</li>
            <li><i className="fa-solid fa-terminal"></i> Git & GitHub Learner</li>
          </ul>

          <div className="social-media">
            <a href="https://github.com/DevSerhat0/" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          </div>

          <div className="btn-container">
              <button className="btn-more">More About Me</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;