# HamiWeb - JavaScript Website Builder

**HamibotWeb is a module based javascript framework made with javascript.  
You can easily create outstanding websites without writing a single line of html and css and everything is responsive
and mobile friendly.**

## Install

**Its not set yet but in the future it will look like this**

```html
<head>

<link rel='stylesheet' href='url(its not set because of prealpha version)'>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
</head>
<body>
<script type="module">
import { Base } from "url(its not set because of prealpha version";
</script>
</body>
```

## Basic usage of ```HamiWeb``` with Navbar example

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

base.load();
```
## Basic usage of ```HamiWeb``` with Container example

```javascript
//base
const base = new Base();

//Container with row and columns
const container = new BaseContainer([
    new BaseRow([
        new BaseColumn([
            new BasePadding([
                //new BaseCard()
            ], BasePaddingSize.padding_10px)
        ], BaseColumnSize.col_md_6),
        new BaseColumn([
            new BasePadding([
                //new BaseCard()
            ], BasePaddingSize.padding_10px)
        ], BaseColumnSize.col_md_6)
    ])
])
base.addSections(container);

base.load();
```
## Contributors
- Thanks to [Henrik Steffens](https://github.com/Th3Ph4nt0m) for section ideas
- Thanks to [Niklas van Schrick](https://github.com/Taucher2003) for supporting this project
