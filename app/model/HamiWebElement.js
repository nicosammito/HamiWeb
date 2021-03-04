import {BaseError} from "./BaseError.js";
import {SectionLoader} from "./SectionLoader.js";

export class HamiWebElement {

    run = (element) => { throw new BaseError("Missing run function!") }
    /**
     * Is loading the child and navbar section
     * @param {HamiWebElement} section
     * @param {HTMLElement} node
     * @return {Promise<boolean>}
     */
    loadSection = (section, node) => {
        return new Promise(resolve => {
            const c = new SectionLoader();
            c.setSection(section).then(c => {
                node.appendChild(c);
                section.run(c);
                resolve(true);
            });
        })
    }
}