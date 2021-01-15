export function BaseFailure() {

    this.load = function (error) {
        document.write("<link rel='stylesheet' href='css/bootstrap.min.css'>");
        document.write('<br><br><br><div class="container">\n' +
            '    <div class="row justify-content-center align-self-center">\n' +
            '        <div class="col-12 col-md-8 col-lg-6">\n' +
            '            <div class="p-5 gray-light-bg rounded shadow">\n' +
            '                <div class="text-center">\n' +
            '                    <h2 class="mb-5">Error</h2>\n' +
            '                </div>\n' +
            '\n' +
            '                <p class="text-center mb-0">\n' +
            '                    ' + error + '</p>\n' +
            '                <hr>\n' +
            '                <p class="text-center mb-0">If you need any help please visit <a href="https://discord.hamibot.io">https://discord.hamibot.io</a>.\n' +
            '                </p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="row justify-content-center">\n' +
            '        <div class="col-md-8 col-lg-6">\n' +
            '            <div class="copyright-wrap small-text text-center mt-5 text-white">\n' +
            '                <p class="mb-0">© HamibotWeb, All rights reserved</p>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>');
    }

}

window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    const error = new BaseFailure();
    error.load(errorMsg + " in line " +lineNumber + "<br>" + url);
    return false;
}