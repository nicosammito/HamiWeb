import { IBaseSection } from "../IBaseSection.js";
import { BaseFailure } from "../ErrorHandler.js";
import {SectionLoader} from "../SectionLoader.js";

export const BaseNavbarConst = {
    normal: "normal",
    stickytop: "stickytop",
    fixed: "fixed"
}

export function BaseNavbar(navbarType = BaseNavbarConst.normal) {

    let navbarAttributeType = navbarType;
    let name = "{ Company name }";
    let path = "./app/view/navbar/BaseNavbar.html";
    let navbaritems = [];
    let contentid;


    this.run = async function (c) {
        contentid = c;
        await setNavbarType();
        await setNavbarItems();
        await setName();
    }

    this.getPath = function () {
        return path;
    }

    this.setName = function (pname) {
        name = pname;
    }

    this.addNavbarItem = function (pitem) {
        navbaritems.push(pitem);
    }

    async function setNavbarType() {
        try {
            const navbar = document.getElementById(contentid);
            switch (navbarAttributeType) {
                case BaseNavbarConst.stickytop:
                    navbar.className += " sticky-top";
                    break;
                case BaseNavbarConst.fixed:
                    navbar.className += " fixed-top";
                    break;
                default:
                    break;
            }
        } catch (e) {
            const error = new BaseFailure();
            error.load(e.message);
        }
    }

    async function setNavbarItems() {
        try {
            const navbaritem = document.getElementById(contentid).getElementsByClassName("navbar-nav")[0];
            navbaritem.innerHTML = "";
            navbaritems.forEach(
                function (item, index, array) {
                    const setS = new SectionLoader();
                    setS.setSection(item).then(function () {
                        navbaritem.appendChild(setS.getContent());
                        item.run(setS.getContent().id);
                    })
                }
            )
        } catch (e) {
            const error = new BaseFailure();
            error.load(e.message);

        }

    }

    async function setName() {
        try {
            document.getElementById(contentid).getElementsByClassName("navbar-brand")[0].innerHTML = name;
        } catch (e) {
            const error = new BaseFailure();
            error.load(e.message);
        }

    }

}

BaseNavbar.prototype = IBaseSection;