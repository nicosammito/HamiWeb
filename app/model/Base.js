import {SectionLoader} from "./SectionLoader.js";
import {BaseError} from "./BaseError.js";


export class Base {

    title;
    navbar;
    child;
    description;


    /**
     * constructor of class Base
     * @param {Object} obj
     */
    constructor(obj) {

        if (obj === undefined) {
            throw new BaseError("Object is undefined");
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
        if(obj.description !== undefined){
            this.description = obj.description;
        }

    }

    /**
     * run's the base
     * @return {Promise<void>}
     */
    load = async function () {

        await setTitle(this.title);
        await setDescription(this.description);
        await setNavbar(this.navbar);
        await setChild(this.child);
    }


}

/**
 * Is loading the child and navbar section
 * @param section
 * @return {Promise<void>}
 */
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

/**
 * set's and loads the navbar
 * @param navbar
 * @return {Promise<void>}
 */
function setNavbar(navbar) {
    return new Promise(resolve => {
        loadSection(navbar).then(() => {
            resolve(true);
        });
    })
}

/**
 * set's and load's the given child
 * @param child
 * @return {Promise<void>}
 */
function setChild(child) {
    return new Promise(resolve => {
        loadSection(child).then(() => {
            resolve(true);
        });
    })
}

/**
 * set's the meta description
 * @param {string} description
 * @return {Promise<void>}
 */
function setDescription(description) {
    return new Promise(resolve => {
        if (description !== undefined) {
            document.getElementsByTagName("head")[0].innerHTML += "<meta name='description' content='"+description+"'>";
        }
        resolve(true);
    });

}

