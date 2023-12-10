import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import photo from "../assets/images/about-img-1.jpeg";

export const Info = () => {
    useEffect(() => {
        const mySwiper = new Swiper(".swiper-container", {
            loop: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                450: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                },
                650: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                800: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
        return () => {
            mySwiper.destroy();
        };
    }, []);

    return (

        <div className="info">
            <div className="container">
                <div className="swiper-container info__container">
                    <div className="swiper-wrapper info__wrapper">
                        <div className="swiper-slide info__slide">
                            <img src={photo} alt="slide" className="info__slide-img" />
                            <div className="info__slide-content">
                                <img src={photo} alt="icon" className="info__slide-icon" />
                                <div className="info__slide-title">nbkldfgnblkdf</div>
                                <div className="info__slide-text">dbrhljkdsnbjdfsnjgbdsjlknfjskb fgsjbnjdfgsb ;jdgf bjf b</div>
                                <div className="info__slide-btn">Explore more</div>
                            </div>
                        </div>
                        <div className="swiper-slide info__slide">
                            <img src={photo} alt="slide" className="info__slide-img" />
                            <div className="info__slide-content">
                                <img src={photo} alt="icon" className="info__slide-icon" />
                                <div className="info__slide-title">nbkldfgnblkdf</div>
                                <div className="info__slide-text">dbrhljkdsnbjdfsnjgbdsjlknfjskb fgsjbnjdfgsb ;jdgf bjf b</div>
                                <div className="info__slide-btn">Explore more</div>
                            </div>
                        </div>
                        <div className="swiper-slide info__slide">
                            <img src={photo} alt="slide" className="info__slide-img" />
                            <div className="info__slide-content">
                                <img src={photo} alt="icon" className="info__slide-icon" />
                                <div className="info__slide-title">nbkldfgnblkdf</div>
                                <div className="info__slide-text">dbrhljkdsnbjdfsnjgbdsjlknfjskb fgsjbnjdfgsb ;jdgf bjf b</div>
                                <div className="info__slide-btn">Explore more</div>
                            </div>
                        </div>
                        <div className="swiper-slide info__slide">
                            <img src={photo} alt="slide" className="info__slide-img" />
                            <div className="info__slide-content">
                                <img src={photo} alt="icon" className="info__slide-icon" />
                                <div className="info__slide-title">nbkldfgnblkdf</div>
                                <div className="info__slide-text">dbrhljkdsnbjdfsnjgbdsjlknfjskb fgsjbnjdfgsb ;jdgf bjf b</div>
                                <div className="info__slide-btn">Explore more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
