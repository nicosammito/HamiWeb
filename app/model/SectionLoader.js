import {BaseFailure} from "./ErrorHandler.js";

let count = 1;

export function SectionLoader() {

    /**
     *
     * @param section
     */
    this.setSection = function (section) {
        return new Promise((resolve) => {
            loadSection(section).then(r => resolve(r));
        });
    }

    function loadSection(section) {
        return new Promise((resolve) => {
            loadFile(section).then(response => {
                const dom = document.createElement(section.getTagName.toString());
                if(section.getClassNames != null){
                    section.getClassNames.forEach(value => {
                        dom.classList.add(value);
                    });
                }
                dom.id = count.toString();
                count++;
                dom.innerHTML = response;
                resolve(dom);
            });
        });
    }

    /**
     *
     * @param section
     * @returns {Promise<string>}
     */
        function loadFile(section) {
        try {
            return new Promise((resolve) => {
                const http = new XMLHttpRequest();
                http.onreadystatechange = () => {
                    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
                        resolve(http.response);
                    } else if (http.readyState === XMLHttpRequest.DONE) {
                        const error = new BaseFailure();
                        error.load("The given path to the file is wrong or broken. Please make sure you only implement files that are exists under the path.");
                    }
                }
                try{
                    if(section.getPath === undefined || section.getPath === null){
                        http.open("GET", "./app/view/BaseEmpty.html", true);
                    }else {
                        http.open("GET", section.getPath, true);
                    }
                    http.send();
                }catch (e) {}
            });
        } catch (e) {
            const error = new BaseFailure();
            error.load(e);
        }
    }
}
