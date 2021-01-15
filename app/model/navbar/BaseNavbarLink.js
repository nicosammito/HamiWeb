function BaseNavbarLink(pname, plink) {


    let path = "./app/view/navbar/BaseNavbarLink.html";
    let name = "{ Name }";
    let link = "#";
    let content_id;
    if(pname != null){
        name = pname;
    }
    if(plink != null){
        link = plink;
    }
    this.getPath = function (){
        return path;
    }

    this.run = async function (c){
        content_id = c;
        await setName();
        await setLink();

    }
    this.setName = function (pname){
        name = pname;
    }

    this.setLink = function (plink){
        link = plink;
    }

    async function setName(){
        const content = document.getElementById(content_id).getElementsByTagName("a")[0];
        content.innerHTML = name;
    }

    async  function setLink(){
        const content = document.getElementById(content_id).getElementsByTagName("a")[0];
        content.href = link;
    }



    BaseNavbarLink.prototype = IBaseSection;
}