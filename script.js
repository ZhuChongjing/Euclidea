document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase, SplitText);

    CustomEase.create("hop", ".8, 0, .3, 1");

    const splitTextElements = (selector, type = "words,chars", addFirstChar = false) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            const splitText = new SplitText(element, {
                type,
                wordsClass: "word",
                charsClass: "char",

            });

            if (type.includes("chars")) {
                splitText.chars.forEach((char, index) => {
                    const orginalText = char.textContent;
                    char.innerHTML = `<span>${orginalText}</span>`;

                    if (addFirstChar && index === 0) {
                        char.classList.add("first-char");
                    }
                });
            }
        });
    };


    splitTextElements(".intro-title h1", "words, chars", true);
    splitTextElements(".outro-title h1");
    splitTextElements(".tag p", "words");

    gsap.set(
        [
            ".split-overlay .intro-title .first-char span",
            ".split-overlay .outro-title .char span"
        ],
        { y: "0%" }
    );
    gsap.set(".split-overlay .intro-title .first-char", {
        x: "18rem",
        y: "-2.75rem",

        fontWeight: "900",
        scale: 0.75,
    });
    gsap.set(".split-overlay .outro-title .char", {
        x: "-8rem",
        fontSize: "14rem",
        fontWeight: "500",
    });

    const timeline = gsap.timeline({ defaults: { ease: "hop" } });
    const tags = gsap.utils.toArray(".tag");

    tags.forEach((tag, index) => {
        timeline.to(
            tag.querySelectorAll("p .word"),
            {
                y: "0%",
                duration: 0.75,
            },
            index * 0.1);
    });

    timeline.set(
        ".preloader .intro-title .char span",
        {
            y: "0%",
        },
        0
    ).set(
        [".container .menu", ".bottom-left-img"],
        {
            opacity: "0",
            pointerEvents: "none",
        },
        0
    ).to(
        ".preloader .intro-title .char:not(.first-char) span",
        {
            y: "100%",
            duration: 0.75,
            stagger: 0.05,
        },
        0
    ).to(
        ".preloader .outro-title .char span",
        {
            y: "0%",
            duration: 0.7,
            stagger: 0.075,
        },
        0.3
    ).to(
        ".preloader .intro-title .first-char",
        {
            x: "21.25rem",
            duration: 1,
        },
        1
    ).to(
        ".preloader .outro-title .char",
        {
            x: "-8rem",
            duration: 1,
        },
        1
    ).to(
        ".preloader .intro-title .first-char",
        {
            x: "19rem",
            y: "-2.75rem",
            fontWeight: "900",
            scale: 0.75,
            duration: 0.7,
        },
        2
    ).to(
        ".preloader .outro-title .char",
        {
            x: "-8rem",
            fontSize: "14rem",
            fontWeight: "500",
            duration: 0.7,
            onComplete: () => {
                gsap.set(".preloader", {
                    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                });
                gsap.set(".split-overlay", {
                    clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                });
            }
        },
        2
    ).to(
        ".container",
        {

            clipPath: "polygon(0 48.5%, 100% 48.5%, 100% 51.5%, 0 51.5%)",
            duration: 1,
        },
        3
    );

    tags.forEach((tag, index) => {
        timeline.to(
            tag.querySelectorAll("p .word"), {
            y: "100%",
            duration: 0.75,
        },
            3 + index * 0.1);
    });

    timeline.to(
        [".preloader", ".split-overlay"],
        {
            y: (i) => (i === 0 ? "-50%" : "50%"),
            duration: 1,
        },
        4
    ).to(
        ".container",
        {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
        },
        4
    ).to(
        [".container .menu", ".bottom-left-img"],
        {
            opacity: "1",
            duration: 1,
        },
        4
    ).set(
        [".container .menu", ".bottom-left-img"],
        {
            pointerEvents: "auto",
        },
        5
    );

});