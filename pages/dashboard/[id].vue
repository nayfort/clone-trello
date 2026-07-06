<template>
	<header
		v-if="project"
		class="bg-slate-300 dark:bg-slate-500 px-4 py-2 flex items-center justify-between rounded-sm"
	>
		<h1 class="text-lg font-bold">{{ project.name }} tasks</h1>
	</header>
	<main
		v-if="project"
		class="flex flex-col md:flex-row gap-4 pt-4 overflow-x-auto h-[calc(100vh-90px)]"
	>
		<SharedSectionItem
			v-for="section in project.dashboard"
			:key="section.status"
			:section="section"
			:projectId="project.id"
		/>
	</main>
	<div
		v-else
		class="flex min-h-[240px] items-center justify-center text-lg text-muted-foreground"
	>
		{{ $t('PROJECT_NOT_FOUND') }}
	</div>
</template>

<script lang="ts" setup>
const projectStore = useProjectsStore();
const route = useRoute();

const projectId = computed(() => {
	const id = route.params.id;
	return Array.isArray(id) ? id[0] : id;
});

const project = computed(() => projectStore.getProject(projectId.value));
</script>
