function Base() {


    document.getElementsByTagName("head")[0].innerHTML = "" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <meta name=\"viewport\"\n" +
        "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">";

    /**
     * is used to set the title of a page
     * @param {string} title
     */
    this.setTitle = function (title){
        document.getElementsByTagName("head")[0].innerHTML += "<title>"+title+"</title>";
    }

    this.addJS = function (path){
        document.getElementsByTagName("head")[0].innerHTML += "<script src='"+path+"'></script>"
    }

    this.addCSS = function (path){
        document.getElementsByTagName("head")[0].innerHTML += "<style href='"+path+"' rel='stylesheet'></style>"
    }

    /**
     *
     * @param {Array} array
     */
    this.setFiles = function (array) {
        Base.file = "";
        array.forEach(
            path => this.loadFiles(path)
        )
    }

    /**
     *
     * @param {string} path
     */
    this.loadFiles = function (path) {
        $.ajax({
            url: path,
            context: document.body,
            success: function (response) {
                Base.file += response;
                $("body").html(Base.file);
            }
        });
    }
}


