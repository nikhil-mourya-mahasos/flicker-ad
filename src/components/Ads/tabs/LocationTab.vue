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
        <GoogleMap :zipcode="'91945'"/>
      </div>
    </div>
  </section>
</template>
<script setup>
import DynamicInput from "@/components/DynamicInput.vue";
import GoogleMap from "@/components/GoogleMap.vue";

import { ref } from "vue";

const formData = ref({
  
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

});
</script>
<style lang="scss" scoped></style>
