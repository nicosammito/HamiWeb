import {BaseError} from "./BaseError.js";
import {HamiWebElement} from "./HamiWebElement.js";

let count = 1;

export class SectionLoader {

    /**
     *
     * @param section
     */
    setSection = (section) => {
        return new Promise((resolve) => {
            if (!(section instanceof HamiWebElement)) {
                throw new BaseError(section.constructor.name + " is not instanceof HamiWebElement");
            }
            this.loadFile(section).then(response => {
                const dom = document.createElement(section.getTagName.toString());
                if (section.getClassNames !== undefined) {
                    section.getClassNames.forEach(value => {
                        dom.classList.add(value);
                    });
                }
                dom.id = count.toString();
                if(section.element !== null){
                    dom.id = section.element.id;
                }
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
                } catch (e) {}
            } catch (e) {
                throw new BaseError(e);
            }
        });
    }

}
