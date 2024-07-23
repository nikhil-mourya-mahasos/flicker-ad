<template>
  <section class="bg-white md:my-5 my-2 md:p-5 p-3 rounded-md shadow-md">
    <div class="">
      <div class="">
        <!-- <div class="error" v-if="!$v.formData.category.required">
            Category is required
          </div> -->
      </div>
      <div class="fp-card fp-sm-no-card mt-4" v-if="sub_categories.length">
        <h2 class="md:my-3 my-1 md:text-2xl text-sm font-bold">
          Select your category<span class="rule">(Optional)</span>
        </h2>
        <p class="text-sm text-primary">(* If no category is applicable, select NEXT)</p>
        <div class="my-3 flex flex-wrap justify-center gap-5">
          <div
            class="border rounded-lg md:p-4 p-2 cursor-pointer text-sm md:text-base"
            :class="{
              active: formData.sub_category_id == item.id,
            }"
            v-for="(item, index) in sub_categories"
            :key="index"
            @click="selectSubCategory(item)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
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
// const selected_category = ref({ id: 2 });
const selected_sub_category = ref(null);
const sub_categories = ref([
  { id: 1, title: "Commercial" },
  { id: 2, title: "Lands" },
  { id: 3, title: "Offices" },
  { id: 4, title: "Accomodation" },
  { id: 5, title: "Multi Family" },
  { id: 6, title: "Legal/Lawyers" },
  { id: 7, title: "Skilled Trades" },
  { id: 8, title: "Rent / Lease" },
  { id: 9, title: "Training/Lessons" },
  { id: 10, title: "Pets" },
  { id: 11, title: "Gigs Freelancer" },
  { id: 12, title: "Community" },
]);

const selectSubCategory = (item) => {
  if (selected_sub_category.value && item && selected_sub_category.value.id == item.id) {
    selected_sub_category.value = null;
  } else {
    selected_sub_category.value = item;
  }
};
</script>
<style lang="scss" scoped>
.form-wizard-vue .fw-footer {
  display: block;
}
</style>
