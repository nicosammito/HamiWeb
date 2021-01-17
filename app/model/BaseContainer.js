import {IBaseSection} from "./IBaseSection.js";
import {BaseFailure} from "./ErrorHandler.js";
import {SectionLoader} from "./SectionLoader.js";

export function BaseContainer() {

    let path = "./app/view/BaseContainer.html";
    let content;
    let sections = [];

    this.run = async function (c) {
        content = c;
        await addSections();
    }
    
    this.getPath = function () {
        return path;
    }

    this.addSections = function (section) {
        sections.push(section);
    }


    async function addSections() {
        try{
            const doc = document.getElementById(content).getElementsByClassName("container")[0];
            doc.innerHTML = "";
            sections.forEach(
                function (item, index, array) {
                    const setS = new SectionLoader();
                    setS.setSection(item).then(function () {
                        doc.appendChild(setS.getContent());
                        item.run(setS.getContent().id);
                    })
                })
        }catch (e) {
            const error = new BaseFailure();
            error.load(e);
        }
    }


}

BaseContainer.prototype = IBaseSection;