//Last announcements
function getLastAnnouncements(count = 6, target) {
    fetch("./annunci.json")
    .then((res) => res.json())
    .then((announcements) => {
         announcements.forEach((element, index) => {
            if(index < count){
                createAnnouncementsCards(element,target)
            }
         });
         
    })
    .catch((error) => {
        console.error(error)
    });
};


//All announcements

const getAllAnnouncements = (filter,target) =>  {

  const announcementsRow = document.getElementById(target);

  
  fetch("./annunci.json")
  .then((res) => res.json())
  .then ((announcements) => {
    let filteredAnnouncements = filter ? announcements.filter(ann=>filteredCheck(ann)) : announcements;

    announcementsRow.innerHTML = "";

    filteredAnnouncements.forEach(ann => createAnnouncementsCards(ann, announcementsRow))

    function filteredCheck(annuncio){
      
      let filterCheck = annuncio.name.toLowerCase().includes(filter.search.toLowerCase());
      
      if(filter.category !== "") {
        filterCheck = annuncio.category === filter.category && 
        annuncio.name.toLowerCase().includes(filter.search.toLowerCase())
      }

      if(filter.priceMin !== "" || filter.priceMax !== ""){
        let min = filter.priceMin === "" ? 0 : Number(filter.priceMin);
        let max = filter.priceMax === "" ? Infinity : Number(filter.priceMax);
        let categoryCheck = "all";

        if (filter.category !== "") {
          categoryCheck = annuncio.category == filter.category;
        }
        filterCheck = 
        annuncio.name.toLowerCase().includes(filter.search.toLowerCase()) &&
        categoryCheck &&
        Number (annuncio.price) >= min && Number(annuncio.price) <= max;
      }

      
      return filterCheck;


    }
    
  })
  .catch(error => {
         console.error(error);

  });

}


// Create Announcements Cards


function createAnnouncementsCards (element,target){
  console.log(element)
    let div = document.createElement("div");
    div.classList.add("col-12","col-md-6","col-lg-4","mb-4");
    
    let cardTemplate = `
          <div class="card shadow-lg my-annunciCards" >
            <div id="carouselExample-${element.id} " class="carousel slide">
              <div class="carousel-inner ">
                <div class="carousel-item active">
                  <img src=" ${element.images[0].url} " class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${element.images[1].url}" class="d-block w-100" alt="...">
                </div> 
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample-${element.id} " data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample-${element.id} " data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div class="card-body">
              <h5 class="card-title h3 fw-bold text-center second-color"> ${element.name}</h5>
              <p class="h4 fw-bold second-color text-center"><span class="green-color h4">Prezzo</span> ${parseInt(element.price).toFixed(2)} €</p>
              <p class="card-text"></p>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-6">
                  <p class="mb-0 text-center h5">
                    Categoria 
                  </p>
                </div>
                <div class="col-6">
                  <p class="mb-0 text-center h5 ">
                  ${element.category}
                  </p>
                </div>
              </div>
            </div>
            <p class="h5 m-0">
              <span class="badge ${element.type === "sell" ? "bg-green" : "bg-red"}">
              ${element.type === "sell" ? "Vendo" : "Cerco"} </span>
            </p>
          </div>

    `;

    div.innerHTML = cardTemplate;
    target.appendChild(div);
};





