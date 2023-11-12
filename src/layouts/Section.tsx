import { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
    sectionClasses?: string;
    titleClasses?: string;
    subtitleClasses?: string;
    contentClasses?: string;
    title?: string;
    subtitle?: string;
    children?: ReactNode;
}

export const Section: FC<Props> = ({
    sectionClasses,
    titleClasses,
    subtitleClasses,
    contentClasses,
    title,
    subtitle,
    children,
}) => {
    return (
        <section className={cn("section", sectionClasses)}>
            {title && (
                <h2 className={cn("section__title", titleClasses)}>{title}</h2>
            )}
            {subtitle && (
                <h3 className={cn("section__subtitle", subtitleClasses)}>
                    {subtitle}
                </h3>
            )}
            {children && (
                <div className={cn("section__content", contentClasses)}>
                    {children}
                </div>
            )}
        </section>
    );
};
