<template>
  <section>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-xl font-bold my-2">(if Real Estate) Property Details</h3>
      <div class="grid grid-cols-2 gap-10 border-2 rounded-lg p-5">
        <div class="">
          <DynamicInput :placeholder="'Ex. Apartment or Commercial land'" :name="'Title'" :isLabel="true"
            v-model="formData.house_type" :isRequired="true" :label="'Property Details'" :labelPosition="'top'"
            :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'Ex. 5400'" v-model="formData.bed_rooms" :isLabel="true"
            :label="'Property Area Size'" :name="'bed_rooms'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'Ex. 5400'" v-model="formData.bed_rooms" :isLabel="true"
            :label="'Estimated/Selling Price'" :name="'bed_rooms'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
      </div>
    </div>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-xl font-bold my-2">Additional Info</h3>
      <div class="grid grid-cols-2 gap-10 border-2 rounded-lg p-5">
        <div class="">
          <DynamicInput :placeholder="'Ex. Apartment or Commercial land'" :name="'Title'" :isLabel="true"
            v-model="formData.house_type" :isRequired="true" :label="'Nearby Place'" :labelPosition="'top'"
            :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'Ex. 5400'" v-model="formData.bed_rooms" :isLabel="true"
            :label="'Property Amenities'" :name="'bed_rooms'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
      </div>
    </div>
    <div class="p-8 mx-16 text-left">
      <h3 class="text-xl font-bold my-2">Realtor Details</h3>
      <div class="grid grid-cols-2 gap-10 border-2 rounded-lg p-5">
        <div class="">
          <DynamicInput :placeholder="'Ex. Apartment or Commercial land'" :name="'Title'" :isLabel="true"
            v-model="formData.house_type" :isRequired="true" :label="'Realtor Name'" :labelPosition="'top'"
            :isPrefixIcon="false" />
        </div>
        <div class="">
          <DynamicInput :placeholder="'Ex. XXX-DKS-XXX'" v-model="formData.bed_rooms" :isLabel="true" :label="'License'"
            :name="'bed_rooms'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="col-span-2">
          <h3 class="text-xl font-bold my-2">Business Location</h3>
          <div class="grid grid-cols-3 gap-10 border-2 rounded-lg p-5">
            <div class="col-span-3">
              <DynamicInput :placeholder="'Ex. Apartment or Commercial land'" :name="'Title'" :isLabel="true"
                v-model="formData.house_type" :isRequired="true" :label="'Street Address'" :labelPosition="'top'"
                :isPrefixIcon="false" />
            </div>
            <div class="">
              <DynamicInput :placeholder="'zip code'" v-model="formData.bed_rooms" :isLabel="true" :label="'Zip Code'"
                :name="'zip-code'" :labelPosition="'top'" :isPrefixIcon="false" />
            </div>
            <div class="">
              <DynamicInput :placeholder="'city'" v-model="formData.bed_rooms" :isLabel="true" :label="'City'"
                :name="'city'" :labelPosition="'top'" :isPrefixIcon="false" />
            </div>
            <div class="">
              <DynamicInput :placeholder="'state'" v-model="formData.bed_rooms" :isLabel="true" :label="'State'"
                :name="'state'" :labelPosition="'top'" :isPrefixIcon="false" />
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <DynamicInput :placeholder="'Dropdowns'" v-model="formData.bed_rooms" :isLabel="true" :label="'Services Provides In'"
            :name="'state'" :labelPosition="'top'" :isPrefixIcon="false" />
        </div>
        <div class="col-span-2">
          <DynamicInput :placeholder="'enter business hours'" v-model="formData.bed_rooms" :isLabel="true" :type="'textarea'"
          :label="'Hours of Operations'" :name="'state'" :labelPosition="'top'" :isPrefixIcon="false" />
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
