import { FC } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';


export const ContactPage: FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="page page-home">
            <Header />
            <main className="main">
                <section className="section section-hero">
                    <div className="container">
                        <div className="row justify-content-center pb-75">
                            {/* First Box */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="contact-item">
                                    <div className="contact-info">
                                        <h3>Visit Us Anytime</h3>
                                        <p>Banacha 22, 90-238 Łódź, Poland</p>
                                    </div>
                                </div>
                            </div>

                            {/* Second Box */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="contact-item">
                                    <div className="contact-info">
                                        <h3>Send An Email</h3>
                                        <a href="mailto:hello@teli.com">support@medai.com</a>
                                        <br />
                                    </div>
                                </div>
                            </div>

                            {/* Third Box */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="contact-item">
                                    <div className="contact-info">
                                        <h3>Call Center</h3>
                                        <a href="tel:+44587154765">+48123456789</a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="col-md-12 mt-4">
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
            </main>
        </div>
    );
};

export default ContactPage;