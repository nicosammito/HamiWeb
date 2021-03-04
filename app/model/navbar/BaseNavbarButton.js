import {BaseError} from "../BaseError.js";
import {HamiWebElement} from "../HamiWebElement.js";
import {BaseFunction} from "../BaseFunction.js";

export class BaseNavbarButton extends HamiWebElement{

    link = "#";
    name = "Button";
    element = null;
    position;

    getPath = "./app/view/navbar/BaseNavbarButton.html";
    getClassNames = ["li"];
    getTagName = "nav-item";

    constructor(obj) {
        super();
        if (obj === undefined) {
            throw new BaseError("Object is undefined!");
        }
        if(obj.name !== undefined){
            this.name = obj.name;
        }
        if(obj.link !== undefined){
            this.link = obj.link;
        }
        if (obj.position !== undefined) {
            this.position = obj.position;
        }
        if (obj.onclick !== undefined) {
            if (obj.onclick instanceof BaseFunction) {
                this.onclick = obj.onclick;
            } else {
                throw new BaseError("Onclick must be instance of BaseFunction!");
            }
        }
        if (obj.onhover !== undefined) {
            if (obj.onhover instanceof BaseFunction) {
                this.onhover = obj.onhover;
            } else {
                throw new BaseError("Onclick must be instance of BaseFunction!");
            }
        }
    }

    run = async (element) => {
        this.element = element;
        await setLink(this);
        await setText(this);
        await setEventListener(this);
    }
}

/**
 * set's all events with given BaseFunction
 * @param {Object} obj
 * @return {Promise<boolean>}
 */
function setEventListener(obj) {
    return new Promise(resolve => {
        if (obj.onclick !== undefined) {
            obj.element.addEventListener("click", () => {
                obj.onclick.function(obj)
            });
        }
        if (obj.onhover !== undefined) {
            obj.element.addEventListener("mouseover", () => {
                obj.onhover.function(obj)
            });
        }
        resolve(true);
    })

}

/**
 *
 * @param  obj
 * @return {Promise<boolean>}
 */
function setLink(obj) {
    return new Promise(resolve => {
        obj.element.getElementsByTagName("a")[0].href = obj.link;
        resolve(true)
    })
}

/**
 *
 * @param obj
 * @return {Promise<void>}
 */
function setText(obj) {
    return new Promise(resolve => {
        obj.element.getElementsByTagName("button")[0].innerHTML = obj.name;
        resolve(true);
    })
}
