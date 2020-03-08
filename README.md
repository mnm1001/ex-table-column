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
Replace `<el-table-column />` to `<ex-table-column>`, add prop `:autoFit='true'`, add style `
  .el-table .cell {
    white-space: nowrap;
    width: fit-content;
  }
`:
``` javascript
 <template>
    <el-table
      :data='tableData'
      style='width: 800px; margin: 0 auto;'>
      <ex-table-column
        :autoFit='true'
        v-for='column in tableColumns'
        :prop='column.prop'
        :label='column.label'
      />
      </el-table-column>
    </el-table>
  </template>

<script>
export default {
  data() {
    return {
      tableColumns: [{
        prop: 'date',
        label: 'date',
      }, {
        prop: 'name',
        label: 'name',
      }, {
        prop: 'address',
        label: 'address',
      }, {
        prop: 'address2',
        label: 'address2',
      }, {
        prop: 'phoneNumber',
        label: 'phoneNumber',
      }, {
        prop: 'phoneNumber',
        label: 'phoneNumber',
      }],
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        address2: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        address2: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        address2: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        address2: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }],
    };
  },
};
</script>
<style>
  .el-table .cell {
    white-space: nowrap;
    width: fit-content;
  }
</style>>
```
### Complicated Slot
Add prop `fitByClass` to specify a class of the element, which is in slot component, and use to calculate the column width.
``` javascript
 <template>
    <el-table
      :data='tableData'
      style='width: 800px; margin: 0 auto;'>
      <ex-table-column
        :autoFit='true'
        fitByClass="auto-fit-target"
        :fitGap="column.prop === 'date' ? 64 : 20"
        v-for='column in tableColumns'
        :prop='column.prop'
        :label='column.label'
      >
        <div class="column-wrapper" slot-scope="scope">
          <div class="column-content auto-fit-target" :title="scope.row[scope.column.property]">
            {{scope.row[scope.column.property]}}
          </div>
        </div>
      </ex-table-column
      </el-table-column>
    </el-table>
  </template>

<script>
export default {
  data() {
    return {
      tableColumns: [{
        prop: 'date',
        label: 'date',
      }, {
        prop: 'name',
        label: 'name',
      }, {
        prop: 'address',
        label: 'address',
      }, {
        prop: 'address2',
        label: 'address2',
      }, {
        prop: 'phoneNumber',
        label: 'phoneNumber',
      }, {
        prop: 'phoneNumber',
        label: 'phoneNumber',
      }],
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        address2: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        address2: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        address2: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        address2: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }],
    };
  },
};
</script>
<style>
  .el-table .cell {
    white-space: nowrap;
    width: fit-content;
  }
</style>>
```

## Extend prop

| Prop | Description | Type | Accepted Values | Default | 
| --- | --- | --- | --- | --- |
| autoFit | whether column width to be automatically adjusted according to content, if set to be false, the behaves of `<ex-table-column />` will be same as `<el-table-column>`. | boolean | - | true
| fitByClass | Specify the class of the element that determines the width | string | - | cell
| fitGap | The content right margin | number | - | first column is 30, other is 0