import {BaseFunction} from "../BaseFunction.js";
import {BaseError} from "../BaseError.js";
import {BaseChange} from "../BaseChange.js";

export class BaseNavbarLink {


    name = "Link";
    link;
    position;
    onclick;
    onhover;
    contentid = null;

    getPath = "./app/view/navbar/BaseNavbarLink.html";
    getClassNames = ["nav-item"];
    getTagName = "li";

    constructor(obj) {

        if (obj === undefined) {
            throw new BaseError("Object is undefined!");
        }

        if (obj.name !== undefined) {
            this.name = obj.name;
        }

        if (obj.link !== undefined) {
            this.link = obj.link;
        }

        if (obj.position !== undefined) {
            this.position = obj.position;
        }
        if (obj.onclick !== undefined) {
            if (obj.onclick instanceof BaseFunction || obj.onclick instanceof BaseChange) {
                this.onclick = obj.onclick;
            } else {
                throw new BaseError("Onclick must be type of BaseFunction or BaseChange!");
            }
        }
        if (obj.onhover !== undefined) {
            if (obj.onhover instanceof BaseFunction) {
                this.onhover = obj.onhover;
            } else {
                throw new BaseError("Onhover must be type of BaseFunction!");
            }
        }

    }

    run = async function (c) {
        this.contentid = c;
        await setName(this);
        await setLink(this);
        await setEventListener(this);

    }

}

function setEventListener(obj) {
    return new Promise(resolve => {
        if (obj.onclick !== undefined) {
            document.getElementById(obj.contentid).addEventListener("click", () => {
                obj.onclick.function(document.getElementById(obj.contentid).getElementsByTagName("a")[0])
            });
        }
        if (obj.onhover !== undefined) {
            document.getElementById(obj.contentid).addEventListener("mouseover", obj.onhover.function);
        }
        resolve(true);
    })

}

function setName(obj) {

    return new Promise(resolve => {
        const content = document.getElementById(obj.contentid).getElementsByTagName("a")[0];
        content.innerHTML = obj.name;
        resolve(true);
    })
}

function setLink(obj) {
    return new Promise(resolve => {
        if (obj.link !== undefined) {
            const content = document.getElementById(obj.contentid).getElementsByTagName("a")[0];
            content.href = obj.link;
        }
        resolve(true);
    });
}