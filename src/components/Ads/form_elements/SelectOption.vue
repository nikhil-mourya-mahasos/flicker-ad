<template>
  <div class="w-full">
    <label class="block font-bold text-xs text-gray-900">{{ label }} <span v-if="required"
        class="text-red-500">*</span></label>
    <select class="mt-2 w-full border border-gray-300 rounded-lg p-1 cursor-pointer"
      @change="$emit('input', $event.target.value)" :required="required">
      <option value="" hidden class="text-gray-300">{{ defaultText }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value" :selected="option.value == value"
        class="text-black cursor-pointer">
        {{ option.label }}
      </option>
    </select>
    <div v-if="hasError" class="text-danger">
      <div class="error">{{ validationMessage }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectOption",
  props: {
    options: { 
      default:[{ label: 'Test 1', value: 'test1' }, { label: 'Test 2', value: 'test2' }],
      type: Array,
      required: true
    },
    value: { default: 'test1', type: String, required: true },
    label: { type: String, required: true },
    defaultText: { type: String, default: "Select" },
    hasError: { type: Boolean, required: false },
    validationMessage: { type: String, default: "This field is required" },
    required: { type: Boolean, default: false },
  },
};
</script>
