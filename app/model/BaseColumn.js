import {SectionLoader} from "./SectionLoader.js";
import {BaseError} from "./BaseError.js";

export const BaseColumnSize = {
    col_12: "col-12",
    col_11: "col-11",
    col_10: "col-10",
    col_9: "col-9",
    col_8: "col-8",
    col_7: "col-7",
    col_6: "col-6",
    col_5: "col-5",
    col_4: "col-4",
    col_3: "col-3",
    col_2: "col-2",
    col_1: "col-1",
    col_md_12: "col-md-12",
    col_md_11: "col-md-11",
    col_md_10: "col-md-10",
    col_md_9: "col-md-9",
    col_md_8: "col-md-8",
    col_md_7: "col-md-7",
    col_md_6: "col-md-6",
    col_md_5: "col-md-5",
    col_md_4: "col-md-4",
    col_md_3: "col-md-3",
    col_md_2: "col-md-2",
    col_md_1: "col-md-1",

}

export function BaseColumn(pSections, columnsize) {

    let sections = [];
    let content;
    if(pSections != null && Array.isArray(pSections)){
        pSections.forEach(value => {
            sections.push(value);
        })
    }
    if(columnsize != null){
        this.getClassNames = [columnsize.toString()];
    }else {
        this.getClassNames = ["col"];
    }


    this.getPath = null;


    this.getTagName = "div";

    this.run = async function (c) {
        content = c;
        await addSections();
    }

    this.addSection = function (section) {
        sections.push(section);
    }


     function addSections() {
        try{
            const dom = document.getElementById(content);
            dom.innerHTML = "";
            sections.forEach((value, index, array) => {
                    const setS = new SectionLoader();
                    setS.setSection(value).then(c => {
                        dom.appendChild(c);
                        value.run(c.id);
                    })
                }
            )
        }catch (e) {
            throw new BaseError(e);
        }

    }


}
