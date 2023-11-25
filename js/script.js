"use strict";

// Hamburger-Menu:
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})


// // Accordion:
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
        // close other items
        accordionItems.forEach((otherItem) => {
            if (otherItem !== item && otherItem.classList.contains("active")) {
                otherItem.classList.remove("active");
                otherItem.querySelector(".accordion-content").style.height = 0;
            }
        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            content.style.height = `${content.scrollHeight}px`;
        }
        else {
            content.style.height = 0;
        }
    });
});

// Scroll-To-Top-Button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
const scrollFunction = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.classList.remove("hidden");
    } else {
        mybutton.classList.add("hidden");
    }
};
const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);