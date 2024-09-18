<template>
	<NuxtLayout>
		<NuxtRouteAnnouncer />
		<NuxtPage />
	</NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
	title: 'Trello Clone',
});

const dashboardStore = useProjectsStore();

onMounted(() => {
	dashboardStore.init();
});
</script>
