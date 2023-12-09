import { FC } from "react";
import gif from "../../../assets/images/hero-img-1.jpg";
import Headphones from "../../../assets/images/vectors/headphones.svg";
import Doctor from "../../../assets/images/vectors/doctor.svg";
import Dots from "../../../assets/images/shared/dots.png";

export const Hero: FC = () => {
    return (
        <section className="section section-hero">
            <img src={Dots} alt="Dots" className="img-dots moveHorizontal" />
            <div className="container">
                <div className="section__inner">
                    <div className="section__content">
                        <div className="col-right section__text">
                            <p className="section__suptitle">We afford</p>
                            <h1 className="section__title">
                                Most accurate prediction
                            </h1>
                            <p className="section__subtitle">
                                95% accuracy of our AI model
                            </p>
                            <button className="btn btn-primary btn-try">Try now</button>
                        </div>
                        <div className="col-left">
                            <div className="hero-img-box">
                                <img src={gif} className="hero-img" />
                            </div>
                            <div className="features">
                                <div className="features__inner">
                                    <div className="feature">
                                        <div className="feature-img-box">
                                            <img src={Headphones} alt="Headphones" className="feature__img" />
                                        </div>
                                        <div className="feature__inner">
                                            <h3 className="feature__title">24/7 Support</h3>
                                            <p className="feature__text">There are many variations of passages are valid.</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="feature-img-box">
                                            <img src={Doctor} alt="Doctor" className="feature__img" />
                                        </div>
                                        <div className="feature__inner">
                                            <h3 className="feature__title">Qualified Doctors</h3>
                                            <p className="feature__text">There are many variations of passages are valid.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
