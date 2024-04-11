<template>
	<div>Task</div>
	<n-button type="primary" @click="$router.back()">Back</n-button>

	<div>
		<div class="title">todos</div>
		<ul>
			<li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { getTodos } from '@/api/todos'
import { onMounted, ref } from 'vue'

const todos = ref<any>([])

function fetchTodos() {
	getTodos().then(res => {
		todos.value = res.data
	})
}

onMounted(() => {
	fetchTodos()
})
</script>

<style lang="scss" scoped></style>
