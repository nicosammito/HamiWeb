import {BaseError} from "./BaseError.js";
import {HamiWebElement} from "./HamiWebElement.js";

export class BaseContainer extends HamiWebElement {

    child;
    style;
    element = null;

    getTagName = "div";
    getClassNames = ["container"];

    /**
     * constructor of BaseContainer
     * @param {Object} obj
     */
    constructor(obj) {
        super();
        if (obj === undefined) {
            throw new BaseError("Object is undefined!");
        }

        if (obj.child !== undefined) {
            if (Array.isArray(obj.child)) {
                this.child = obj.child;
            } else throw new BaseError("Child must be type of array!");
        } else throw new BaseError("Child is required!");

        /*if(obj.style !== undefined){
          if(obj.style instanceof BaseStyle){

          }else throw new BaseError("Style must be type of BaseStyle");
        }*/

    }

    /**
     * run's the BaseContainer
     * @return {Promise<void>}
     * @param element
     */
    run = async (element) => {
        this.element = element;
        await setChild(this);
    }

}

/**
 * set's all child's underneath the container
 * @param {Object} obj
 * @return {Promise<boolean>}
 */
function setChild(obj) {
    return new Promise(resolve => {
        const node = obj.element;
        node.innerHTML = "";
        obj.child.forEach((item) => {
            obj.loadSection(item, node).then(() => resolve(true));
        })
    })
}