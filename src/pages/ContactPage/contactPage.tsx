

import { FC } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const ContactPage: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="page page-contact">
      <Header />
      <section className="section section-contact">
        <div className="container">
          <div className="row ">
            {/* First Box */}
            <div className="firstBox">
              <div className="contact-item">
                <div className="contact-info">
                  <h3>Visit Us Anytime</h3>
                  <p>Banacha 22, 90-238 Łódź, Poland</p>
                </div>
              </div>
            </div>

            {/* Second Box */}
            <div className="secondBox">
              <div className="contact-item">
                <div className="contact-info">
                  <h3>Send An Email</h3>
                  <a href="mailto:hello@teli.com">support@medai.com</a>
                </div>
              </div>
            </div>

            {/* Third Box */}
            <div className="thirdBox">
              <div className="contact-item">
                <div className="contact-info">
                  <h3>Call Center</h3>
                  <a href="tel:+48123456789">+48123456789</a>
                </div>
              </div>
            </div>
          </div>
        <div className="container">
          <div className="contact-form-box">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us A Message</h3>
              <div className="form-group">
                <input type="text" name="name" placeholder="Name*" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email*" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number*" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject*" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Messages.." rows={5} required></textarea>
              </div>
              <div className="form-group">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
         
        </div>
        </div>
      </section>
      <Footer />

    </div>
  );
};

export default ContactPage;
