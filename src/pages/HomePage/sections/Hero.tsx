import { FC } from "react";
import { Link } from "react-router-dom";
import gif from "../../../assets/images/hero-img-1.jpg";
import Headphones from "../../../assets/images/vectors/headphones.svg";
import Doctor from "../../../assets/images/vectors/doctor.svg";
import Dots from "../../../assets/images/shared/dots.png";
import { Routes } from "../../../types/routes.types";

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
                            <Link to={Routes.AITool} className="btn btn-primary btn-try">Try now</Link>
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
                                            <h3 className="feature__title">Round-the-Clock Assistance</h3>
                                            <p className="feature__text">Unwavering Support Available Every Hour, Every Day</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="feature-img-box">
                                            <img src={Doctor} alt="Doctor" className="feature__img" />
                                        </div>
                                        <div className="feature__inner">
                                            <h3 className="feature__title">Expertise in Healing</h3>
                                            <p className="feature__text">Proficient and Compassionate Medical Practitioners Worldwide</p>
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
