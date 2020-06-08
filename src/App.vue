<template>
  <div id="app" class="demo">
    <div class="demo__title">Ex Table Column Demo</div>
    <el-tabs 
      v-model="activeName"
      style="width: 800px; margin: 0 auto;"
    >
      <el-tab-pane label="Simple use" name="SimpleUse">
        <SimpleUse v-if="activeName === 'SimpleUse'" />
      </el-tab-pane>
      <el-tab-pane label="Complicated slot" name="ComplicatedSlot">
        <ComplicatedSlot v-if="activeName === 'ComplicatedSlot'" />
      </el-tab-pane>
      <el-tab-pane label="Fit header" name="FitHeader">
        <FitHeader v-if="activeName === 'FitHeader'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SimpleUse from '@/demo/SimpleUse.vue'
import ComplicatedSlot from '@/demo/ComplicatedSlot.vue'
import FitHeader from '@/demo/FitHeader.vue'

export default {
  name: 'App',
  components: {
    SimpleUse,
    ComplicatedSlot,
    FitHeader,
  },
  data() {
    return {
      activeName: 'SimpleUse'
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo {
  width: 800px;
  margin: 0 auto;
}
.demo__title {
  text-align: left;
  margin: 32px 0;
  font-size:32px;
}
</style>
