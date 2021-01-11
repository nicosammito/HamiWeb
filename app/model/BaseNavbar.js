function BaseNavbar() {


    let name = "{ Company name }";
    let path = "./app/view/BaseNavbar.html";
    let navbaritems = [["{ Item }", "index.html"], ["{ Item }", "index.html"]];
    let navbarisdefault = true;

    this.run = function () {
        setNavbarItems();
        setName();
    }
    this.getPath = function () {
        return path;
    }

    this.setName = function (pname) {
        name = pname;
    }
    this.setNavbarItems = function (pitems) {
        navbarisdefault = false;
        navbaritems = pitems;
    }
    this.addNavbarItem = function (pitem) {
        if (navbarisdefault === true) {
            navbaritems = [];
            navbarisdefault = false;
            navbaritems.push(pitem);
        } else {
            navbaritems.push(pitem);
        }
    }

    function setNavbarItems() {
        try {
            const navbaritem = document.getElementById("navbar_section").getElementsByClassName("navbar-nav")[0];
            navbaritem.innerHTML = "";
            navbaritems.forEach(
                function (item, index, array) {
                    navbaritem.innerHTML += '<li class="nav-item">\n' +
                        '                    <a class="nav-link" href="' + item[1] + '">' + item[0] + '</a>\n' +
                        '                    </li>';
                }
            )
        } catch (e) {
        }

    }

    function setName() {
        try {
            document.getElementById("navbar_section").getElementsByClassName("navbar-brand")[0].innerHTML = name;
        } catch (e) {
        }

    }

}

BaseNavbar.prototype = IBaseSection;