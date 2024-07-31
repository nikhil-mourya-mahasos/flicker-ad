<template>
  <section>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-xl font-bold my-2 text-gray-500">(if Training Lessons) </h3>
      <div class="grid grid-cols-2 gap-10 border-2 rounded-lg p-5">
        <DynamicInput :placeholder="'Ex. RG Group'" :name="'Title'" :isLabel="true" v-model="formData.house_type"
          :isRequired="true" :label="'Business or Your Name'" :labelPosition="'top'" :isPrefixIcon="false" />
        <div>
          <ItemAdd  :label="'Training Offered'" :placeholder="'Ex. Spanish Classes'" :value="[]" :buttonText="'Add'" />
        </div>
        <div class="text-left col-span-2">
          <h3 class="text-lg font-bold my-1">Training Mode</h3>
          <div class="grid grid-cols-6 gap-5 border rounded-lg p-5">
            <CustomCheckbox :is-label="true" label="Online" />
            <CustomCheckbox :is-label="true" label="Onsite" />
            <CustomCheckbox :is-label="true" label="Hybrid" />
            <CustomCheckbox :is-label="true" label="Trainee Preferred" />
          </div>
        </div>
        <div class="">
          <TextArea id="example-textarea" v-model="formData.house_type" name="example" label="Training or Course Fees"
            placeholder="Explain course fee" :minLength="10" :maxLength="200" />
        </div>
        <div class="">
          <TextArea id="example-textarea" v-model="formData.house_type" name="example" label="Open Hours"
            placeholder="Enter Open Hours" :minLength="10" :maxLength="200" />
        </div>
      </div>
    </div>

  </section>
</template>
<script setup>
import CustomCheckbox from "@/components/CustomCheckbox.vue";
import DynamicInput from "@/components/DynamicInput.vue";
import TextArea from "../../form_elements/TextArea.vue";
import ItemAdd from "../../form_elements/ItemAdd.vue";
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
