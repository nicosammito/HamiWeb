import {IBaseSection} from "./IBaseSection.js";
import {BaseFailure} from "./ErrorHandler.js";
import {SectionLoader} from "./SectionLoader";

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
            sections.forEach(function (value, index, array) {
                    const setSection = new SectionLoader();
                    setSection.loadFile(value).then(function () {
                        doc.appendChild(setSection.getContent());
                        value.run(setSection.getContent().id);
                    });
                });
        }catch (e) {
            const error = new BaseFailure();
            error.load(e);
        }
    }


}

BaseContainer.prototype = IBaseSection;