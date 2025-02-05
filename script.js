function moveRandom(elm) {
    elm.style.position = "absolute"; // Ensure the button moves
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%"; // Added left movement
}

const noButton = document.querySelector("#move-random");

noButton.addEventListener("mouseenter", function (e) {
    moveRandom(e.target);
});
