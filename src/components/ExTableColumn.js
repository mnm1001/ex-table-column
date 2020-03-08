
import { TableColumn } from 'element-ui';
import max from 'lodash/max';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import {
  parseMinWidth,
} from 'element-ui/packages/table/src/util.js';

export default {
  name: 'ExTableColumn',
  extends: TableColumn, // 指定继承组件
  props: {
    fitByClass: {
      type: String,
      default: 'cell',
    },
    autoFit: {
      type: Boolean,
      default: false,
    },
    fitGap: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      autoWidth: 0,
    };
  },
  computed: {
    realMinWidth() {
      if (this.autoFit) {
        return parseMinWidth(max([this.minWidth, this.autoWidth]));
      }
      return parseMinWidth(this.minWidth);
    },
    realFitGap() {
      if (this.fitGap !== null) return this.fitGap;

      const isFirstColumn = this.owner.store.states._columns[0].id === this.columnId;
      return isFirstColumn ? 30 : 0;
    },
  },
  methods: {
    updateAutoWidth() {
      let cells = window.document.querySelectorAll(`td.${this.columnId} .${this.fitByClass}`);
      if (isEmpty(cells)) {
        cells = window.document.querySelectorAll(`td.${this.columnId} .cell`);
      }
      if (isEmpty(cells)) {
        return;
      }
      const autoMinWidth = max(map(cells, item => item.getBoundingClientRect().width)) + this.realFitGap + 1;

      if (this.autoWidth !== autoMinWidth) {
        this.autoWidth = autoMinWidth;
      }
    },
  },
  updated() {
    this.updateAutoWidth();
  },
  mounted() {
    this.$nextTick(this.updateAutoWidth);
  },
};
