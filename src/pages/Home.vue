<script lang="ts" setup>
import { useTestStore } from '@/store'

const testStore = useTestStore()
</script>

<template>
	<div>
		<h1>Home</h1>
		<n-button type="primary" @click="$router.push('/task')">Task</n-button>
		<n-button type="primary" @click="$router.push('/login')"
			>Login</n-button
		>
		<div>
			pinia flag: {{ testStore.flag }}
			<n-button @click="testStore.toggleFlag">toggle</n-button>
		</div>
	</div>
</template>
