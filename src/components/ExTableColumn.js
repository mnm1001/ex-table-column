
import { TableColumn } from 'element-ui';
import {
  parseMinWidth,
} from 'element-ui/packages/table/src/util.js';
import { max, map, isEmpty } from './util'

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
      default: 0,
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

      const autoMinWidth = max(map(cells, item => item.getBoundingClientRect().width)) + this.fitGap + 1;

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
