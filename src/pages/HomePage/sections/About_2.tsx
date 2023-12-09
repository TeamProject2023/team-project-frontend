/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import Ok from "../../../assets/images/vectors/ok.svg";
import AboutImg1 from "../../../assets/images/about/about-img-1.jpg";
import AboutImg2 from "../../../assets/images/about/about-img-2.jpg";

export const About: FC = () => {
    return (
        <section className="section section-about">
            <div className="container">
                <div className="section__inner">
                    <div className="section__content">
                        <div className="col col-left">
                            <div className="col__inner">
                                <div className="img-about img-top-box">
                                    <img src={AboutImg1} alt="AboutImg1" className="img" />
                                </div>
                                <div className="img-about img-bottom-box">
                                    <img src={AboutImg2} alt="AboutImg2" className="img" />
                                </div>
                            </div>

                        </div>
                        <div className="col col-right">
                            <h3 className="section__subtitle">About Our Program</h3>
                            <h2 className="section__title">Take Care Of Your Health With Our Health Package</h2>
                            <div className="section__text">There are many variations of passages of Lorem Ipsum amets avoilble but majority have suffered alteration in some form, by injected humour or randomise words which don't sure amet consec tetur adicing.</div>
                            <ul className="features-list">
                                {features.map((feature) => (
                                    <li key={feature.id} className="feature__item">
                                        <span className="feature-icon-box">
                                            <img src={Ok} alt="Ok" className="feature__icon" />
                                        </span>
                                        {feature.text}
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const features = [
    { id: 0, text: "Provide More Potential Health" },
    { id: 1, text: "Operational Research Transformation" },
    { id: 2, text: "Mental health Solution" },
];
