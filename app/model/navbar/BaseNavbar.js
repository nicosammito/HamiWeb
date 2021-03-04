import {SectionLoader} from "../SectionLoader.js";
import {BaseError} from "../BaseError.js";
import {HamiWebElement} from "../HamiWebElement.js";

export const BaseNavbarType = {
    normal: "normal",
    stickytop: "stickytop",
    fixed: "fixed"
}

export const BaseNavbarPosition = {
    right: "right",
    left: "left"
}

export class BaseNavbar extends HamiWebElement {

    type = BaseNavbarType.normal;
    name = "YourWebsite.com";
    list;
    element = null;

    getPath = "./app/view/navbar/BaseNavbar.html";
    getClassNames = ["navbar", "navbar-expand-lg", "navbar-light", "bg-light"];
    getTagName = "nav";

    /**
     * constructor
     * @param {Object} obj
     */
    constructor(obj) {
        super();
        if (obj === undefined) {
            throw new BaseError("Object is undefined!");
        }
        if (obj.name !== undefined) {
            this.name = obj.name;
        }
        if (obj.list !== undefined) {
            if (Array.isArray(obj.list)) {
                this.list = obj.list;
            } else {
                throw new BaseError("List is not an Array!");
            }
        }
        if (obj.type !== undefined) {
            this.type = obj.type;
        }
    }

    /**
     *
     * @param element
     * @return {Promise<boolean>}
     */
    run = async (element) => {
        this.element = element;
        await setTitle(this);
        await setNavbarType(this);
        await setNavbarItems(this);
    }
}

/**
 *
 * @param {Object}obj
 * @return {Promise<boolean>}
 */
function setNavbarType(obj) {
    try {
        switch (obj.type) {
            case BaseNavbarType.stickytop:
                obj.element.className += " sticky-top";
                break;
            case BaseNavbarType.fixed:
                obj.element.className += " fixed-top";
                break;
            default:
                obj.element.className += " normal";
                break;
        }
    } catch (e) {
        throw new BaseError(e);
    }
}

/**
 *
 * @param {Object} obj
 * @return {Promise<boolean>}
 */
function setNavbarItems(obj) {
    return new Promise(resolve => {
        try {
            const navbarItemsLeft = obj.element.getElementsByClassName("navbar-nav")[0];
            const navbarItemsRight = obj.element.getElementsByClassName("list-unstyled")[0];
            navbarItemsLeft.innerHTML = "";
            navbarItemsRight.innerHTML = "";
            obj.list.forEach(item => {
                if (item.position === undefined || item.position === BaseNavbarPosition.left) {
                    obj.loadSection(item, navbarItemsLeft).then(() => resolve(true))
                } else {
                    obj.loadSection(item, navbarItemsRight).then(() => resolve(true))
                }
            })
        } catch (e) {
            throw new BaseError(e);
        }
    })
}

/**
 *
 * @param {Object} obj
 * @return {Promise<boolean>}
 */
function setTitle(obj) {
    return new Promise(resolve => {
        try {
            obj.element.getElementsByClassName("navbar-brand")[0].innerHTML = obj.name;
            resolve(true)
        } catch (e) {
            throw new BaseError(e);
        }
    })


}
