const categories = [
    {
        name: "Auto", 
        icon: "fa-solid fa-car-rear", 
        announcementsCount: "123",
        link: "#",
    },
    {
        name: "Elettronica", 
        icon: "fa-solid fa-laptop", 
        announcementsCount: "564",
        link:"#",
    },
    {
        name: "Moto", 
        icon: "fa-solid fa-motorcycle", 
        announcementsCount: "230",
        link: "#",
    },
    {
        name: "Abigliamento", 
        icon: "fa-solid fa-shirt", 
        announcementsCount: "321",
        link: "#",
    },
    {
        name: "Sport", 
        icon: "fa-solid fa-person-running", 
        announcementsCount: "90",
        link: "#",
    },
    {
        name: "Giardinaggio", 
        icon: "fa-solid fa-leaf", 
        announcementsCount: "50",
        link: "#",
    },
    {
        name: "Casa", 
        icon: "fa-solid fa-house-chimney", 
        announcementsCount: "134",
        link: "#",
    },
    {
        name: "Cucina", 
        icon: "fa-solid fa-fire-burner", 
        announcementsCount: "176",
        link: "#",
    },
    
];

//Funzione categorie navbar

let createMenuCategories = (target, categories) => {
    
    categories.forEach(category =>{
        let anchor = document.createElement("a");
        
        anchor.classList.add("dropdown-item", "text-white");
        anchor.setAttribute("href", category.link);
        anchor.textContent = category.name;

        target.appendChild(anchor);

    });
};

//Funzione categorie select

let createOptionsSelectCategories = (target, categories) => {
    categories.forEach((category)=>{
        let option = document.createElement("option");
        option.value = category.name;
        option.innerHTML = category.name;
        target.appendChild(option);
    })
}

//Funzione categorie card

let createCardsCategories = (target, categories) => {
    categories.forEach(category =>{
       let div = document.createElement("div");
       div.classList.add("col-12", "col-md-4", "col-lg-3", "mb-4");
       let cardTemplate = `
       <div class="card my-category">
            <div class="card-body text-center">
                <i class="card-subtitle mb-2 py-4 fa-2xl my-color ${category.icon} "></i>
                <h5 class="card-title py-2 text-center">${category.name}</h5>
                <p class="my-0"><b class="text-center my-color">${category.announcementsCount}</b>  annunci</p>
            </div>
        </div>
        `;
       
       div.innerHTML = cardTemplate;
       target.appendChild(div);
        
       div.addEventListener("click",() => {
        alert(category.link)
     });
    
    });
};

