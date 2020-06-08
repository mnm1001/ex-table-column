 <template>
  <div class="ComplicatedSlot">
    <el-table
      :data='tableData'
      style='width: 800px; margin: 0 auto;'
      border
    >
      <ex-table-column
        :autoFit='true'
        fitByClass="auto-fit-target"
        :fitGap="20"
        v-for='column in tableColumns'
        :key="column.prop"
        :prop='column.prop'
        :label='column.label'
      >
        <div class="column-wrapper" slot-scope="scope">
          <div class="column-content auto-fit-target" :title="scope.row[scope.column.property]">
            {{scope.row[scope.column.property]}}
          </div>
        </div>
      </ex-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableColumns: [{
        prop: 'date',
        label: 'auto fit column',
      }, {
        prop: 'name',
        label: 'auto fit column',
      }, {
        prop: 'address',
        label: 'auto fit column',
      }, {
        prop: 'address2',
        label: 'auto fit column',
      }, {
        prop: 'phoneNumber',
        label: 'auto fit column',
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
<style lang="scss">
  .ComplicatedSlot {
    .el-table {
      .cell {
        white-space: nowrap;
        width: fit-content;
      }

      th>.cell {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>