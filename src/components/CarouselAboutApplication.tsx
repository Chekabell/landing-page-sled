import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const isAndroid = ref<boolean>(true)

    const ToggleOS = (): void => {
      isAndroid.value = !isAndroid.value
    }

    return () => (
      <div>
        <h2 class="uppercase text-blue font-roboto-semi-bold font-semibold text-[2.7rem]">
          Основные функции приложения
        </h2>
      </div>
    )
  },
})

export const ButtonLogo = defineComponent({
  props: {
    isActive: { type: Boolean },
    isAndroid: { type: Boolean },
  },
  setup(props) {
    return () => <button></button>
  },
})
