import { FC } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

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
                                    <input type="text" name="name" placeholder="Name*" required={true} />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Email*" required={true} />
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="phone" placeholder="Phone Number*" required={true} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject" placeholder="Subject*" required={true} />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" placeholder="Your Messages.." rows={5} required={true} />
                                </div>
                                <div className="form-group">
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                            <div className="map-box">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1234.2919371849516!2d19.48604080175229!3d51.7772141034548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb3c7baa9079%3A0x7bc825b22303574d!2sFaculty%20of%20Mathematics%20and%20Computer%20Science%2C%20University%20of%20Lodz!5e0!3m2!1sen!2spl!4v1702373656085!5m2!1sen!2spl" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />

        </div>
    );
};

export default ContactPage;
