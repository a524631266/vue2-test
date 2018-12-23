<template>
  <div>
      <div>{{modeltext}}</div>
      <hr />
      <h5>模型1</h5>
      <blog-model v-model="modeltext">
          <div slot="sometest">模型1数据值:{{modeltext}}</div>
      </blog-model>
      <hr />
      <h5>模型2</h5>
      <blog-model2 v-model="modeltext">
          <div slot="sometest">模型2数据值:{{modeltext}}</div>
      </blog-model2>
      <hr />
      <h5>模型3</h5>
      <!-- $event 相当于在子组件中传递的第一个参数值 -->
      <blog-model3 :inputtext="modeltext" @chaaaaaaa="modeltext=$event">
          <div slot="sometest">模型3数据值:{{modeltext}}</div>
      </blog-model3>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import BlogModel from '@/components/BlogModel.vue';
import BlogModel2 from '@/components/BlogModel2.vue';
import BlogModel3 from '@/components/BlogModel3.vue';
@Component({
    components: {
        BlogModel,
        BlogModel2,
        BlogModel3,
    },
})
export default class BlogModelTest extends Vue {
    private modeltext = '2222';
}
</script>

<style lang='scss' scoped>

</style>