<script setup lang="ts">
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Icon } from '@iconify/vue';

const props = defineProps<{
	placeholder: string;
	options: readonly string[];
	modelValue?: string;
	value?: string;
}>();

const emit = defineEmits<{
	'onChange': [value: string];
	'update:modelValue': [value: string];
}>();

const internalValue = ref(props.modelValue ?? props.value ?? '');

watch(
	() => [props.modelValue, props.value],
	(newValue) => {
		internalValue.value = newValue.find((value) => value !== undefined) ?? '';
	}
);

const selectedItem = computed({
	get() {
		return props.modelValue ?? props.value ?? internalValue.value;
	},
	set(value: string) {
		internalValue.value = value;
		emit('update:modelValue', value);
		emit('onChange', value);
	},
});

const resetSelection = () => {
	selectedItem.value = '';
};
</script>

<template>
	<div class="flex w-full">
		<Select v-model="selectedItem" class="flex">
			<SelectTrigger>
				<SelectValue :placeholder="placeholder" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem v-for="option in options" :key="option" :value="option">
						{{ option.slice(0, 1).toUpperCase() + option.slice(1) }}
					</SelectItem>
				</SelectGroup>
			</SelectContent>
			<Button
				v-if="selectedItem"
				class="ml-1 p-2"
				variant="ghost"
				@click="resetSelection"
			>
				<Icon icon="mdi:close" />
			</Button>
		</Select>
	</div>
</template>
