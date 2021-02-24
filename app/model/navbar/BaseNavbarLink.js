import {BaseFunction} from "../BaseFunction.js";
import {BaseError} from "../BaseError.js";

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

    /**
     *  constructor of BaseNavbarLink
     * @param {Object} obj
     */
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

    /**
     * run's the BaseNavbarLink
     * @param c
     * @return {Promise<void>}
     */
    run = async function (c) {
        this.contentid = c;
        await setName(this);
        await setLink(this);
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
            document.getElementById(obj.contentid).addEventListener("click", () => {
                obj.onclick.function(obj)
            });
        }
        if (obj.onhover !== undefined) {
            document.getElementById(obj.contentid).addEventListener("mouseover", () => {
                obj.onhover.function(obj)
            });
        }
        resolve(true);
    })

}


/**
 * set's the name
 * @param {Object}obj
 * @return {Promise<boolean>}
 */
function setName(obj) {

    return new Promise(resolve => {
        const content = document.getElementById(obj.contentid).getElementsByTagName("a")[0];
        content.innerHTML = obj.name;
        resolve(true);
    })
}


/**
 * set's the link
 * @param {Object} obj
 * @return {Promise<boolean>}
 */
function setLink(obj) {
    return new Promise(resolve => {
        if (obj.link !== undefined) {
            const content = document.getElementById(obj.contentid).getElementsByTagName("a")[0];
            content.href = obj.link;
        }
        resolve(true);
    });
}