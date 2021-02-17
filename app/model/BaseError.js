export class BaseError extends Error{

    constructor(message = "", ...args) {
        document.body.innerHTML = "";
        document.body.innerHTML += "<link rel='stylesheet' href='css/bootstrap.min.css'>";
        document.body.innerHTML += '<br><br><br><div class="container">\n' +
            '    <div class="row justify-content-center align-self-center">\n' +
            '        <div class="col-12 col-md-8 col-lg-6">\n' +
            '            <div class="p-5 gray-light-bg rounded shadow">\n' +
            '                <div class="text-center">\n' +
            '                    <h2 class="mb-5">Error</h2>\n' +
            '                </div>\n' +
            '\n' +
            '                <p class="text-center mb-0">\n' +
            '                    There are some errors in your code. Please check your console!</p>\n' +
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
            '</div>';
        super(message, ...args);
        this.message = message;
    }
}