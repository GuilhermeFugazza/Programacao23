"use strict";
void function main() {
    const main = document.querySelector("main");
    const btadd = document.querySelector("header .bt-add");
    const inpadd = document.querySelector("header .inp-add");
    const template = document.querySelector("main .line-template");
    if (!main) {
        return console.error("[ error HTMLElement ]");
    }
    if (!btadd) {
        return console.error("[ error HTMLButtonElement ]");
    }
    if (!inpadd) {
        return console.error("[ error HTMLInputElement ]");
    }
    if (!template) {
        return console.error("[ error HTMLTemplateElement ]");
    }
    btadd.addEventListener("click", () => {
        if (inpadd.value.trim() == "")
            return;
        const line = template.content.cloneNode(true);
        const title = line.querySelector(".title");
        title.innerHTML = inpadd.value;
        inpadd.value = "";
        const btrm = line.querySelector(".bt-remove");
        //btrm.addEventListener("click", () => btrm.closest(".line-container")?.remove())
        btrm.addEventListener("click", () => {
            const container = btrm.closest(".line-container");
            container.remove();
        });
        main.append(line);
    });
}();
