import {BaseError} from "./BaseError.js";

window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    throw new BaseError(errorMsg + " in line " +lineNumber + "<br>" + url);
}