import { SectionLoader } from "./SectionLoader.js";
import { BaseFailure } from "./ErrorHandler.js";

export function Base() {
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
    this.addSections = function (section) {
        const c = new SectionLoader();
        c.setSection(section).then(function () {
            $("body").append(c.getContent());
            section.run(c.getContent().id);
        });


    }

}

