## Base Section

[Back to navigation](https://github.com/nicosammito/HamiWeb/tree/feature/docs/docs)

The Base is needed to add created sections and run the html compiler.

### Import base section
```javascript 
import { Base } from "not set yet";
```
This is how you import the Base section

### Instantiate Base
```javascript
/**
 * @type {Base}
 * @return Promise<void>
 */
const base = new Base();
```
You need to instantiate the Base to add sections and run HamiWeb.

### Set html title
```javascript
/**
 * @param {string} title
 * @return Promise<void>
 */
base.setTitle(title);
```
With this function you can set the title of your html file.

### Add section
```javascript
/**
 * @param section
 * @return Promise<void>
 */
base.addSections(section);
```
This function is needed to add your created sections, so they can be added to html

### Run base instance
```javascript
/**
 * @return Promise<void>
 */
base.load();
```
This function will load and run all sections and add them to html

### Example
```javascript
const base = new Base();

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
