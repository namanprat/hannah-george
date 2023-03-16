const checkpoint = 780;
window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
if (currentScroll <= checkpoint) {
opacity = 1 - currentScroll / checkpoint;
} else {
opacity = 0;
}
document.querySelector(".bg").style.opacity = opacity;
});

window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
if (currentScroll <= checkpoint) {
opacity = 1 - currentScroll / checkpoint;
} else {
opacity = 0;
}
document.querySelector("#page_1").style.opacity = opacity;
});