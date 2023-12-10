export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.currentTarget.href.substring(2);
    const blockID = target.substring(target.search("#"), target.length).substring(1);
    const scrollTarget = document.getElementById(blockID);
    // eslint-disable-next-line
    if (scrollTarget === null) return;
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
        top: elementPosition - 120,
        behavior: "smooth",
    });
};
