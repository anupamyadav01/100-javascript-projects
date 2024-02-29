const sub = document.querySelector(".btn1");
const add = document.querySelector(".btn3");
const reset = document.querySelector(".btn2");

const counter = document.querySelector(".counter");

let count = 0;
add.addEventListener("click", () => {
    count++;
    counter.innerText = count;

});

sub.addEventListener("click", () => {
    --count;
    counter.innerText = count;
});

reset.addEventListener("click", () => {
    count = 0;
    counter.innerText = count;
})