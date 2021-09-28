const links = document.querySelectorAll(".itemLinks");
const slider = document.querySelector(".slider__content-photo")

const leftArrow = document.querySelector(".slider__left-arrow")
const rightArrow = document.querySelector(".slider__right-arrow")

const inputFiles = document.getElementById("document");
const divToEnter = document.querySelector(".form__document-display");

let activeLink = 0;


for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', setClickedItem, false)
    link.itemID = i;
}

links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();

    const clickedLink = e.target;

    activeLink = clickedLink.itemID;
    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

function changePosition(link) {
    link.classList.add("active");

    const position = link.getAttribute("data-pos");
    slider.style.left = position;
}

leftArrow.addEventListener('click', func);
rightArrow.addEventListener('click', func);

function func(target) {

    if (target.srcElement.classList.value.includes("slider__right-arrow")) {
        if (activeLink < links.length - 1) {
            removeActiveLinks();
            changePosition(links[++activeLink])
        }
    } else {
        if (activeLink > 0) {
            removeActiveLinks();
            changePosition(links[--activeLink])
        }
    }
}

function sendFormData() {
    const name = document.getElementById("name");
    const gender = document.getElementById("gender");
    const country = document.getElementById("country");
    const city = document.getElementById("city");
    const date = document.getElementById("dob");


    console.log("Sending data ...");
    console.log("name =", name.value);
    console.log("gender =", gender.value);
    console.log("country =", country.value);
    console.log("city =", city.value);
    console.log("date =", date.value);
}

function deleteFile(file){ // TODO: delete only from DOM

    divToEnter.removeChild(file.target.parentNode);
}

function addFiles(){   
    for( let i = 0 ; i < inputFiles.files.length; i++){
        const file = document.createElement("div");
        const fileName = document.createElement("div");
        const basket = document.createElement("div");
        basket.addEventListener("click", deleteFile)
        file.className = "form__file-input";
        fileName.innerHTML = inputFiles.files[i].name;
        // fileName.innerHTML += " " + inputFiles.files[i].size/1024000 + "mb";

        fileName.className ="form__file-input-text";        
        basket.className ="form__file-input-basket";        
        file.append(fileName);
        file.append(basket);

        divToEnter.append(file);
    }    
}

