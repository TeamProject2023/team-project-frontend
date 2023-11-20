import { FC } from "react";
import "../styles/components/_promo.scss";
import gif from "../assets/images/look-into-microscope-love-death-and-robots.gif";

interface PromoSegmentProps {
    image: string;
    text: string;
}
const PromoSegment: FC<PromoSegmentProps> = ({ image, text }) => {
    return (
        <div className="promo-segment">
            <img src={image} alt="Segment Image" />
            <p>{text}</p>
        </div>
    );
};

export const Promo: FC = () => {
    return (
        <div className="promo">
            <div className="promo-container">
                <PromoSegment image={gif} text="Text for Segment 1" />
                <PromoSegment image={gif} text="Text for Segment 2" />
                <PromoSegment image={gif} text="Text for Segment 3" />
            </div>
        </div>
    );
};
