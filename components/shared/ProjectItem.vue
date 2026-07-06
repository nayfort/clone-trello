<template>
	<li
		:key="project.id"
		class="flex justify-between items-center border-b border-slate-300 py-2 cursor-pointer w-full lg:max-w-sm"
	>
		<NuxtLink
			:to="localePath(`/dashboard/${project.id}`)"
			v-if="!editProjectName"
			class="w-full"
		>
			{{ project.name }}
		</NuxtLink>
		<div
			class="flex items-center gap-1"
			:class="editProjectName ? 'w-full' : ''"
		>
			<Button
				v-if="!editProjectName"
				type="button"
				variant="ghost"
				size="icon"
				:aria-label="$t('EDIT')"
				@click="startProjectNameEdit"
			>
				<Icon icon="mdi:rename" />
			</Button>
			<div
				class="flex items-center justify-between gap-2 w-full"
				v-if="editProjectName"
			>
				<Input
					v-model="projectNameDraft"
					type="text"
					class="h-6"
					@keydown.enter.prevent="saveProjectName"
					@keydown.esc.prevent="cancelProjectNameEdit"
				/>
				<Button
					type="button"
					variant="ghost"
					size="icon"
					:aria-label="$t('SAVE')"
					@click="saveProjectName"
				>
					<Icon icon="mdi:content-save" />
				</Button>
			</div>
			<Button
				type="button"
				variant="ghost"
				size="icon"
				:aria-label="$t('REMOVE')"
				@click="dashboardStore.deleteProject(project.id)"
			>
				<Icon icon="mdi:delete" />
			</Button>
		</div>
	</li>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import type { Project } from '~/stores/useProjectsStore';

const editProjectName = ref(false);
const localePath = useLocalePath();

const dashboardStore = useProjectsStore();
const props = defineProps<{
	project: Project;
}>();

const projectNameDraft = ref(props.project.name);

watch(
	() => props.project.name,
	(name) => {
		if (!editProjectName.value) {
			projectNameDraft.value = name;
		}
	}
);

const startProjectNameEdit = () => {
	projectNameDraft.value = props.project.name;
	editProjectName.value = true;
};

const cancelProjectNameEdit = () => {
	projectNameDraft.value = props.project.name;
	editProjectName.value = false;
};

const saveProjectName = () => {
	const trimmedName = projectNameDraft.value.trim();

	if (!trimmedName) {
		cancelProjectNameEdit();
		return;
	}

	dashboardStore.updateProjectName(props.project.id, trimmedName);
	editProjectName.value = false;
};
</script>
