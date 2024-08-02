<template>
  <section class="bg-white md:p-5 p-2 rounded-md shadow-md">
    <div class="md:mx-8 mx-4 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="col-span-2 md:col-span-1">
        <h3 class="font-lg font-bold text-left my-3">Choose Post Location</h3>
        <div class="border border-1 p-3 rounded-lg">
          <div class="my-4">
            <DynamicInput
              :placeholder="'Enter Street Address (optional)'"
              :name="'Title'"
              v-model="formData.address"
              :isLabel="true"
              :isRequired="true"
              :label="'Address'"
              :labelPosition="'top'"
              :isPrefixIcon="false"
            />
          </div>
          <div class="grid grid-cols-2 gap-5">
            <div class="">
              <DynamicInput
                :placeholder="'2873723'"
                :name="'Title'"
                :isLabel="true"
                :isRequired="true"
                :label="'Zip Code'"
                :labelPosition="'top'"
                :isPrefixIcon="false"
              />
            </div>
            <div class="">
              <DynamicInput
                :placeholder="'2873723'"
                :name="'City'"
                :isLabel="true"
                :isRequired="true"
                :label="'City'"
                :labelPosition="'top'"
                :isPrefixIcon="false"
              />
            </div>
          </div>
          <div class="my-4">
            <DynamicInput
              :placeholder="'California'"
              :name="'Title'"
              :isLabel="true"
              :isRequired="true"
              :label="'State'"
              :labelPosition="'top'"
              :isPrefixIcon="false"
            />
          </div>
          <!-- <div class="my-4">
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
        </div> -->
        </div>
      </div>
      <div class="col-span-2 md:col-span-1">
        <h3 class="font-lg font-bold text-left my-3">Post Contact Details</h3>
        <div class="border border-1 p-3 rounded-lg">
          <div class="my-4">
            <DynamicInput
              :placeholder="'Enter email'"
              :name="'Title'"
              v-model="formData.contact_email"
              :isLabel="true"
              :isRequired="true"
              :label="'Email'"
              :labelPosition="'top'"
              :isPrefixIcon="false"
            />
          </div>
          <div class="my-4">
            <DynamicInput
              :placeholder="'Phone (Optional)'"
              :name="'Title'"
              :isLabel="true"
              :isRequired="true"
              :label="'Phone'"
              :labelPosition="'top'"
              :isPrefixIcon="false"
            />
          </div>
          <div class="my-4">
            <DynamicInput
              :placeholder="'Any Web Link (Optional)'"
              :name="'City'"
              :isLabel="true"
              :isRequired="true"
              :label="'Web Link'"
              :labelPosition="'top'"
              :isPrefixIcon="false"
            />
          </div>
          <div class="flex justify-between my-4">
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
                >Chat</label
              >
            </div>
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
                >No Reply to this post</label
              >
            </div>
          </div>
          <!-- <div class="my-4">
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
        </div> -->
        </div>
      </div>
      <div class="col-span-2 p-2 border border-1 rounded-lg">
        <GoogleMap :zipcode="''"/>
      </div>
    </div>
  </section>
</template>
<script setup>
import DynamicInput from "@/components/DynamicInput.vue";
import GoogleMap from "@/components/GoogleMap.vue";

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
