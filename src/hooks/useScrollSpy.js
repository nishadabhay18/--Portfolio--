import { useEffect, useState } from "react";

const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState(
        sectionIds[0] || ""
    );

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = sectionIds[0] || "";

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);

                if (!section) return;

                const sectionTop = section.offsetTop - offset;

                if (window.scrollY >= sectionTop) {
                    currentSection = id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionIds, offset]);

    return activeSection;
};

export default useScrollSpy;