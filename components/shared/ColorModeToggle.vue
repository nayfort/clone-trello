<template>
	<Button variant="ghost" size="icon" @click="isDark = !isDark">
		<Icon
			:icon="isDark ? 'radix-icons:sun' : 'radix-icons:moon'"
			class="h-5 w-5"
		/>
		<span class="sr-only">Theme</span>
	</Button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
const colorMode = useColorMode();

const isDark = computed({
	get() {
		return colorMode.value === 'dark';
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
	},
});
</script>
