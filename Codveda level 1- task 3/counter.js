document.addEventListener("DOMContentLoaded", function () {
    const counterDisplay = document.getElementById("counter");
    const incrementBtn = document.getElementById("increment");
    const decrementBtn = document.getElementById("decrement");
    const resetBtn = document.getElementById("reset");

    let count = 0;


    incrementBtn.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;
    });


    decrementBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            counterDisplay.textContent = count;
        }
    });


    resetBtn.addEventListener("click", () => {
        count = 0;
        counterDisplay.textContent = count;
    });
});
