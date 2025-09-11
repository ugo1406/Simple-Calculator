document.addEventListener("DOMContentLoaded", function () {
    const counterDisplay = document.getElementById("counter");
    const incrementBtn = document.getElementById("increment");
    const decrementBtn = document.getElementById("decrement");
    const resetBtn = document.getElementById("reset");

    let count = 0;

    // Increment button
    incrementBtn.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;
    });

    // Decrement button (not below zero)
    decrementBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            counterDisplay.textContent = count;
        }
    });

    // Reset button
    resetBtn.addEventListener("click", () => {
        count = 0;
        counterDisplay.textContent = count;
    });
});
