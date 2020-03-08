
import { TableColumn } from 'element-ui';
import max from 'lodash/max';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import {
  parseMinWidth,
} from 'element-ui/packages/table/src/util.js';

export default {
  name: 'TableColumn',
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
      default: 32,
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
      let cells = window.document.querySelectorAll(`.${this.columnId} .${this.fitByClass}`);
      if (isEmpty(cells)) {
        cells = window.document.querySelectorAll(`.${this.columnId} .cell`);
      }
      if (isEmpty(cells)) {
        return;
      }
      const cellLeftPadding = 32;
      const autoMinWidth = max(map(cells, item => item.getBoundingClientRect().width)) + cellLeftPadding + this.fitGap;
      if (this.autoWidth !== autoMinWidth) {
        this.autoWidth = autoMinWidth;
      }
    },
  },
  updated() {
    this.updateAutoWidth();
  },
  mounted() {
    this.updateAutoWidth();
  },
};
