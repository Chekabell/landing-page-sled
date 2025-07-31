import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, { slots }) {
    return () => <div class="container">{slots.default ? slots.default() : null}</div>
  },
})
