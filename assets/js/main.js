const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}


const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)


const contactForm = document.getElementById("contact-form")
contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_fh230ij",
            "template_9eigabu",
            "#contact-form",
            "iftXD4JKT76LmCPbq"
        )
        .then(
            () => {
                contactMessage.textContent = "Message sent successfully ✅";

                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 5000)

                contactForm.reset()
            },
            () => {
                contactMessage.textContent = "Message not set (service error) ❌";
            }
        )
}

contactForm.addEventListener("submit", sendEmail);


const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");

    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollUp)


const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".nav_menu a[href*=" + sectionId + "]"
            );

        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);


const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";


const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");


const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.body.classList.contains(iconTheme)
        ? "ri-moon-line"
        : "ri-sun-line";


if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
    );
}


themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});


const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home_perfil, .about_image, .contact_mail`, { origin: "right" });
sr.reveal(
    `.home_name, .home_info,
 .about_container .section_title-1, .about_info,
 .contact_social, .contact_data `,
    { origin: "left" }
);
sr.reveal(`.services_card, .projects_card`, { interval: 100 });