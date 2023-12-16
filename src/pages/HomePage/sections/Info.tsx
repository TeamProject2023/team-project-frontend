import { FC } from "react";
import { Variants, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Img0 from "../../../assets/images/info/info-0.jpg";
import Img1 from "../../../assets/images/info/info-1.jpg";
import Img2 from "../../../assets/images/info/info-2.jpg";
import Img3 from "../../../assets/images/info/info-3.jpg";

export const Info: FC = () => {
    return (
        <section className="section section-info info">
            <div className="container">
                <div className="section__inner">
                    <h3 className="section__subtitle">Our Services</h3>
                    <h2 className="section__title">We&apos;re Providing Best Services</h2>
                    <motion.div
                        className="swiper-box"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={swiperVariants}
                    >
                        <Swiper
                            spaceBetween={50}
                            slidesPerView="auto"
                            pagination={true}
                            modules={[Pagination]}
                            draggable={true}
                            loop={true}
                        >
                            {slides.map((slide) => {
                                return (
                                    <SwiperSlide key={slide.id}><InfoItem item={slide} /></SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

interface InfoItemProps {
    item: { id: number; image: string; title: string; subtitle: string; };
}

export const InfoItem: FC<InfoItemProps> = ({ item }) => {
    return (
        <div className="info__slide">
            <img src={item.image} alt="slide" className="info__slide-img" />
            <div className="info__slide-content">
                <div className="info__slide-title">{item.title}</div>
                <div className="info__slide-text">{item.subtitle}</div>
            </div>
        </div>
    );
};

const slides = [
    { id: 0, image: Img1, title: "Personalized Health Assessments", subtitle: "Tailored insights for individual well-being, guiding personalized health management plans." },
    { id: 1, image: Img2, title: "Operational Research Integration", subtitle: "Optimizing strategies through advanced data analytics for precise and efficient care." },
    { id: 2, image: Img3, title: "AI-Driven Disease Predictions", subtitle: "Cutting-edge technology foresees potential health risks, enabling proactive preventive measures." },
    { id: 3, image: Img0, title: "Continuous Well-being Monitoring", subtitle: "Real-time tracking and analysis to ensure ongoing health optimization and support." },
];

const swiperVariants: Variants = {
    offscreen: {
        y: 150,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.4,
        },
    },
};
