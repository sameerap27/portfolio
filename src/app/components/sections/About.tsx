import SocialLinks from '../layout/SocialLinks';

export default function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-left">
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
          <div className="about-footer">
            <SocialLinks />
            <a className="btn" href="/resume.pdf">
              Resume
            </a>
          </div>
        </div>

        <div className="about-right">
          <img src="/my-photo.jpg" alt="Profile Picture" />
        </div>
      </div>
    </section>
  );
}