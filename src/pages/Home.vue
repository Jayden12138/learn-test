<template>
	<div>
		<h1>Home</h1>
		<n-button type="primary" @click="$router.push('/task')">Task</n-button>
		<n-button type="primary" @click="$router.push('/login')"
			>Login</n-button
		>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
