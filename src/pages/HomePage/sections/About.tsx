/* eslint-disable max-len */
import { FC } from "react";
import photo from "../../../assets/images/about-img-1.jpeg";
import done from "../../../assets/images/icons/dayn.svg";
import expert from "../../../assets/images/doctor-2.jpg";

interface AboutProps {
    // Define props here if needed
}

export const About: FC<AboutProps> = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about__container">
                    <div className="about__imgs">
                        <img src={photo} className="about__img about__img-1" alt="client" />
                        <img src={photo} className="about__img about__img-2" alt="client" />
                        <div className="about__card">
                            <img src={photo} alt="doctor" className="about__card-img" />
                            <div className="about__card-text">
                                <div className="about__card-name">Iryna</div>
                                <div className="about__card-prof">Blyat</div>
                            </div>
                            <button className="about__card-btn">bagiette</button>
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__suptitle">About Our Program</div>
                        <div className="about__title">Take Care Of Your Health With Our Health Package</div>
                        <div className="about__subtitle">There are many variations of passages of Lorem Ipsum amets avoilble but majority have suffered alteration in some form, by injected humour or randomise words which don`t sure amet consec tetur adicing.</div>
                        <div className="about__points">
                            <div className="about__nakshtalt">
                                <div className="about__point"><img src={done} alt="point" />Provide More Potential Health</div>
                                <div className="about__point"><img src={done} alt="point" />Operational Research Transformation</div>
                                <div className="about__point"><img src={done} alt="point" />Mental health Solution</div>
                            </div>
                            <div className="about__video"><img src={photo} alt="video" /></div>
                        </div>
                        <div className="about__expert">
                            <img src={expert} alt="expert" className="about__expert-img" />
                            <p>"Think Hard And Focus On The Patient's Well-Being"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
