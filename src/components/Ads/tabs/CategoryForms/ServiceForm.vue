<template>
  <div class="p-8 mx-16 text-left border rounded-lg">
    <h3 class="text-2xl font-bold my-4">if Service Category</h3>
    <div class="grid grid-cols-2 gap-10">
      <div class="grid grid-rows-2">
        <DynamicInput
          :placeholder="'Ex. ABC Company'"
          :name="'Title'"
          :isLabel="true"
          :isRequired="true"
          :label="'Business or Your Name'"
          :labelPosition="'top'"
          :isPrefixIcon="false"
        />
        <div class="flex justify-start gap-4">
          <DynamicInput
            :placeholder="'Ex. Cloud Service'"
            v-model="formData.services"
            :name="'Title'"
            :isLabel="true"
            :isRequired="true"
            :label="'List of Services'"
            :labelPosition="'top'"
            :isPrefixIcon="false"
          />
          <button>Add</button>
        </div>
      </div>
      <div class="">
        <DynamicInput
          :placeholder="'Enter Open Hours'"
          v-model="formData.business_hours"
          :isLabel="true"
          :label="'Open Hours'"
          :name="'description'"
          :labelPosition="'top'"
          :textAreaRows="5"
          :type="'textarea'"
          :isPrefixIcon="false"
        />
      </div>
    </div>
  </div>
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
  service_provider: "",
  services: [],
  locations: [],
  business_hours: "",
  realtor: "",
  license: "",
});
</script>
