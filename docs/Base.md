## Base Section

[Back to navigation](https://github.com/nicosammito/HamiWeb/tree/feature/docs/docs)

The Base is needed to add created sections and run the html compiler.

### Instantiate Base
```javascript 
const base = new Base();
```
You need to instantiate the base to add sections and run HamiWeb.

### Set html title
```javascript 
base.setTitle("YourWebsite.com - Your Slogan");
```
With this function you can set the title of your html file.

### Add section
```javascript 
base.addSections(section);
```
This function is needed to add your created sections, so they can be added to html

### Run base instance
```javascript 
base.load();
```
This function will load and run all sections and add them to html
