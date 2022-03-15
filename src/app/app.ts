import { defineComponent, defineAsyncComponent } from 'vue';
const TestHmr = defineAsyncComponent(() => import('@/components/test-hmr/test-hmr.vue'));

export default defineComponent({
  name: 'App',
  components: { TestHmr },
  data() {
    return {};
  }
});
