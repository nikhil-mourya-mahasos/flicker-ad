<template>
  <section>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-xl font-bold my-2 text-gray-500">(if Pet Adoption) </h3>
      
      <div class="grid grid-cols-2 gap-10 border-2 rounded-lg p-5">
        <DynamicInput :placeholder="'Ex. german shephard'" :name="'Title'" :isLabel="true" v-model="formData.house_type"
          :isRequired="true" :label="'Bread or Species'" :labelPosition="'top'" :isPrefixIcon="false" />
        <DynamicInput :placeholder="'ex. 4 years'" :name="'Title'" :isLabel="true" v-model="formData.house_type"
          :isRequired="true" :label="'Pet Age'" :labelPosition="'top'" :isPrefixIcon="false" />
        <DynamicInput :placeholder="'ex. Gold/White'" :name="'Title'" :isLabel="true" v-model="formData.house_type"
          :isRequired="true" :label="'Color'" :labelPosition="'top'" :isPrefixIcon="false" />
        <DynamicInput :placeholder="'ex. Male'" :name="'Title'" :isLabel="true" v-model="formData.house_type"
          :isRequired="true" :label="'Pet Sex'" :labelPosition="'top'" :isPrefixIcon="false" />
        <DynamicInput :placeholder="'ex. 4.2lbs'" :name="'Title'" :isLabel="true" v-model="formData.house_type"
          :isRequired="true" :label="'Size/Weight'" :labelPosition="'top'" :isPrefixIcon="false" />
        <DynamicInput :placeholder="'ex. Friendly'" :name="'Title'" :isLabel="true" v-model="formData.house_type"
          :isRequired="true" :label="'Characteristics'" :labelPosition="'top'" :isPrefixIcon="false" />
        <div class="col-span-2">
            <TextArea id="example-textarea" v-model="formData.house_type" name="example"  :label="'Additional Information'"
            :placeholder="'any other details'" :minLength="10" :maxLength="200" />
        </div>
      </div>
    </div>

  </section>
</template>
<script setup>
import DynamicInput from "@/components/DynamicInput.vue";
import TextArea from "../../form_elements/TextArea.vue";
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
