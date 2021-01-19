## BaseNavbar Section

[Back to navigation](https://github.com/nicosammito/HamiWeb/tree/feature/docs/docs)

The Base navbar is needed to create the base of a navbar, where elements like buttons or links can be added.

### Other sections that regard to BaseNavbar

- [BaseNavbarButton]()
- [BaseNavbarLink]()
- [BaseNavbarType]()
- [BaseNavbarPosition]()

### Import BaseNavbar section

```javascript
import {BaseNavbar} from "not set yet";
```

This is how you import the BaseNavbar section

### Instantiate BaseNavbar

```javascript
/**
 * @param {BaseNavbarType} type
 * @return Promise<void>
 **/
const basenavbar = new BaseNavbar(type);
```

You need to instantiate the BaseNavbar to create a responsive navbar and add navbar items like Links or Buttons.

### Set name

```javascript
/**
 * @param {string} name
 * @return Promise<void>
 **/
basenavbar.setName(name);
```

With this function you can set the name of the navbar

### Add navbar item

```javascript
/**
 * @param item
 * @param {BaseNavbarPosition} position
 * @return Promise<void>
 **/
basenavbar.addNavbarItem(item, position);
```

With this function you can add navbar items to your navbar and force them to use either right or left position 

### Example

```javascript
const baseNavbar = new BaseNavbar(BaseNavbarType.normal);
baseNavbar.setName("YourWebsite.com");
baseNavbar.addNavbarItem(new BaseNavbarLink("Homepage", "index.html"), BaseNavbarPosition.left);
baseNavbar.addNavbarItem(new BaseNavbarLink("About", "about.html"), BaseNavbarPosition.left);
baseNavbar.addNavbarItem(new BaseNavbarButton("Contact", "contact.html", "btn-success"), BaseNavbarPosition.right);

base.addSections(baseNavbar);
```