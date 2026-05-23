import SocialLinks from '../layout/SocialLinks';

const CONTACT_INFO = [
  { title: 'Email Address', content: 'sameerapatel04@gmail.com' },
  { title: 'Phone Number', content: '+1 (704) 299 6871' },
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

        <div className="flex-item">
          <div className="card">
            <h3>Open To Opportunities</h3>
            <p>
              I'm currently available for new opportunities. Whether it's a full-time role,
              freelance project, or just a chat — reach out!
            </p>
          </div>

          {CONTACT_INFO.map((info) => (
            <div key={info.title} className="card">
              <h3>{info.title}</h3>
              <p>{info.content}</p>
            </div>
          ))}

          <SocialLinks />
        </div>
      </div>
    </section>
  );
}