"use strict";
void function main() {
    const btAdd = document.querySelector("header .bt-add");
    const inpAdd = document.querySelector("header .inp-add");
    const main = document.querySelector("main");
    const template = document.querySelector("main .line-template");
    if (!btAdd)
        return console.error("Este software precisa de um 'header .bt-add'!");
    if (!inpAdd)
        return console.error("Este software precisa de um 'header .inp-add'!");
    if (!(inpAdd && inpAdd instanceof HTMLInputElement))
        return console.error("'.inp-add' nã é um elemento");
    btAdd.addEventListener("click", () => {
        if (inpAdd.value.trim() == "")
            return;
        const line = template.content.cloneNode(true);
        main.append(line);
    });
}();
