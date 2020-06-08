<template>
  <div class="FitHeader">
    <el-table
      :data='tableData'
      style='width: 800px; margin: 0 auto;'
      border
    >
      <ex-table-column
        v-for='column in tableColumns'
        :fitHeader="true"
        :className='!notAutoFitColums.includes(column.prop) ? "" : "ex-table_column_not-auto-fit"'
        :autoFit='!notAutoFitColums.includes(column.prop)'
        :key="column.prop"
        :prop='column.prop'
        :label='column.label'
      />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notAutoFitColums: ['notAutoFit'],
      tableColumns: [{
        prop: 'date',
        label: 'auto fit column',
      }, {
        prop: 'name',
        label: 'auto fit column',
      }, {
        prop: 'autoFitAddress',
        label: 'auto fit column',
      }, {
        prop: 'notAutoFit',
        label: 'not fit',
      }, {
        prop: 'phoneNumber',
        label: 'auto fit column',
      }],
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        autoFitAddress: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        notAutoFit: 'No. 189, Grove St, Los Angeles, No. 189, Grove St, Los Angeles',
        phoneNumber: '+86 13888888888',
      }, {
        date: '2016-05-02',
        name: 'Tom',
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
<style lang="scss">
  .FitHeader {
    .el-table {
      .cell,
      th>.cell
      {
        white-space: nowrap;
        width: fit-content;
      }
    }
    .ex-table_column_not-auto-fit .cell{
      width: 100% !important;
    }
  }
</style>