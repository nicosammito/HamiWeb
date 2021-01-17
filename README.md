
# HamiWeb - JavaScript Website Builder
**HamibotWeb is a module based javascript framework made with javascript.  
You can easily create outstanding websites without writing a single line of html and css and everything is responsive and mobile friendly.**

## Install
**Its not set yet but in the future it will look like this**

```javascript
<script type="module">
    import { Base } from "url"; 
</script>
```
## Basic usage of ```HamiWeb```
```javascript
//base
const base = new Base();
base.setTitle("YourWebsite.com - Your Slogan");


//Navbar
const baseNavbar = new BaseNavbar(BaseNavbarType.normal);
baseNavbar.setName("YourWebsite.com");
baseNavbar.addNavbarItem(new BaseNavbarLink("Homepage", "index.html"), BaseNavbarPosition.left);
baseNavbar.addNavbarItem(new BaseNavbarLink("About", "about.html"), BaseNavbarPosition.left);
baseNavbar.addNavbarItem(new BaseNavbarButton("Contact", "contact.html", "btn-success"), BaseNavbarPosition.right);

base.addSections(baseNavbar);

```
