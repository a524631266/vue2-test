<template>
  <div :style="{ fontSize: fontSize + 'em'}">
      <!-- 监听事件相当于 fontSize += $event -->
      <blog-post v-for="(data,index) in posts" :key="index" :post="data" @enlarge-text="enlargetext">
      </blog-post>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import BlogPost from '@/components/BlogPost.vue';
@Component({
    components: {
        BlogPost,
    },
})
export default class Blog extends Vue {
    private posts = [
      { id: 1, title: 'My journey with Vue', content: '1111' },
      { id: 2, title: 'Blogging with Vue' , content: '22222' },
      { id: 3, title: 'Why Vue is so fun' , content: 'ad3333asd' },
    ];
    private fontSize = 1;
    @Emit()
    private enlargetext(event: any) {
        this.fontSize += event;
    }
}
</script>

<style lang='scss' scoped>

</style>