import { BaseFailure } from "./ErrorHandler.js";

export const IBaseSection = {
    getPath: () => {
            const error = new BaseFailure();
            error.load("You need to implement the getPath Method. If you think this is not an error made by you please contact the support on discord");

    },
    getTagName: () => {
        const error = new BaseFailure();
        error.load("You need to implement the getBaseElement Method. If you think this is not an error made by you please contact the support on discord");
    },
    getClassNames: () => {
        const error = new BaseFailure();
        error.load("You need to implement the getBaseElement Method. If you think this is not an error made by you please contact the support on discord");
    },
    run: () => {
            const error = new BaseFailure();
            error.load("You need to implement the run Method. If you think this is not an error made by you please contact the support on discord");
    },
}




