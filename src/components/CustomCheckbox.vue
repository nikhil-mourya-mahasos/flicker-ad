<!-- src/components/CustomCheckbox.vue -->
<template>
    <div class="">
        <div class="">
            <label class="inline-flex items-center">
                <input type="checkbox" v-model="isChecked" class="hidden" @change="updateValue">
                <span
                    class="w-5 h-5 border-2 border-gray-300 rounded-md flex items-center justify-center cursor-pointer"
                    :class="{ 'primary-bg primary-border-color border': isChecked }">
                    <svg v-if="isChecked" class="w-5 h-5 text-white" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </span>
                <span class="ml-2 text-sm whitespace-nowrap" v-if="isLabel">{{ label }}</span>
            </label>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CustomCheckbox',
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        isLabel: {
            type: Boolean,
            default: true,
        },
        label: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            isChecked: this.modelValue,
        };
    },
    methods: {
        updateValue() {
            this.$emit('update:modelValue', this.isChecked);
        },
    },
    watch: {
        modelValue(newVal) {
            this.isChecked = newVal;
        },
    },
};
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
