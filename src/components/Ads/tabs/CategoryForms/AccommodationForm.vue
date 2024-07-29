<template>
  <section>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-2xl font-bold my-4">(if Accomodation) Housing Details</h3>
      <div class="grid grid-cols-2 gap-10 border rounded-lg p-5">
        <div class="">
          <DynamicInput :placeholder="'Ex. Apartment or Condo'" :name="'Title'" :isLabel="true"
            v-model="formData.house_type" :isRequired="true" :label="'Accommodation Type'" :labelPosition="'top'"
            :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'Ex. 2 Bed'" v-model="formData.bed_rooms" :isLabel="true" :label="'Bedrooms'"
            :name="'bed_rooms'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'Ex. 2 Bathrooms'" v-model="formData.bath_rooms" :isLabel="true"
            :label="'Bathrooms'" :name="'bath_rooms'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <!-- furnished drompdonw -->
          <DynamicInput :placeholder="'Select option'" v-model="formData.furnished" :isLabel="true" :label="'Furnished'"
            :name="'furnished'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'ex. 1424 sqft'" v-model="formData.property_area" :isLabel="true"
            :label="'Property Area Size'" :name="'property_area'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'Select With option'" v-model="formData.rent_other_utilities" :isLabel="true"
            :label="'Rent + Utilities'" :name="'rent_other_utilities'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <p>Available for</p>
          <!-- stay_available_for -->
          <div class="flex justify-start items-center gap-10">
            <div>
              
              <CustomCheckbox :is-label="true" label="Any Stay" />
            </div>
            <div>
              
              <CustomCheckbox :is-label="true" label="Long Terms" />
            </div>
            <div>
              
              <CustomCheckbox :is-label="true" label="Short Term" />
            </div>
          </div>
        </div>
        <div class="">
          <DynamicInput :placeholder="'Ex. 12/3/5323'" v-model="formData.available_from" :isLabel="true"
            :label="'Available From'" :name="'available_from'" :labelPosition="'top'" :isPrefixIcon="false" />
          <div class="flex items-center my-5">
            
            <CustomCheckbox :is-label="true" label="Available From Today" />
          </div>
        </div>
        <div class="">
          <p>Smoking Allowed</p>
          <!-- smoking_allowed -->
          <div class="flex justify-start items-center gap-10">
            <div class="">
             
              <CustomCheckbox :is-label="true" label="Yes" />
            </div>
            <div class="">
              
              <CustomCheckbox :is-label="true" label="No" />
            </div>
            <div class="">
              <CustomCheckbox :is-label="true" label="Outside Only" />
            </div>
          </div>
        </div>
        <div class="">
          <p>Pets Allowed</p>
          <!-- pets_allowed -->
          <div class="flex justify-start items-center gap-10">
            <div class="flex items-center">
              <input id="disabled-radio-1" type="radio" value="" name="disabled-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="disabled-radio-1"
                class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">Yes</label>
            </div>
            <div class="flex items-center">
              <input checked id="disabled-radio-2" type="radio" value="" name="disabled-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="disabled-radio-2" class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500">No</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-2xl font-bold my-4">Additional Info</h3>
      <!-- accommodation_properties -->
      <div class="grid grid-cols-6 gap-10 border rounded-lg p-5">
        
        <CustomCheckbox :is-label="true" label="401(K) Plan" />
        
        <CustomCheckbox :is-label="true" label="Insurance" />
        
        <CustomCheckbox :is-label="true" label="Off" />
        
        <CustomCheckbox :is-label="true" label="Insurance" />
       
        <CustomCheckbox :is-label="true" label="Insurance" />
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
