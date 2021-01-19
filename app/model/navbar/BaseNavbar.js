import { IBaseSection } from "../IBaseSection.js";
import { BaseFailure } from "../ErrorHandler.js";
import {SectionLoader} from "../SectionLoader.js";

export const BaseNavbarType = {
    normal: "normal",
    stickytop: "stickytop",
    fixed: "fixed"
}

export const BaseNavbarPosition = {
    right : "right",
    left : "left"
}

export function BaseNavbar(navbarType) {

    let navbarAttributeType = navbarType;
    let name = "{ Company name }";
    let navbaritemsleft = [];
    let navbaritemsright = [];
    let contentid;


    this.getPath = "./app/view/navbar/BaseNavbar.html";

    this.getClassNames = ["navbar","navbar-expand-lg", "navbar-light", "bg-light"];

    this.getTagName = "nav";

    this.run = async function (c) {
        contentid = c;
        await setNavbarType();
        await setNavbarItemsLeft();
        await setNavbarItemsRight();
        await setName();
    }

    this.setName = function (pname) {
        name = pname;
    }

    this.addNavbarItem = function (pitem, pposotion) {

        if(pposotion === BaseNavbarPosition.left){
            navbaritemsleft.push(pitem);
        }else if (pposotion === BaseNavbarPosition.right){
            navbaritemsright.push(pitem);
        }

    }

    async function setNavbarType() {
        try {
            const navbar = document.getElementById(contentid);
            switch (navbarAttributeType) {
                case BaseNavbarType.stickytop:
                    navbar.className += " sticky-top";
                    break;
                case BaseNavbarType.fixed:
                    navbar.className += " fixed-top";
                    break;
                default:
                    break;
            }
        } catch (e) {
            console.error(e);
            const error = new BaseFailure();
            error.load(e.message);
        }
    }

    async function setNavbarItemsLeft() {
        try {
            const navbaritem = document.getElementById(contentid).getElementsByClassName("navbar-nav")[0];
            navbaritem.innerHTML = "";
            navbaritemsleft.forEach(
                function (item, index, array) {
                    const setS = new SectionLoader();
                    setS.setSection(item).then(c =>{
                        navbaritem.appendChild(c);
                        item.run(c.id);
                    })
                }
            )
        } catch (e) {
            console.error(e);
            const error = new BaseFailure();
            error.load(e.message);

        }

    }
    async function setNavbarItemsRight() {
        try {
            const navbaritem = document.getElementById(contentid).getElementsByClassName("list-unstyled")[0];
            navbaritem.innerHTML = "";
            navbaritemsright.forEach(
                function (item, index, array) {
                    const setS = new SectionLoader();
                    setS.setSection(item).then(c =>{
                        navbaritem.appendChild(c);
                        item.run(c.id);
                    })
                }
            )
        } catch (e) {
            console.error(e);
            const error = new BaseFailure();
            error.load(e.message);

        }

    }

    async function setName() {
        try {
            document.getElementById(contentid).getElementsByClassName("navbar-brand")[0].innerHTML = name;
        } catch (e) {
            console.error(e);
            const error = new BaseFailure();
            error.load(e.message);
        }

    }

}

BaseNavbar.prototype = IBaseSection;