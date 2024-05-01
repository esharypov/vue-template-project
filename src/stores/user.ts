import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isAuthorized: Ref<boolean> = ref(false)

  return { isAuthorized }
})
