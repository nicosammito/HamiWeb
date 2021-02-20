import {BaseError} from "./BaseError.js";

let count = 1;

export class SectionLoader {

    /**
     *
     * @param section
     */
    setSection = function (section) {
        return new Promise((resolve) => {
            if (typeof section.run === "undefined") {
                throw new BaseError("run function is not set in section " + section.constructor.name + "!")
            } else if (section.contentid === undefined) {
                throw new BaseError("contentid is not set in section " + section.constructor.name + "!");
            } else if (typeof section.getTagName === "undefined") {
                throw new BaseError("getTagName is not set in section " + section.constructor.name + "!");
            }
            this.loadFile(section).then(response => {
                const dom = document.createElement(section.getTagName.toString());
                if (section.getClassNames !== undefined) {
                    section.getClassNames.forEach(value => {
                        dom.classList.add(value);
                    });
                }
                dom.id = count.toString();
                count++;
                dom.innerHTML = response;
                resolve(dom);
            });
        });
    }

    /**
     *
     * @param section
     * @returns {Promise<string>}
     */
    loadFile(section) {
        return new Promise((resolve) => {
            try {
                const http = new XMLHttpRequest();
                http.onreadystatechange = () => {
                    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
                        resolve(http.response);
                    } else if (http.readyState === XMLHttpRequest.DONE) {
                        throw new BaseError("The given path to the file is wrong or broken. Please make sure you only implement files that exists under the path.");
                    }
                }
                try {
                    if (section.getPath === undefined || section.getPath === null) {
                        resolve("");
                    } else {
                        http.open("GET", section.getPath, false);
                    }
                    http.send();
                } catch (e) {
                }
            } catch (e) {
                throw new BaseError(e);
            }
        });
    }

}
