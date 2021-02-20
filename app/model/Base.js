import {SectionLoader} from "./SectionLoader.js";
import {BaseError} from "./BaseError.js";
import {BaseFunction} from "./BaseFunction.js";


export class Base {

    title;
    navbar;
    child;
    description;
    onload;


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
        if(obj.onload !== undefined){
            if(obj.onload instanceof BaseFunction){
                this.onload = obj.onload;
            }else {
                throw new BaseError("Onload must be instance of BaseFunction!");
            }
        }

    }

    /**
     * run's the base
     * @return {Promise<void>}
     */
    load = async function () {

        await setLoadEvent(this.onload);
        await setTitle(this.title);
        await setDescription(this.description);
        await setNavbar(this.navbar);
        await setChild(this.child);
    }


}

/**
 * Is loading the child and navbar section
 * @param section
 * @return {Promise<boolean>}
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
 * @return {Promise<boolean>}
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
 * @return {Promise<boolean>}
 */
function setChild(child) {
    return new Promise(resolve => {
        if(child !== undefined){
            loadSection(child).then(() => {
                resolve(true);
            });
        }

    })
}

/**
 * set's the meta description
 * @param {string} description
 * @return {Promise<boolean>}
 */
function setDescription(description) {
    return new Promise(resolve => {
        if (description !== undefined) {
            document.getElementsByTagName("head")[0].innerHTML += "<meta name='description' content='"+description+"'>";
        }
        resolve(true);
    });

}


/**
 * set's load event if given
 * @param onload
 */
function setLoadEvent(onload) {
    return new Promise(resolve => {
        if(onload !== undefined){
            window.addEventListener('load', () => {
                alert("test");
            });
            resolve(true);
        }else resolve(true);
    })
}

