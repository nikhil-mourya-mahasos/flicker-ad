<template>
  <section class="bg-white md:p-5 p-2 rounded-md shadow-md">
    <div class="md:mx-8 mx-4 grid grid-cols-1 md:grid-cols-2">
      <div class="col-span-2 md:col-span-1 rounded-lg md:pr-4 mb-4">
        <div
          class="overflow-hidden text-xs md:text-sm border border-1 p-3 rounded-lg text-left w-full bg-gray-50"
        >
          <h3 class="my-2 font-bold">Subject : Test</h3>
          <h3 class="my-2 font-bold">Category : Services</h3>
          <h3 class="my-2 font-bold">Location : San Diego,CA,US</h3>
          <div class="w-full my-4 flex flex-col lg:flex-row justify-start gap-5">
            <div class="flex justify-start md:justify-normal md:items-end">
              <DynamicInput
                :placeholder="'ex. ASVA12'"
                :name="'coupon-code'"
                v-model="formData.address"
                :isLabel="true"
                :isRequired="true"
                :label="'Coupon Code'"
                :labelPosition="'top'"
                :isPrefixIcon="false"
              />
            </div>
            <div class="flex justify-start lg:justify-normal md:items-end">
              <button class="text-white primary-bg rounded-xl p-1 px-2 md:p-2 md:px-4">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-span-2 md:col-span-1 md:pl-4 md:border-l-2 border-t-2 md:border-t-0 pt-4"
      >
        <div class="bg-gray-50 p-3 rounded-lg">
          <div class="border-b-2 border-black w-full my-3">
            <h3 class="font-lg font-bold text-left">Payment Details</h3>
          </div>
          <div class="grid grid-cols-2 gap-5 my-4">
            <div class="">
              <DynamicInput
                :placeholder="'2873723'"
                :name="'Name on Card'"
                :isLabel="true"
                :isRequired="true"
                :label="'Name on Card'"
                :labelPosition="'top'"
                :isPrefixIcon="false"
              />
            </div>
            <div class="">
              <DynamicInput
                :placeholder="'2873723'"
                :name="'Card-Number'"
                :isLabel="true"
                :isRequired="true"
                :label="'Card Number'"
                :labelPosition="'top'"
                :isPrefixIcon="false"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5 my-4">
            <div class="">
              <DynamicInput
                :placeholder="'Enter CVC'"
                :name="'cvc'"
                :isLabel="true"
                :isRequired="true"
                :label="'CVC'"
                :labelPosition="'top'"
                :isPrefixIcon="false"
              />
            </div>
            <div class="">
              <DynamicInput
                :placeholder="'MM/YY'"
                :name="'expiration-date'"
                :isLabel="true"
                :isRequired="true"
                :label="'Expiration Date'"
                :labelPosition="'top'"
                :isPrefixIcon="false"
              />
            </div>
          </div>
          <div class="flex flex-start gap-10 my-4">
            <div class="">
              <button class="text-white primary-bg rounded-xl p-2 px-4">
                Pay Now($10)
              </button>
            </div>
          </div>
          <div class="text-left text-xs font-bold">
            All transactions are SSL(Secure Socket Layer) protected. Your information is
            securely transmitted during the processing of all payments with AES-256.
            Please check
            <span class="text-primary"
              ><a href="#">https://www.stripe.com/doc/security/stripe</a></span
            >
            for more details.
          </div>
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
