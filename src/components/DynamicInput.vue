<template>
  <!-- <input
    class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
  /> -->
  <div class="text-left">
    <label v-if="isLabel" :for="label" class="block font-bold text-xs text-gray-900">{{ label }}</label>
    <div class="mt-2">
      <div class="relative">
        <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2">
          <div v-if="isPrefixIcon" class="w-10 center">
            <span class="material-icons-outlined text-gray-400">
             {{ icon }}
            </span>
          </div>
          <input v-if="type !== 'textarea'" :type="inputType" :name="label" @change="checkValidation"
            @focus="checkValidation" :id="label" v-bind="$attrs" :value="modelValue" :placeholder="placeholder"
            @input="(e) => $emit('update:modelValue', e.target.value)"
            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
          <textarea v-else :type="inputType" :name="label" @change="checkValidation" @focus="checkValidation" :id="label"
            v-bind="$attrs" :value="modelValue" :rows="textAreaRows" :placeholder="placeholder"
            @input="(e) => $emit('update:modelValue', e.target.value)"
            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />

          <div @mouseover="showTooltip" @mouseleave="hideTooltip" v-if="isTooltip" :class="name + 'btn'"
            class="w-10 cursor-pointer center">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="12" stroke="#232323" />
              <path
                d="M13.3027 14.9961H11.4863C11.4928 14.3711 11.5482 13.86 11.6523 13.4629C11.763 13.0592 11.9421 12.6914 12.1895 12.3594C12.4368 12.0273 12.7656 11.6497 13.1758 11.2266C13.4753 10.9206 13.7487 10.6341 13.9961 10.3672C14.25 10.0938 14.4551 9.80078 14.6113 9.48828C14.7676 9.16927 14.8457 8.78841 14.8457 8.3457C14.8457 7.89648 14.7643 7.50911 14.6016 7.18359C14.4453 6.85807 14.2109 6.60742 13.8984 6.43164C13.5924 6.25586 13.2116 6.16797 12.7559 6.16797C12.3783 6.16797 12.0202 6.23633 11.6816 6.37305C11.3431 6.50977 11.0697 6.72135 10.8613 7.00781C10.653 7.28776 10.5456 7.6556 10.5391 8.11133H8.73242C8.74544 7.37565 8.92773 6.74414 9.2793 6.2168C9.63737 5.68945 10.1191 5.28581 10.7246 5.00586C11.3301 4.72591 12.0072 4.58594 12.7559 4.58594C13.5827 4.58594 14.2858 4.73568 14.8652 5.03516C15.4512 5.33464 15.8971 5.76432 16.2031 6.32422C16.5091 6.8776 16.6621 7.53516 16.6621 8.29688C16.6621 8.88281 16.5417 9.42318 16.3008 9.91797C16.0664 10.4062 15.7637 10.8652 15.3926 11.2949C15.0215 11.7246 14.6276 12.1348 14.2109 12.5254C13.8529 12.8574 13.612 13.2318 13.4883 13.6484C13.3646 14.0651 13.3027 14.5143 13.3027 14.9961ZM11.4082 18.0918C11.4082 17.7988 11.4993 17.5514 11.6816 17.3496C11.8639 17.1478 12.1276 17.0469 12.4727 17.0469C12.8242 17.0469 13.0911 17.1478 13.2734 17.3496C13.4557 17.5514 13.5469 17.7988 13.5469 18.0918C13.5469 18.3717 13.4557 18.6126 13.2734 18.8145C13.0911 19.0163 12.8242 19.1172 12.4727 19.1172C12.1276 19.1172 11.8639 19.0163 11.6816 18.8145C11.4993 18.6126 11.4082 18.3717 11.4082 18.0918Z"
                fill="#232323" />
            </svg>
          </div>
          <div v-if="isTooltip" :id="name + 'tooltip'"
            class="absolute hidden right-0 bottom-10 md:bottom-10 z-10 p-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm">
            {{ tooltipContent }}
            <div class="tooltip-arrow"></div>
          </div>
        </div>
        <div v-if="isValid == false" class="text-red-500 text-sm">
          {{ requiredMessage }}<span> is required.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  name: { type: [String], default: "", required: true },
  modelValue: { type: [String, Number], default: "" },
  placeholder: { type: [String], default: "" },
  isLabel: { type: [Boolean], default: false },
  label: { type: [String], default: "" },
  labelPosition: { type: [String], default: "" },
  isTooltip: { type: [Boolean], default: false },
  tooltipContent: { type: [String], default: "" },
  isRequired: { type: [Boolean], default: false },
  requiredMessage: { type: [String], default: "" },
  type: { default: "text" },
  inputType: { default: "text" },
  textAreaRows: { default: 4 },
  isPrefixIcon: { default: true },
  icon: { default: "" }
});
const isValid = ref(true);
const internalValue = ref(props.modelValue);
// defineEmits(["update"]);

// console.log(props.value);

const showTooltip = () => {
  const content = document.getElementById(props.name + "tooltip");
  content.classList.add("block");
  content.classList.remove("hidden");
};

const hideTooltip = () => {
  const content = document.getElementById(props.name + "tooltip");
  content.classList.add("hidden");
  content.classList.remove("block");
};

const checkValidation = () => {
  internalValue.value = internalValue.value.trim();
  if (props.isRequired) {
    if (internalValue.value !== "") {
      isValid.value = true;
    } else {
      isValid.value = false;
    }
  } else {
    isValid.value = true;
  }
};

// export default {
//   name: "Input",
//   props: {
//     value: [String, Number],
//     placeholder: [String],
//     isLabel: [Boolean],
//     label: [String],
//     labelPosition: [String],
//     isTooltip: [Boolean],
//     tooltipContent: [String],
//   },
//   data() {
//     return {
//       internalValue: this.value,
//       $tooltipTargetEl: null,
//       $tooltipTriggerEl: null,
//       tooltipOptions: null,
//       tooltipInstanceOptions: null,
//     };
//   },
//   watch: {
//     value(newValue) {
//       this.internalValue = newValue;
//     },
//     internalValue(newInput) {
//       this.$emit("input", newInput);
//     },
//   },
//   methods: {},
// };
</script>
