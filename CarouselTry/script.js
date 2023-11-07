const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once.
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, -cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
})

// Add event listeners for the arrow buttons to scroll the carousel left and right. 
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        // console.log(btn.id);
    })
})

const dargStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");

    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
    if (!isDragging) return;
    // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement.

    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    // console.log(e.pageX);

}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const autoPlay = () => {
    if (window.innerWidth < 800) return;
    //Return if window is smaller than 800
    // AutoPlay the carousel after every 2500 millisconds
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
        console.log("You've reached to the left end");
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
        console.log("You've reached to the right end");
    }

    // Clear existing timeout start autoplay  if mouse not hovering over carousel.
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}


carousel.addEventListener("mousedown", dargStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);