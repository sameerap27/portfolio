export default function Hero() {
  return (
    <section id="hero">
      <h1 style={{ margin: '0px', padding: 0 }}>
        Hi there!
      </h1>
      <h1 style={{ margin: '0px', padding: 0 }}>
        I'm Sameera
      </h1>
      <p className="home-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. 
      </p>
      <a className="btn" href="#projects">
        View My Work
        <img src="/angle-down.svg" alt="Move down icon" className="angle-down-icon" />
      </a>
    </section>
  );
}