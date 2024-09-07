const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Navigation Links */}
        <nav className="footer-nav">
          <a href="#hero">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Social Media Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Abubakar Sadiq. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
