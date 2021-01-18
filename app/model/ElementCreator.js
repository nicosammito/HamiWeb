export function ElementCreator(tagname, classes) {

    let content;

    if(tagname != null && Array.isArray(classes) && classes != null){
        const dom = document.createElement(tagname);
        classes.forEach(value => {
            console.log(value);
            dom.classList.add(value.toString());
        })
        content = dom;

    }

    this.getElement = function () {
        return content;
    }

}