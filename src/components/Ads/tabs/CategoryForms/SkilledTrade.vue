<template>
  <section>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-xl font-bold my-2 text-gray-500">(if Skilled Trade) </h3>
      <div class="grid grid-cols-2 gap-10 border-2 rounded-lg p-5">
        <div class="flex flex-col gap-4">
          <DynamicInput :placeholder="'Ex. RG Group'" :name="'Title'" :isLabel="true" v-model="formData.house_type"
            :isRequired="true" :label="'Business or Your Name'" :labelPosition="'top'" :isPrefixIcon="false" />
          <DynamicInput :placeholder="'Dropdown'" :name="'Title'" :isLabel="true" v-model="formData.house_type"
            :isRequired="true" :label="'List of Services'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div>
          <DynamicInput :placeholder="'Enter Open Hours'" :name="'Title'" :isLabel="true" :type="'textarea'"
            :textAreaRows="5" v-model="formData.house_type" :isRequired="true" :label="'Open Hours'"
            :labelPosition="'top'" :isPrefixIcon="false" />
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

  job_options: [],
  house_type: "",
  bed_rooms: "",
  bath_rooms: "",
  furnished: "",
  property_area: "",
  rent_other_utilities: "",
  stay_available_for: [],
  available_from: "",
  available_from_today: false,
  smoking_allowed: "",
  pets_allowed: "",
  accommodation_properties: [],
  accommodation_amenities: [],

  compensation_unit: "Month",
  rent_other_utilities_unit: "Month",
  property_area_unit: "Sq.ft",
  rent_lease_unit: "for rent",
  cost_unit: "Month",

  images: [],
  diff_time: "just now",
  isAccepted: false,
});
</script>
