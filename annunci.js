// Variables
const dropdownMenu = document.querySelector("#dropdownMenu");
const categorySelect = document.querySelector("#categorySelect");
const searchbar = document.querySelector("#searchbar");
const searchbarReplacer = document.querySelector("#searchbarReplacer");
const announcementsRow = document.querySelector("#announcementsRow")

const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const priceMinInput = document.querySelector("#priceMinInput");
const priceMaxInput = document.querySelector("#priceMaxInput");


//Event listener fix searchbar
document.addEventListener("scroll", () => {
    let scrolled = window.scrollY;

    if (scrolled > 320) {
        searchbar.classList.add("scrolled");
        searchbarReplacer.classList.remove("d-none");
    } else {
        searchbar.classList.remove("scrolled");
        searchbarReplacer.classList.add("d-none");
    }
});


//Execute
createMenuCategories(dropdownMenu, categories);
createOptionsSelectCategories(categorySelect, categories);



getAllAnnouncements(null, "announcementsRow");

// Event listener searchbar
searchForm.addEventListener("submit", (event) => {
    
    event.preventDefault();

    const filter = {
        search: searchInput.value,
        category: categorySelect.value,
        priceMin: priceMinInput.value,
        priceMax: priceMaxInput.value,
    };
    
    getAllAnnouncements(filter, "announcementsRow");

})