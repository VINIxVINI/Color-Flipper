const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNum = getRandomNum();
    console.log(randomNum);

    document.body.style.background = colors[randomNum];
    color.textContent = colors[randomNum];
});
/* Random number generator */
function getRandomNum() {
    return Math.floor(Math.random() * colors.length);

}

