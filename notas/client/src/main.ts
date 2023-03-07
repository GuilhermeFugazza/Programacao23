void function main() {
    const main = <HTMLElement>document.querySelector("main")
    const btadd = <HTMLButtonElement>document.querySelector("header .bt-add")
    const inpadd = <HTMLInputElement>document.querySelector("header .inp-add")
    const template = <HTMLTemplateElement>document.querySelector("main .line-template")
    

    if (!main) {
        return console.error("[ error HTMLElement ]")
    }

    if (!btadd) {
        return console.error("[ error HTMLButtonElement ]")
    }

    if (!inpadd) {
        return console.error("[ error HTMLInputElement ]")
    }

    if (!template) {
        return console.error("[ error HTMLTemplateElement ]")
    }

    btadd.addEventListener("click", () => {
        if (inpadd.value.trim() == "") return
        const line = template.content.cloneNode(true) as DocumentFragment
        const title = line.querySelector(".title") as HTMLElement
        title.innerHTML = inpadd.value
        inpadd.value = ""

        const btrm = line.querySelector(".bt-remove") as HTMLButtonElement
         //btrm.addEventListener("click", () => btrm.closest(".line-container")?.remove())
         btrm.addEventListener("click", () => {
            const container = btrm.closest(".line-container") as HTMLDivElement
            container.remove()
         })
        
        main.append(line)
    })
}();

