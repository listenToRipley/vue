let currentCount = 0;

const countHeader = document.getElementById("count");
const countAddBtn = document.getElementById("addBtn");
const countSubtractBtn = document.getElementById("subtractBtn");

countAddBtn.addEventListener("click", () => {
    currentCount ++;
    countHeader.innerText = currentCount;

});

countSubtractBtn.addEventListener("click", () => {
    currentCount --;
    countHeader.innerText = currentCount;

});
