import SocialLinks from '../layout/SocialLinks';

const CONTACT_INFO = [
  { title: 'Email Address', content: 'sameerapatel04@gmail.com', icon: '/mail.svg' },
];

export default function Contact() {
  return (
    <section id="contact">
      <h1>Lets Connect</h1>
      <div className="flex-container">
        <div className="flex-item card">
          <h3>Send a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message" rows={4} required />
            </div>
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>

        <div className="flex-item" style={{ padding: 0 }}>
          <div className="card">
            <h3>Open To Opportunities</h3>
            <p style={{ margin: 0 }}>
              I'm currently available for new opportunities. Whether it's a full-time role,
              freelance project, or just a chat — reach out!
            </p>
          </div>

          {CONTACT_INFO.map((info) => (
            <div key={info.title} className="card contact-info-card" style={{ padding: '10px' }}>
              <div className="contact-info-card-row">
                <img src={info.icon} alt={`${info.title} icon`} className="contact-info-icon" />
                <div className="contact-info-text">
                  <h3 style={{ padding: 0, margin: 0, fontSize: '18px' }}>{info.title}</h3>
                  <p style={{ margin: 0 }}>{info.content}</p>
                </div>
              </div>
            </div>
          ))}

          <SocialLinks />
        </div>
      </div>
    </section>
  );
}