import {SectionLoader} from "./SectionLoader.js";
import {BaseFailure} from "./ErrorHandler.js";

export function Base() {

    let sections = [];
    let tempContent;
    /**
     * is used to set the title of a page
     * @param {string} title
     */
    this.setTitle = function (title) {
        document.getElementsByTagName("head")[0].innerHTML += "<title>" + title + "</title>";

    }


    this.addCSS = function (path) {

        document.getElementsByTagName("head")[0].innerHTML += "<link rel='stylesheet' href='" + path + "'>";

    }

    /**
     *
     * @param section
     */
    this.addSections = async function (section) {
        sections.push(section);
    }


    this.load = async function (i) {

        let temp;
        if(i === undefined){
            temp = 0;
        }else {
            temp = i;
        }

        const array = sections[temp];
        loadSection(array).then(() => {
            this.load(temp+1);
        })


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

}

