import {BaseError} from "./BaseError.js";

window.onerror = (errorMsg, url, lineNumber) => {
    throw new BaseError(errorMsg + " in line " +lineNumber + "<br>" + url);
}