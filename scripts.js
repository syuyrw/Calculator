import { evaluate } from "https://cdn.jsdelivr.net/npm/mathjs@11.8.2/+esm";

const screenParagraph = document.querySelector("#screen p");
const buttons = document.querySelectorAll("button");

// Add content to screen
document.querySelectorAll("button.show").forEach((button) => {
    button.addEventListener("click", function () {
        const text = button.textContent;

        screenParagraph.textContent += text;
    });
});

// Clear screen
document.getElementById("clear").addEventListener("click", function () {
    screenParagraph.textContent = "";
});

// Convert string to equation, and solve
document.getElementById("equals").addEventListener("click", function () {
    let str = screenParagraph.textContent;
    try {
        let result = evaluate(str);
        //console.log(result);
        screenParagraph.textContent = String(result);
    } catch (error) {
        console.error("Invalid expression:", error);
        screenParagraph.textContent = "ERROR";
    }
});
