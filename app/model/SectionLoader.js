
let response;
let content;
/**
 *
 * @param section
 */
async function setSection(section) {
    await loadFile(section).then(function () {
        const c = document.createElement("section");
        c.id = Math.floor(Math.random() * 1000000000000000000000000000000000000).toString();
        c.innerHTML = response;
        content = c;
    });


}
/**
 *
 * @param section
 * @returns {Promise<string>}
 */
async function loadFile(section) {
    try{
        await $.ajax({
            url: section.getPath(),
            context: document.body,
            statusCode: {
                404: function (response) {
                    const error = new BaseFailure();
                    error.load("The given path to the file is wrong or broken. Please make sure you only implement files that are exists under the path.");
                },
                200: function (r) {
                    response = r;
                },
            }

        });
    }catch (e) {
        const error = new BaseFailure();
        error.load(e);

    }


}