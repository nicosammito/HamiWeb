import { IBaseSection } from "../IBaseSection.js";
import {BaseFailure} from "../ErrorHandler.js";

export function BaseNavbarButton(pText, pLink, pClass) {


    let link = "#";
    let text = "Button";
    let classes = [];
    let content;
    if(pText != null){
        text = pText;
    }
    if (pLink != null){
        link = pLink;
    }

    if(pClass != null){
        classes.push(pClass);
    }

    this.getPath = "./app/view/navbar/BaseNavbarButton.html";

    this.getClassNames = ["li"];

    this.getTagName = "nav-item";

    this.run = async function (c) {
        content = c;
        await setLink();
        await setText();
        await addClasses();
    }



    this.setLink = function (plink) {
        link = plink;
    }

    this.addClass = function (classname) {
        classes.push(classname);
    }

    this.setText = function (ptext) {
        text = ptext;
    }

    async function setLink() {
        document.getElementById(content).getElementsByTagName("a")[0].href = link;
    }

    async function addClasses() {
        try{
            const button = document.getElementById(content).getElementsByTagName("button")[0];

            classes.forEach(
                function (value, index, array) {

                    button.classList.add(value);
                }
            );
        }catch (e) {
            const error = new BaseFailure();
            error.load(e);
        }
    }

    async function setText() {
        document.getElementById(content).getElementsByTagName("button")[0].innerHTML = text;
    }


}

BaseNavbarButton.prototype = IBaseSection;