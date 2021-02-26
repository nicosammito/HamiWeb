import {BaseError} from "./BaseError.js";
import {SectionLoader} from "./SectionLoader.js"

export class BaseContainer{
  
  child;
  contentid = null;
  
  constructor(obj) {
    
    if (obj === undefined) {
      throw new BaseError("Object is undefined!");
    }
    
    if(obj.child !== undefined){
      this.child = obj.child;
    }else{
      throw new BaseError("Child is required!");
    }
    
  }
  
  run = async (c) => {
    this.contentid = c;
  }
  
}

function setChild(obj){
  return new Promise(resolve => {
    const node = document.getElementById(obj.contentid)[0];
    const sectionLoader = new SectionLoader();
    obj.child.
  })
}