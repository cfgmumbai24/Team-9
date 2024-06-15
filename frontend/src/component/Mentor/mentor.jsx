import "./mentor.css"; // Make sure this path is correct based on your project structure
// import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure this package is installed via npm

function MentorDashboard() {
  return (
    <div>
      <header className="header">
        <h1>Mentor</h1>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#chat" className="chat-icon">
          <i className="bi bi-chat-dots"></i>
        </a>
      </header>

      <main className="main-content">
        <div className="card card1">
          <h2>Total Students Attended</h2>
          <p>150</p>
        </div>
        <div className="card card2">
          <h2>Total Calls</h2>
          <p>75</p>
        </div>
        <div className="card card3">
          <h2>Meeting Details</h2>
          <p>Next meeting on June 20th, 2024</p>
        </div>
      </main>
    </div>
  );
}

export default MentorDashboard;
