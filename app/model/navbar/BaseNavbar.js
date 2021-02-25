import {SectionLoader} from "../SectionLoader.js";
import {BaseError} from "../BaseError.js";

export const BaseNavbarType = {
    normal: "normal",
    stickytop: "stickytop",
    fixed: "fixed"
}

export const BaseNavbarPosition = {
    right: "right",
    left: "left"
}

export class BaseNavbar {

    type = BaseNavbarType.normal;
    name = "YourWebsite.com";
    list;
    contentid = null;

    getPath = "./app/view/navbar/BaseNavbar.html";
    getClassNames = ["navbar", "navbar-expand-lg", "navbar-light", "bg-light"];
    getTagName = "nav";

    constructor(obj) {
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

    run = async (c) => {
        this.contentid = c;
        await setTitle(this);
        await setNavbarType(this);
        await setNavbarItems(this);
    }


}

function setNavbarType(obj) {
    try {
        const navbar = document.getElementById(obj.contentid);
        switch (obj.type) {
            case BaseNavbarType.stickytop:
                navbar.className += " sticky-top";
                break;
            case BaseNavbarType.fixed:
                navbar.className += " fixed-top";
                break;
            default:
                navbar.className += " normal";
                break;
        }
    } catch (e) {
        throw new BaseError(e);
    }
}

function setNavbarItems(obj) {
    return new Promise(resolve => {
        try {
            const navbarItemsLeft = document.getElementById(obj.contentid).getElementsByClassName("navbar-nav")[0];
            const navbarItemsRight = document.getElementById(obj.contentid).getElementsByClassName("list-unstyled")[0];
            navbarItemsLeft.innerHTML = "";
            navbarItemsRight.innerHTML = "";
            for (let i = 0; i < obj.list.length; i++) {
                const setS = new SectionLoader();
                const item = obj.list[i];
                setS.setSection(item).then(c => {
                    if (item.position === undefined || item.position === BaseNavbarPosition.left) {
                        navbarItemsLeft.appendChild(c);
                        item.run(c.id);
                        resolve(true)
                    } else {
                        navbarItemsRight.appendChild(c);
                        item.run(c.id);
                        resolve(true)
                    }
                })
            }
            resolve(true)
        } catch (e) {
            throw new BaseError(e);
        }
    })


}

function setTitle(obj) {
    try {
        document.getElementById(obj.contentid).getElementsByClassName("navbar-brand")[0].innerHTML = obj.name;
    } catch (e) {
        throw new BaseError(e);
    }

}
