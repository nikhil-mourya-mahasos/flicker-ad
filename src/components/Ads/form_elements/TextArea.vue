<template>
    <div>
        <label :for="id" class="block font-bold text-xs text-gray-900">
            {{ label }}
        </label>
        <textarea :id="id" :name="name" :minlength="minLength" :maxlength="maxLength" :placeholder="placeholder"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            v-model="inputValue"></textarea>
        <p v-if="inputValue.length < minLength" class="text-red-500 text-xs mt-1">
            Minimum length is {{ minLength }} characters.
        </p>
        <p v-if="inputValue.length > maxLength" class="text-red-500 text-xs mt-1">
            Maximum length is {{ maxLength }} characters.
        </p>
    </div>
</template>

<script>
export default {
    name: 'Textarea',
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: '',
        },
        minLength: {
            type: Number,
            default: 0,
        },
        maxLength: {
            type: Number,
            default: 1000,
        },
    },
    data() {
        return {
            inputValue: '',
        };
    },
};
</script>

<style scoped>
/* Add any additional styling here if necessary */
</style>

<!-- <Textarea
      id="example-textarea"
      name="example"
      label="Example Textarea"
      placeholder="Enter some text..."
      :minLength="10"
      :maxLength="200"
    /> -->
