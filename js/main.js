export default {
    el: document.querySelector("#nombre"),
    // componente: null,
    value(){
        return this.el.innerHTML;
    },
    setValue(p1){
        this.el.insertAdjacentText("beforeend", ` ${p1}`);
    },
    // remove(){
    //     this.componente = document.createDocumentFragment();
    //     this.componente.append(this.el);
    // }
}

