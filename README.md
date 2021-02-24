# HamiWeb - JavaScript Website Builder

**HamibotWeb is a module based javascript framework made in javascript.  
You can easily create outstanding websites without writing a single line of html and css and everything is responsive
and mobile friendly.**

## Install

**Its not set yet but in the future it will look like this**

```html
<script type="module">
    import * as HamiWeb from "url not set because of prealpha";
</script>
```

## Basic usage of ```HamiWeb``` Navbar Widget

```javascript
//base
const base = new HamiWeb.Base({
    navbar: new HamiWeb.BaseNavbar({
        type: HamiWeb.BaseNavbarType.normal,
        name: "Hami.Web",
        list: [
            new HamiWeb.BaseNavbarLink({
                name: "HomePage",
                position: HamiWeb.BaseNavbarPosition.left,
                onclick: new HamiWeb.BaseFunction((node) => {
                    node.name = "HomePage (clicked)"; //change name of BaseNavbarLink
                    base.reload(); //reload all updated widgets
                })
            })
        ]
    })
});

base.load();
```
## Basic usage of ```HamiWeb``` Base widget

```javascript
//base
const base = new HamiWeb.Base({
    title: "YourWebsite.com - Your Slogan",
    description: "Your SEO description",
    onload: new HamiWeb.BaseFunction(() => {
        console.log("Website was loaded");
        base.title = "New title" //updated title of website
        base.reload(); //reload all updated widgets
    }),
    navbar: /*navbar of page*/ ,
    child: /*body of page*/
});

```
## Contributors
- Thanks to [Henrik Steffens](https://github.com/Th3Ph4nt0m) for section ideas
- Thanks to [Niklas van Schrick](https://github.com/Taucher2003) for supporting this project
