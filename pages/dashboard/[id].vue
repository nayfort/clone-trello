<template>
	<header
		class="bg-slate-300 dark:bg-slate-500 px-4 py-2 flex items-center justify-between rounded-sm"
	>
		<h1 class="text-lg font-bold">{{ project?.name }} tasks</h1>
	</header>
	<main class="flex flex-col md:flex-row gap-4 pt-4 overflow-x-auto h-[calc(100vh-90px)]">
		<SharedSectionItem
			v-for="section in project?.dashboard"
			:key="section.status"
			:section="section"
			:projectId="project.id"
		/>
	</main>
</template>

<script lang="ts" setup>
const projectStore = useProjectsStore();
const { params } = useRoute();
const project = ref();

onMounted(() => {
	const selectProject = projectStore.getProject(params.id as string);
	project.value = selectProject;
});
</script>
