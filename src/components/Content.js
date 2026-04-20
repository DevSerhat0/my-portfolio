import SocialMedia from "./SocialMedia";

function Content () {
    return (
        <div className="content">
            <h1>Mehmet Serhat ABA</h1>
            <p>Self-taught Front-end Developer & Tech Enthusiast</p>

            <ul>
                <li><i className="fa-solid fa-code"></i> HTML5 & CSS3 Fundamentals</li>
                <li><i className="fa-solid fa-layer-group"></i> Responsive Web Design</li>
                <li><i className="fa-solid fa-terminal"></i> Git & GitHub Learner</li>
            </ul>

            <SocialMedia />

            <div className="btn-container">
                <button className="btn-more">More About Me</button>
            </div>
        </div>
    );
}

export default Content;