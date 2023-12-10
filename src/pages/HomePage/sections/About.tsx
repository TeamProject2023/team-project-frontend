/* eslint-disable max-len */
import { FC } from "react";
import { Variants, motion } from "framer-motion";
import photo from "../../../assets/images/about-img-1.jpeg";
import done from "../../../assets/images/icons/dayn.svg";
import expert from "../../../assets/images/doctor-2.jpg";
import { Routes } from "../../../types/routes.types";
import AboutImg2 from "../../../assets/images/about/about-img-2.jpg";
import AboutImg3 from "../../../assets/images/about/about-img-3.jpg";

export const About: FC = () => {
    return (
        <section className="section section-about about" id={Routes.About}>
            <div className="container">
                <div className="about__container">
                    <motion.div
                        className="about__imgs"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={leftColumnVariants}
                    >
                        <img src={photo} className="about__img about__img-1" alt="client" />
                        <img src={AboutImg2} className="about__img about__img-2" alt="client" />
                        {/* <div className="about__card">
                            <img src={photo} alt="doctor" className="about__card-img" />
                            <div className="about__card-text">
                                <div className="about__card-name">Iryna</div>
                                <div className="about__card-prof">Blyat</div>
                            </div>
                            <button className="about__card-btn">bagiette</button>
                        </div> */}
                    </motion.div>
                    <motion.div
                        className="about__content"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={rightColumnVariants}
                    >
                        <div className="about__suptitle">About Our Program</div>
                        <div className="about__title">Take Care Of Your Health With Our Health Package</div>
                        <div className="about__subtitle">There are many variations of passages of Lorem Ipsum amets avoilble but majority have suffered alteration in some form, by injected humour or randomise words which don`t sure amet consec tetur adicing.</div>
                        <div className="about__points">
                            <div className="about__nakshtalt">
                                <div className="about__point"><img src={done} alt="point" />Provide More Potential Health</div>
                                <div className="about__point"><img src={done} alt="point" />Operational Research Transformation</div>
                                <div className="about__point"><img src={done} alt="point" />Mental health Solution</div>
                            </div>
                            <div className="about__video"><img src={AboutImg3} alt="video" /></div>
                        </div>
                        <div className="about__expert">
                            <img src={expert} alt="expert" className="about__expert-img" />
                            <p>&quot;Think Hard And Focus On The Patient&apos;s Well-Being&rdquo;</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const leftColumnVariants: Variants = {
    offscreen: {
        x: -100,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.4,
        },
    },
};

const rightColumnVariants: Variants = {
    offscreen: {
        x: 100,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.4,
        },
    },
};
