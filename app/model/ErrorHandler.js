import {BaseError} from "./BaseError.js";

window.onerror =  (myErrorHandler(errorMsg, url, lineNumber) => {
    throw new BaseError(errorMsg + " in line " +lineNumber + "<br>" + url);
}