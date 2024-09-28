const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    const inputText = event.currentTarget.value.trim();
    nameOutput.textContent = inputText === "" ? "Anonymous" : inputText;

    // if (inputText === "") {
    //     nameOutput.textContent = "Anonymous";
    // } else {
    //     nameOutput.textContent = inputText;
    // }
});