function Base() {
    document.write("<link rel='stylesheet' href='css/bootstrap.min.css'>");

    /**
     * is used to set the title of a page
     * @param {string} title
     */
    this.setTitle = function (title) {
        document.getElementsByTagName("head")[0].innerHTML += "<title>" + title + "</title>";

    }


    this.addCSS = function (path) {

        document.getElementsByTagName("head")[0].innerHTML += "<link rel='stylesheet' href='" + path + "'>";

    }

    /**
     *
     * @param section
     */
    this.addSections = function (section) {
        setSection(section).then(function (){
            $("body").append(content);
           section.run(content.id);
        });


    }

}

