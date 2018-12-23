<!--  -->
<template>
  <div>
    <!-- 方法2，相当于 v-model + watch ，-->
    <input v-bind:value="inputtext" v-on:input="$emit('chaaaaaaa', $event.target.value)" />
    <slot name="sometest">no slot</slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class BlogModel extends Vue {
    @Prop() private inputtext!: string;
}
</script>

<style lang='scss' scoped>

</style>