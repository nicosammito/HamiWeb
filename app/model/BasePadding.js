import {SectionLoader} from "./SectionLoader.js";
import {BaseError} from "./BaseError.js";

export const BasePaddingSize = {
    padding_5px: "padding-5px",
    padding_10px: "padding-10px",
    padding_15px: "padding-15px",
    padding_20px: "padding-20px",
    padding_25px: "padding-25px",
    padding_30px: "padding-30px",
}

export function BasePadding(pSections, padding) {
    let content;
    let sections = [];


    this.getTagName = "div";
    this.getClassNames = [padding || null];
    this.getPath = null;

    if(pSections != null && Array.isArray(pSections)){
        pSections.forEach(value => {
            sections.push(value);
        })
    }

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
            throw new BaseError(e);
        }
    }

}
