# ex-table-column
Extended from el-table-column. Automatically adjust column width according to content. Keep all features of el-table-column.

## Features
- Automatically adjust column width according to content.
- Extended from el-table-column, keep all features of el-table-column.

## Using npm or yarn
```bash
$ npm install ex-table-column --save
```

```bash
$ yarn add ex-table-column
```
## Demo
Clone repository and run:
```bash
$ yarn && yarn serve
```
## Required
- [element-ui](https://github.com/ElemeFE/element)
## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'element-ui'
import ExTableColumn from 'ex-table-column';

Vue.use(Element)
Vue.component(ExTableColumn.name, ExTableColumn);
```
### Simple use
Replace `<el-table-column />` to `<ex-table-column>`, add prop `:autoFit='true'`:
``` javascript
<el-table>
  <ex-table-column
    :autoFit='true'
  />
</el-table>
```
And add style:
``` css
.el-table .cell {
  white-space: nowrap;
  width: fit-content;
}
```
### Complicated slot
Add prop `fitByClass` to specify a class of the element, which is in slot component, and use to calculate the column width:
``` javascript
<el-table>
  <ex-table-column
    :autoFit='true'
    fitByClass="auto-fit-target"
    :fitGap="20"
  >
    <div class="column-wrapper" slot-scope="scope">
      <div class="column-content auto-fit-target">
        {{scope.row[scope.column.property]}}
      </div>
    </div>
  </ex-table-column>
</el-table>
```
Make sure that the element choosed by `fitByClass`, the width of the element is correct, maybe you should add `white-space: nowrap;
  width: fit-content;` for the element.

### Fit header
Calculating the column width does not consider the header width by default, if you want to include the header, you can add prop `:fitHeader='true'`:
``` javascript
<el-table>
  <ex-table-column
    :autoFit='true'
    :fitHeader='true'
  />
</el-table>
```
And add style:
``` css
.el-table .cell,
.el-table th>.cell
{
  white-space: nowrap;
  width: fit-content;
}
```
## Extend prop

| Prop | Description | Type | Accepted Values | Default | 
| --- | --- | --- | --- | --- |
| autoFit | whether column width to be automatically adjusted according to content. | boolean | - | false
| fitByClass | Specify the class of the element that determines the width | string | - | cell
| fitGap | The content right margin | number | - | 0
| fitHeader | Whether to include the header width when calculating the column width | boolean | - | false