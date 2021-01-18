import {IBaseSection} from "./IBaseSection.js";
import {SectionLoader} from "./SectionLoader.js";

export function BaseRow(pSections) {

    let sections = [];
    let content;
    if(pSections != null && Array.isArray(pSections)){
        pSections.forEach(value => {
            sections.push(value);
        })
    }

    this.getPath = null;

    this.getClassNames = ["row"];

    this.getTagName = "div";

    this.run = async function (c) {
        content = c;
        await addSections();
    }
    
    this.addSection = function (section) {
        sections.push(section);
    }


    function addSections() {

        const dom = document.getElementById(content);
        sections.forEach((value, index, array) => {
                const setS = new SectionLoader();
                setS.setSection(value).then(c => {
                    dom.appendChild(c);
                    value.run(c.id);
                })
            }
        )

    }


}

BaseRow.prototype = IBaseSection;