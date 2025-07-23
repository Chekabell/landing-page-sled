import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class="container  mx-auto px-[0.667rem]">{slots.default ? slots.default() : null}</div>
    )
  },
})
