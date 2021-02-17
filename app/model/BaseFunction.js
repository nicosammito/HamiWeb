import {BaseError} from "./BaseError.js";

export class BaseFunction {

    function;
    constructor(obj) {
        if(obj !== undefined){
            if({}.toString.call(obj) === '[object Function]'){
                this.function = obj;
            }else {
                throw new BaseError("parameter is not a function!")
            }
        }

    }

}