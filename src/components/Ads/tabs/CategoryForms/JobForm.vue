<template>
  <section>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-2xl font-bold my-4">Key Details</h3>
      <div class="grid grid-cols-2 gap-10 border rounded-lg p-5">
        <div class="">
          <DynamicInput
            :placeholder="'Ex. Marketing manager'"
            v-model="formData.job_options"
            :name="'Title'"
            :isLabel="true"
            :isRequired="true"
            :label="'Job Title'"
            :labelPosition="'top'"
            :isPrefixIcon="false"
          />
        </div>
        <div class="">
          <DynamicInput
            :placeholder="'Enter Client Or Recruiter'"
            v-model="formData.client_recruiter"
            :isLabel="true"
            :label="'Client Or Recruiter'"
            :name="'description'"
            :labelPosition="'top'"
            :isPrefixIcon="false"
          />
        </div>
        <div class="">
          <DynamicInput
            :placeholder="'Select Option'"
            v-model="formData.employement_types"
            :isLabel="true"
            :label="'Employment Type'"
            :name="'description'"
            :labelPosition="'top'"
            :isPrefixIcon="false"
          />
        </div>
        <div class="">
          <DynamicInput
            :placeholder="'ex. 32,423$'"
            v-model="formData.compensation"
            :isLabel="true"
            :label="'Compensation or Salary'"
            :name="'description'"
            :labelPosition="'top'"
            :isPrefixIcon="false"
          />
        </div>
        <div class="">
          <DynamicInput
            :placeholder="'ex. Telephonic + WebEx'"
            v-model="formData.interview_mode"
            :isLabel="true"
            :label="'Inerview Mode'"
            :name="'description'"
            :labelPosition="'top'"
            :isPrefixIcon="false"
          />
        </div>
        <div class="">
          <DynamicInput
            :placeholder="'ex. Telephonic + WebEx'"
            v-model="formData.remote_work_from_home"
            :isLabel="true"
            :label="'Remote or workfrom home avaiable?'"
            :name="'description'"
            :labelPosition="'top'"
            :isPrefixIcon="false"
          />
        </div>
      </div>
    </div>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-2xl font-bold my-4">Benefits</h3>
      <div class="grid grid-cols-6 gap-10 border rounded-lg p-5">
        <div class="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >401(K) Plan</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Dental Insurance</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Paid Time Off</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Life Insurance</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Health Insurance</label
          >
        </div>
      </div>
    </div>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-2xl font-bold my-4">Work Authorization required</h3>
      <div class="grid grid-cols-6 gap-10 border rounded-lg p-5">
        <div class="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Any valid VISA</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >US citizen</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Green card</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >EAD TN</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Health Insurance</label
          >
        </div>
      </div>
    </div>
    <div class="p-8 mx-16 text-left">
      <div class="grid grid-rows-4 grid-cols-1 gap-6 p-5">
        <div class="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >We are e-verified and Equal Opportunity Employer(EOE)</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Invite people with disabilities for this position</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Work visa sponsership available for this position</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Direct applicants only. No third party recruiters allowed apply.</label
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import DynamicInput from "@/components/DynamicInput.vue";
import { ref } from "vue";
const formData = ref({
  id: "",
  user_id: null,
  user: null,
  category: "",
  category_id: "",
  sub_category: "",
  sub_category_id: "",
  title: "",
  description: "",
  job_title: "",
  client_recruiter: "",
  employement_types: [],
  compensation: "",
  interview_mode: "",
  remote_work_from_home: "",
  benefits: [],
  work_authorizations: [],
  job_options: [],
});
</script>
