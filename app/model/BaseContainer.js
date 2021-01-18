import {IBaseSection} from "./IBaseSection.js";
import {BaseFailure} from "./ErrorHandler.js";
import {SectionLoader} from "./SectionLoader.js";

export function BaseContainer(pSections) {

    let content;
    let sections = [];
    if(pSections != null && Array.isArray(pSections)){
        pSections.forEach(value => {
            sections.push(value);
        })
    }

    this.getPath = null;

    this.getClassNames = ["container"];

    this.getTagName = "div";

    this.run = async function (c) {
        content = c;
        await addSections();
    }


    this.addSections = function (section) {
        sections.push(section);
    }


    function addSections() {
        try{
            const doc = document.getElementById(content);
            sections.forEach(
                function (item, index, array) {
                    const setS = new SectionLoader();
                    setS.setSection(item).then(c => {
                        doc.appendChild(c);
                        item.run(c.id);
                    })
                })
        }catch (e) {
            const error = new BaseFailure();
            error.load(e);
        }
    }


}

BaseContainer.prototype = IBaseSection;