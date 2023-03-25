const display = document.querySelector("#display"); //O querySelector retorna o primeiro elemento dentro do documento.
const buttons = document.querySelectorAll("button"); //Retorna uma lista de elementos presentes no documento.

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    })
})