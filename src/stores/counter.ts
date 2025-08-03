import { ref, computed } from 'vue'
// @ts-ignore
import { defineStore } from 'pinia'
// @ts-ignore
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
