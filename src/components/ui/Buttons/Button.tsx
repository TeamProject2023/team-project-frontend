import { FC } from "react";
import cn from "classnames";

interface Props {
    text: string;
    classes: string;
    handleClick: <T>(args: T) => void;
}

export const Button: FC<Props> = ({ text, classes, handleClick, ...rest }) => {
    return (
        <button className={cn("btn", classes)} onClick={handleClick} {...rest}>
            {text}
        </button>
    );
};
