import {BaseError} from "../BaseError.js";

export class BaseNavbarButton {

    link = "#";
    name = "Button";
    classes;
    contentid;

    getPath = "./app/view/navbar/BaseNavbarButton.html";
    getClassNames = ["li"];
    getTagName = "nav-item";

    constructor(obj) {

        if (obj === undefined) {
            throw new BaseError("Object is undefined!");
        }
        if(obj.name !== undefined){
            this.name = obj.name;
        }
    }

    run = async function (c) {
        this.contentid = c;
        await setLink();
        await setText();
        await addClasses();
    }

}

function setLink(obj) {
    return new Promise(resolve => {
        document.getElementById(obj.contentid).getElementsByTagName("a")[0].href = obj.link;
        resolve(true)
    })

}

function addClasses(obj) {
    try{
        const button = document.getElementById(obj.content).getElementsByTagName("button")[0];

        obj.classes.forEach(
            function (value) {

                button.classList.add(value);
            }
        );
    }catch (e) {
        const error = new BaseFailure();
        error.load(e);
    }
}

async function setText() {
    document.getElementById(content).getElementsByTagName("button")[0].innerHTML = text;
}
