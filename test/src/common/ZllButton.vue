<template>
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class ZllButton extends Vue {
    private count = 0;
}
</script>

<style lang='scss' scoped>
    
</style>