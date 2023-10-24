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