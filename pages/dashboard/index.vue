<template>
	<div class="flex items-center justify-center h-screen text-3xl">
		<NuxtLink :to="localePath('/')">{{ $t('GOTO_PROJECTS') }}👈🏼</NuxtLink>
	</div>
</template>

<script lang="ts" setup>

const localePath = useLocalePath();
</script>
