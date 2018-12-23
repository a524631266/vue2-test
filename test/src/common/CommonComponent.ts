import Vue from "vue";
import ZllButton from "@/common/ZllButton.vue";
// use kebab-case namespace component name
// 该用法无效
// Vue.component(
//     'zll-button',{
//         data: () => {
//             return {
//                 count: 0,
//             };
//         },
//         template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
//     }
// );
// 有效的用法
Vue.component(
    'zll-button',ZllButton
);
