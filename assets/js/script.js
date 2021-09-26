const links = document.querySelectorAll(".itemLinks");
const slider = document.querySelector(".slider__content-photo")

const leftArrow = document.querySelector(".slider__left-arrow")
const rightArrow = document.querySelector(".slider__right-arrow")

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