<!--  -->
<template>
  <div>
    <h3>{{ post.title }}</h3>
    <!-- <button @click="$emit("add-")">+</button> -->
    <div v-html="post.content"></div>
    <button @click="$emit('enlarge-text',0.5)">+</button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class BlogPost extends Vue {
    @Prop() private post!: object;
}
</script>

<style lang='scss' scoped>

</style>