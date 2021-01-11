function Base() {
    document.write("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'>");
    caches.delete("/app/").then(r => console.log("cache deleted"));
    caches.delete("/css/").then(r => console.log("cache deleted"));
    /**
     * is used to set the title of a page
     * @param {string} title
     */
    this.setTitle = function (title) {
        document.getElementsByTagName("head")[0].innerHTML += "<title>" + title + "</title>";
    }


    this.addCSS = function (path) {
        document.getElementsByTagName("head")[0].innerHTML += "<link rel='stylesheet' href='" + path + "'></link>"
    }

    /**
     *
     * @param {Array} array
     */
    this.setSections = function (array) {
        try {
            Base.file = "";
            array.forEach(
                section => this.loadFiles(section)
            )
        } catch (e) {
        }
    }

    /**
     *
     * @param section
     */
    this.loadFiles = function (section) {
        if (section.getPath() == null) {
            return;
        }
        try {
            $.ajax({
                url: section.getPath(),
                context: document.body,
                statusCode: {
                    404: function (response) {
                        const error = new BaseFailure();
                        error.load("The given path to the file is wrong or broken. Please make sure you only implement files that are exists under the path.");
                    },
                    200: function (response) {
                        Base.file += response;
                        $("body").html(Base.file);
                        section.run();
                    },
                }

            });
        } catch (e) {
            const error = new BaseFailure();
            error.load(e.message);
        }

    }
}


