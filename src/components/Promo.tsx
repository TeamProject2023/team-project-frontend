import { FC } from "react";
import "../styles/components/_promo.scss";
import wheelchair from "../assets/images/icons/wheelchair.svg";

interface PromoSegmentProps {
    image: string;
    title: string;
    text: string;
}
const PromoSegment: FC<PromoSegmentProps> = ({ image, title, text }) => {
    return (
        <div className="promo__segment">
            <img
                src={image}
                alt="Segment Image"
            />
            <div className="promo__text">
                <p className="promo__title">{title}</p>
                <p className="promo__subtitle">{text}</p>
            </div>
        </div>
    );
};

export const Promo: FC = () => {
    return (
        <div className="promo__container">
            <PromoSegment
                image={wheelchair}
                title="title"
                text="Text for Segment 1"
            />
            <PromoSegment
                image={wheelchair}
                title="title"
                text="Text for Segment 2"
            />
            <PromoSegment
                image={wheelchair}
                title="title"
                text="Text for Segment 3"
            />
        </div>
    );
};
