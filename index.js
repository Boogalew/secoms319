
function getTurtles() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => dataToHTML(data));

    function dataToHTML(data) {
        let mainContainer = document.getElementById("container");
        for (let i = 0; i < data.Turtles.length; i++) {
            let turtleName = data.Turtles[i].turtleName;
            //let price = data.Turtles[i].price;
            let description = data.Turtles[i].description;
            let imagePath = data.Turtles[i].imagePath;
            let dateAdded = data.Turtles[i].dateAdded;
            let screenElement = document.createElement("div");
            screenElement.classList.add("col");



            screenElement.innerHTML = `
            <div class="col">
                <div class="card shadow-sm">
              <img src="${imagePath}" alt="${turtleName}">
              <div class="card-body">
                <p class="card-text">${description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"> 
                  </div>
                  <small class="text-muted">${dateAdded}</small>
                </div>
              </div>
            </div>
          </div> `;
            mainContainer.appendChild(screenElement);
        }
    }
}


function getFood() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => dataToHTML(data));

    function dataToHTML(data) {
        let mainContainer = document.getElementById("container");
        for (let i = 0; i < data.Turtles.length; i++) {
            let foodName = data.Food[i].foodName;
            let price = data.Food[i].price;
            let description = data.Food[i].description;
            let imagePath = data.Food[i].imagePath;
            let mytr = document.createElement("div");
            mytr.classList.add("col");

            mytr.innerHTML = `
    <div class="col">
            <div class="card shadow-sm">
              <img src="${imagePath}" alt="${foodName}">
              <div class="card-body">
                <p class="card-text"> <p class="price">${foodName}</p> ${description}</p> <p class="price">Price </p> ${price} </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group"> 
                  </div>
                  <small class="text-muted">2/15/2023</small>
                </div>
              </div>
            </div>
          </div> `;
            mainContainer.appendChild(mytr);
        }
    }
} 
