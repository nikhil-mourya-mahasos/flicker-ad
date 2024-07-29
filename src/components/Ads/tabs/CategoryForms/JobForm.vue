<template>
  <section>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-2xl font-bold my-4 text-gray-500">Job Form</h3>
      <h3 class="text-2xl font-bold my-4">Key Details</h3>
      <div class="grid grid-cols-2 gap-10 border rounded-lg p-5">
        <div class="">
          <DynamicInput :placeholder="'Ex. Marketing manager'" v-model="formData.job_options" :name="'Title'"
            :isLabel="true" :isRequired="true" :label="'Job Title'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'Enter Client Or Recruiter'" v-model="formData.client_recruiter" :isLabel="true"
            :label="'Client Or Recruiter'" :name="'description'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'Select Option'" v-model="formData.employement_types" :isLabel="true"
            :label="'Employment Type'" :name="'description'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'ex. 32,423$'" v-model="formData.compensation" :isLabel="true"
            :label="'Compensation or Salary'" :name="'description'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'ex. Telephonic + WebEx'" v-model="formData.interview_mode" :isLabel="true"
            :label="'Inerview Mode'" :name="'description'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'ex. Telephonic + WebEx'" v-model="formData.remote_work_from_home" :isLabel="true"
            :label="'Remote or workfrom home avaiable?'" :name="'description'" :labelPosition="'top'"
            :isPrefixIcon="false" />
        </div>
      </div>
    </div>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-2xl font-bold my-4">Benefits</h3>
      <div class="grid grid-cols-6 gap-10 border rounded-lg p-5">
        <CustomCheckbox :is-label="true" label="401(K) Plan" />

        <CustomCheckbox :is-label="true" label="Dental Insurance" />
        <CustomCheckbox :is-label="true" label="Paid Time Off" />
        <CustomCheckbox :is-label="true" label="Life Insurance" />
        <CustomCheckbox :is-label="true" label="Health Insurance" />
        <CustomCheckbox :is-label="true" label="" />

      </div>
    </div>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-2xl font-bold my-4">Work Authorization required</h3>
      <div class="grid grid-cols-6 gap-10 border rounded-lg p-5">
        <CustomCheckbox :is-label="true" label="Any valid VISA" />
        <CustomCheckbox :is-label="true" label="US citizen" />
        <CustomCheckbox :is-label="true" label="Green card" />
        <CustomCheckbox :is-label="true" label="EAD TN" />
        <CustomCheckbox :is-label="true" label="Health Insurance" />
      </div>
    </div>
    <div class="p-8 mx-16 text-left">
      <div class="grid grid-rows-4 grid-cols-1 gap-6 p-5">
        <CustomCheckbox :is-label="true" label="We are e-verified and Equal Opportunity Employer(EOE)" />
        <CustomCheckbox :is-label="true" label="Invite people with disabilities for this position" />
        <CustomCheckbox :is-label="true" label="Work visa sponsership available for this position" />
        <CustomCheckbox :is-label="true" label="Direct applicants only. No third party recruiters allowed apply." />
      </div>
    </div>
  </section>
</template>
<script setup>
import DynamicInput from "@/components/DynamicInput.vue";
import CustomCheckbox from "@/components/CustomCheckbox.vue";
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
