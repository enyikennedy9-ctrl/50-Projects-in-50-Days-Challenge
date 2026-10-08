
const increaseButton = document.getElementById("increment");
const decreaseButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const countlabel = document.getElementById("countlabel");

let count = 0;

increaseButton.onclick = function () {
    count++;
    countlabel.textContent = count;
}


decreaseButton.onclick = function () {
    count--;
    countlabel.textContent = count;
}



resetButton.onclick = function () {
    count = 0;
    countlabel.textContent = count;
}
