import {BaseError} from "./BaseError.js";
import {SectionLoader} from "./SectionLoader.js"

export class BaseContainer{
  
  child;
  style;
  contentid = null;

  getTagName = "div";
  getClassNames = ["container"];

  /**
   * constructor of BaseContainer
   * @param {Object} obj
   */
  constructor(obj) {
    
    if (obj === undefined) {
      throw new BaseError("Object is undefined!");
    }
    
    if(obj.child !== undefined){
      if(Array.isArray(obj.child)){
        this.child = obj.child;
      }else throw new BaseError("Child must be type of array!");
    }else throw new BaseError("Child is required!");

    /*if(obj.style !== undefined){
      if(obj.style instanceof BaseStyle){

      }else throw new BaseError("Style must be type of BaseStyle");
    }*/
    
  }

  /**
   * run's the BaseContainer
   * @param c
   * @return {Promise<void>}
   */
  run = async (c) => {
    this.contentid = c;
    await setChild(this);
  }
  
}


/**
 * set's all child's underneath the container
 * @param {Object} obj
 * @return {Promise<boolean>}
 */
function setChild(obj){
  return new Promise(resolve => {
    const node = document.getElementById(obj.contentid) ;
    const sectionLoader = new SectionLoader();
    obj.child.forEach((item) => {
      sectionLoader.setSection(item).then((c) => {
        node.appendChild(c);
        item.run(c.id);
        resolve(true);
      })
    })
  })
}