import { FC } from "react";

interface Props {
    image: string;
    title: string;
}

export const Hero: FC<Props> = ({ image, title }) => {
    return (
        <div className="hero">
            <img src={image} alt="" className="hero__img" />
            <div className="overlay" />
            <h1 className="hero__title">{title}</h1>
        </div>
    );
};
