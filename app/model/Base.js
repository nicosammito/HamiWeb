import {SectionLoader} from "./SectionLoader.js";
import {BaseFailure} from "./ErrorHandler.js";

export class Base {

    title;
    navbar;
    child;


    constructor(obj) {

        if (obj === undefined) {
            throw new Error("Object is undefined");
        }

        if (obj.title !== undefined) {
            this.title = obj.title;
        }

        if (obj.navbar !== undefined) {
            this.navbar = obj.navbar;
        }
        if (obj.child !== undefined) {
            this.child = obj.child;
        }

    }


    load = async function () {


        await setTitle(this.title);
        await setNavbar(this.navbar);
        await setChild(this.child);
    }


}

function loadSection(section) {
    return new Promise(resolve => {
        const c = new SectionLoader();
        c.setSection(section).then(c => {
            $("body").append(c);
            section.run(c.id);
            resolve(true);
        });
    })
}

/**
 * is used to set the title of a page
 * @param {string} title
 */
function setTitle(title) {
    return new Promise(resolve => {
        if (title !== undefined) {
            document.getElementsByTagName("head")[0].innerHTML += "<title>" + title + "</title>";
        }
        resolve(true);
    });
}

function setNavbar(navbar) {
    return new Promise(resolve => {
        loadSection(navbar).then();
        resolve(true);
    })
}

function setChild(child) {
    return new Promise(resolve => {
        loadSection(child).then();
        resolve(true);
    })
}

