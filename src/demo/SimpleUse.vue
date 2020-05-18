<template>
  <el-table
    :data='tableData'
    style='width: 800px; margin: 0 auto;'
    border
  >
    <ex-table-column
      v-for='column in tableColumns'
      :className='!notAutoFitColums.includes(column.prop) ? "" : "ex-table_column_not-auto-fit"'
      :autoFit='!notAutoFitColums.includes(column.prop)'
      :minWidth='notAutoFitColums.includes(column.prop) ? 120 : ""'
      :key="column.prop"
      :prop='column.prop'
      :label='column.label'
    />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      notAutoFitColums: ['notAutoFit'],
      tableColumns: [{
        prop: 'date',
        label: 'date',
      }, {
        prop: 'name',
        label: 'name',
      }, {
        prop: 'autoFitAddress',
        label: 'auto fit address',
      }, {
        prop: 'notAutoFit',
        label: '! not auto fit',
      }, {
        prop: 'phoneNumber',
        label: 'phoneNumber',
      }],
      tableData: [{
        date: '2016-05-03',
        name: 'TomTom',
        autoFitAddress: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        notAutoFit: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }, {
        date: '2016-05-02',
        name: 'TomTomTom',
        autoFitAddress: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        notAutoFit: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }, {
        date: '2016-05-04',
        name: 'Tom',
        autoFitAddress: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        notAutoFit: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }, {
        date: '2016-05-01',
        name: 'Tom',
        autoFitAddress: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        notAutoFit: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
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
  .ex-table_column_not-auto-fit .cell{
    width: 100% !important;
  }
</style>