import { FC } from "react";
import Services1 from "../../../assets/images/services/services-1.jpg";

export const Services: FC = () => {
    return (
        <section className="section section-services">
            <div className="container">
                <div className="section__inner">
                    <div className="section__content">
                        <div className="row row-top">
                            <div className="col col-left">
                                <h4 className="section__subtile">Why Choose us</h4>
                                <h2 className="section__title">Owr Best Services & Quite Popular Online Treatment</h2>
                            </div>
                            <div className="col col-right" />
                        </div>
                        <div className="row row-top" />
                        <div className="col col-left">
                            <div className="img-set">
                                <div className="img-services-box img-top-box">
                                    <img src={Services1} alt="Services1" className="img" />
                                </div>
                                <div className="img-services-box img-bottom-box">
                                    <img src={Services1} alt="Services1" className="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-right" />
                    </div>
                </div>
            </div>
        </section>
    );
};
