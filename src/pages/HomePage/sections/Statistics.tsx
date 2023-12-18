import { FC } from "react";
import { Variants, motion } from "framer-motion";

import Notepad from "../../../assets/images/vectors/notepad.svg";
import Laboratory from "../../../assets/images/vectors/laboratory.svg";
import Doctor from "../../../assets/images/vectors/doctor.svg";

export const Statistics: FC = () => {
    return (
        <section className="section section-statistics">
            <div className="container">
                <div className="section__inner">
                    <div className="section__content">
                        <motion.ul
                            className="features-list"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={featuresVariants}
                        >
                            {features.map((feature) => {
                                return (
                                    <li key={feature.id} className="feature__item">
                                        <div className="feature">
                                            <div className="feature__inner">
                                                <div className="feature-img-box">
                                                    <img src={feature.img} alt="" className="feature__img" />
                                                </div>
                                                <h3 className="feature__title">{feature.title}</h3>
                                                <p className="feature__text">{feature.text}</p>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const features = [
    {
        id: 0,
        title: "60 +",
        text: "Project Completed",
        img: Notepad,
    },
    {
        id: 1,
        title: "99 +",
        text: "Patients Satisfied",
        img: Doctor,
    },
    {
        id: 2,
        title: "70 +",
        text: "Laboratory Experts",
        img: Laboratory,
    },
];

const featuresVariants: Variants = {
    offscreen: {
        y: 100,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};
