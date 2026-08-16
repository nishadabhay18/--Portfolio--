const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const navbarHeight = 80;

    const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

    window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
    });
};

export default scrollToSection;