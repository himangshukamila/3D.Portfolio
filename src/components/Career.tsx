import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>4brains pvt ltd</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built 7+ complete projects using React.js, HTML, CSS, and
              JavaScript. Developed real-time features using Socket.IO and
              WebSockets. Designed responsive and interactive user interfaces
              with Tailwind CSS and Figma, delivering production-ready
              web applications from concept to deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
