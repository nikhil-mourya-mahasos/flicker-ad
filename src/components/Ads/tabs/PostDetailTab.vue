<template>
  <section class="bg-white p-5 rounded-md shadow-md">
    <div class="md:mx-8 mx-0">
      <div class="">
        <div class="my-4">
          <DynamicInput
            :placeholder="'Enter Post Subject or Title'"
            :name="'Title'"
            :isLabel="true"
            :isRequired="true"
            :label="'Enter Title'"
            :labelPosition="'top'"
            :isPrefixIcon="false"
          />
        </div>
        <div class="my-4">
          <DynamicInput
            :placeholder="'Enter Description'"
            v-model="formData.description"
            :isLabel="true"
            :label="'Description'"
            :name="'description'"
            :labelPosition="'top'"
            :textAreaRows="5"
            :type="'textarea'"
            :isPrefixIcon="false"
          />
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
  contact_email: "",
  contact_phone_number: "",
  contact_weblink: "",
  enable_chat: true,
  no_reply_to_this_post: false,
  location: {
    country: "",
    city: "",
    state: "",
    county: "",
    zipcode: "",
    address: "",
    full_address: "",
    latitude: "",
    longitude: "",
  },
  address: "",
  full_address: "",
  zipcode: "",
  city: "",
  state: "",

  service_provider: "",
  services: [],
  locations: [],
  business_hours: "",
  realtor: "",
  license: "",
  rent_lease_item: "",
  rent_lease_cost: "",
  rent_lease_term: "",
  trainer_institute: "",
  training_fee: "",
  training_courses: [],
  training_modes: [],
  sale_by: "",
  condition: "",
  cost: "",
  model: "",
  manufacturer: "",
  job_title: "",
  client_recruiter: "",
  employement_types: [],
  compensation: "",
  interview_mode: "",
  remote_work_from_home: "",
  benefits: [],
  work_authorizations: [],
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
  automotive_make_manufacturer: "",
  automotive_model: "",
  automotive_year: "",
  automotive_color: "",
  breed_species_type: "",
  pet_age: "",
  pet_color: "",
  pet_sex: "",
  pet_size_weight: "",
  pet_characteristics: "",

  business_location: {
    country: "",
    city: "",
    state: "",
    county: "",
    zipcode: "",
    address: "",
    full_address: "",
    latitude: "",
    longitude: "",
  },
  business_address: "",
  business_full_address: "",
  business_zipcode: "",
  business_city: "",
  business_state: "",

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
<style lang="scss" scoped></style>
