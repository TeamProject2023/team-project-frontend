import { FC } from "react";
import { Pill } from "./vectors/Pill";

export const Loader: FC = () => {
    return (
        <div className="loader-box">
            <div className="loader">
                <div className="loader-jump">
                    <div className="loader-rotate">
                        <Pill
                            width="100"
                            height="auto"
                            fill="#2490EB"
                            className="loader"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
