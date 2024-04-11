import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTestStore = defineStore('testStore', () => {
	const flag = ref(true)

	function toggleFlag() {
		flag.value = !flag.value
	}

	return {
		flag,
		toggleFlag,
	}
})
