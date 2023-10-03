// Variables
const dropdownMenu = document.querySelector("#dropdownMenu");
const categoriesSelect = document.querySelector("#categorySelect");
const categoriesRow = document.querySelector("#categoriesRow");
const contactForm = document.querySelector("#contactForm");
const lastAnnouncementsRow = document.querySelector("#lastAnnouncementsRow");
const newsletterForm = document.querySelector("#newsletterForm")
const searchbar = document.querySelector("#searchbar");
const searchbarReplacer = document.querySelector("#searchbarReplacer");


const firstNameInput = document.querySelector("#nome")
const lastNameInput = document.querySelector("#cognome")
const emailInput = document.querySelector("#email")
const msgInput = document.querySelector("#msg");


//Event Listener per:

//searchbar
document.addEventListener("scroll", () => {
    let scrolled = window.scrollY;

    if (scrolled > 550) {
        searchbar.classList.add("scrolled");
        searchbarReplacer.classList.remove("d-none");
    } else {
        searchbar.classList.remove("scrolled");
        searchbarReplacer.classList.add("d-none");
    }

})

//contactform
contactForm.addEventListener("submit", submitForm)

//newsletter
newsletterForm.addEventListener("submit", submitNewsletter);


//Execute
createMenuCategories(dropdownMenu, categories);
createOptionsSelectCategories(categoriesSelect, categories);
createCardsCategories(categoriesRow, categories);
getLastAnnouncements(6, lastAnnouncementsRow);

