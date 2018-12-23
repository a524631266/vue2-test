<!--  -->
<template>
<div>
      <!-- 方法1 中如果使用v-model一定要在当前组件中定义好监听函数，否则无法向上级传递数据 -->
    <input v-model="inputtext" type="text"/>
    <slot name="sometest">no slot</slot>
    <zll-button title="first"></zll-button>
</div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class BlogModel extends Vue {
    @Prop() private some!: string;
    @Model('chaaaaaaa') private inputtext!: string;
    @Watch('inputtext', {deep: true})
    private change(newtext: any, oldtext: any) {
        this.$emit('chaaaaaaa', newtext);
    }
}
</script>

<style lang='scss' scoped>

</style>