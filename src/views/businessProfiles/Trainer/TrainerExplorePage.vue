<script setup>
import { ref } from "vue";
import ContractorCard from '@/components/Business/RealEstate/ContractorCardView.vue';
import ContractorListView from "@/components/Business/RealEstate/ContractorListView.vue";
import SubCategory from "@/components/SubCategory.vue";

const businesses = [
  {
    name: "Peaky Builders & Rooftop of San Diego",
    rating: 5.0,
    reviews: 6,
    services: [
      "Accessory buildings",
      "Decks & Patio",
      "Bathroom & Kitchen Remodel",
      "Commercial Remodel"
    ],
    contactOptions: ["Call", "Email", "Message"]
  },
  {
    name: "Sunset Builders & Design of San Diego",
    rating: 4.8,
    reviews: 12,
    services: [
      "Accessory buildings",
      "Decks & Patio",
      "Garage Remodel",
      "Commercial Remodel"
    ],
    contactOptions: ["Call", "Email", "Message"]
  },
  {
    name: "Coastal Builders & Rooftop of San Diego",
    rating: 4.9,
    reviews: 9,
    services: [
      "Accessory buildings",
      "Decks & Patio",
      "Bathroom & Kitchen Remodel",
      "Commercial Remodel"
    ],
    contactOptions: ["Call", "Email", "Message"]
  },
  {
    name: "Skyline Builders & Design of San Diego",
    rating: 4.7,
    reviews: 15,
    services: [
      "Accessory buildings",
      "Decks & Patio",
      "Garage Remodel",
      "Commercial Remodel"
    ],
    contactOptions: ["Call", "Email", "Message"]
  },
  {
    name: "Peak Performance Builders of San Diego",
    rating: 4.6,
    reviews: 8,
    services: [
      "Accessory buildings",
      "Decks & Patio",
      "Bathroom & Kitchen Remodel",
      "Commercial Remodel"
    ],
    contactOptions: ["Call", "Email", "Message"]
  },
  {
    name: "Horizon Builders & Rooftop of San Diego",
    rating: 5.0,
    reviews: 11,
    services: [
      "Accessory buildings",
      "Decks & Patio",
      "Garage Remodel",
      "Commercial Remodel"
    ],
    contactOptions: ["Call", "Email", "Message"]
  },
  {
    name: "Elite Builders & Design of San Diego",
    rating: 4.9,
    reviews: 13,
    services: [
      "Accessory buildings",
      "Decks & Patio",
      "Bathroom & Kitchen Remodel",
      "Commercial Remodel"
    ],
    contactOptions: ["Call", "Email", "Message"]
  },
  {
    name: "Top Notch Builders of San Diego",
    rating: 4.8,
    reviews: 10,
    services: [
      "Accessory buildings",
      "Decks & Patio",
      "Garage Remodel",
      "Commercial Remodel"
    ],
    contactOptions: ["Call", "Email", "Message"]
  },
  {
    name: "Premium Builders & Rooftop of San Diego",
    rating: 4.7,
    reviews: 14,
    services: [
      "Accessory buildings",
      "Decks & Patio",
      "Bathroom & Kitchen Remodel",
      "Commercial Remodel"
    ],
    contactOptions: ["Call", "Email", "Message"]
  },
  {
    name: "First Class Builders of San Diego",
    rating: 5.0,
    reviews: 7,
    services: [
      "Accessory buildings",
      "Decks & Patio",
      "Garage Remodel",
      "Commercial Remodel"
    ],
    contactOptions: ["Call", "Email", "Message"]
  }
];

const isGridActiveLayout = ref(false);

const toggleLayout = () => {
  isGridActiveLayout.value = !isGridActiveLayout.value;
  console.log(isGridActiveLayout.value)
}

const list = ref([
  { name: "All" },
  { name: "General Contractor" },
  { name: "Electrical Contractor" },
  { name: "Fire Alarm Sprinkler " },
  { name: "Floor & Sparking" },
  { name: "Finisjh Carpentery" },
  { name: "Glass & Window" },
  { name: "Home Garden" },
  { name: "Jobs" },
  { name: "Accomedation" },
])
</script>
<template>
  <section class="px-3 md:px-10">
    <section class="my-5">
      <SubCategory :list="list" />
    </section>
    <section class="flex justify-start gap-10 my-4">
      <div class="center">
        <h3 class="font-bold text-lg">All Contractors</h3>
      </div>
      <div><input placeholder="ex. search contractor" class="p-2 px-4 bg-transparent border-black border rounded-lg" />
      </div>
      <div class="flex-grow flex justify-end gap-5">
        <div @click="toggleLayout"
          class="center cursor-pointer rounded-full md:p-3 hover:scale-105 transition-all duration-150"
          :class="isGridActiveLayout ? 'bg-teal-400' : ''">
          <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1H10.375V10.375H1V1ZM16.625 1H26V10.375H16.625V1ZM1 16.625H10.375V26H1V16.625ZM16.625 21.3125C16.625 22.5557 17.1189 23.748 17.9979 24.6271C18.877 25.5061 20.0693 26 21.3125 26C22.5557 26 23.748 25.5061 24.6271 24.6271C25.5061 23.748 26 22.5557 26 21.3125C26 20.0693 25.5061 18.877 24.6271 17.9979C23.748 17.1189 22.5557 16.625 21.3125 16.625C20.0693 16.625 18.877 17.1189 17.9979 17.9979C17.1189 18.877 16.625 20.0693 16.625 21.3125Z"
              stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div @click="toggleLayout"
          class="center cursor-pointer rounded-full md:p-3 hover:scale-105 transition-all duration-150"
          :class="isGridActiveLayout ? '' : 'bg-teal-400'"><svg width="20" height="20" viewBox="0 0 25 25" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.72222 2.67857H25V4.46429H9.72222V2.67857ZM0 3.57143C0 4.27779 0.217219 4.96829 0.624187 5.55561C1.03115 6.14293 1.60959 6.60069 2.28636 6.871C2.96312 7.14131 3.70781 7.21204 4.42626 7.07423C5.14471 6.93643 5.80465 6.59628 6.32262 6.09681C6.84059 5.59734 7.19333 4.96097 7.33624 4.26818C7.47915 3.57539 7.4058 2.8573 7.12548 2.2047C6.84516 1.55211 6.37044 0.994328 5.76137 0.601894C5.1523 0.209461 4.43623 0 3.7037 0C2.72176 0.00106344 1.78035 0.377679 1.08601 1.04722C0.391667 1.71676 0.00110283 2.62455 0 3.57143ZM3.7037 1.78571C4.06997 1.78571 4.428 1.89044 4.73254 2.08666C5.03707 2.28288 5.27443 2.56177 5.41459 2.88807C5.55475 3.21436 5.59143 3.57341 5.51997 3.9198C5.44852 4.2662 5.27215 4.58438 5.01316 4.83412C4.75417 5.08386 4.42421 5.25393 4.06498 5.32283C3.70576 5.39173 3.33341 5.35637 2.99503 5.22121C2.65665 5.08606 2.36743 4.85718 2.16395 4.56352C1.96046 4.26986 1.85185 3.92461 1.85185 3.57143C1.8524 3.09799 2.04769 2.6441 2.39486 2.30933C2.74203 1.97455 3.21273 1.78625 3.7037 1.78571ZM9.72222 11.6071H25V13.3929H9.72222V11.6071ZM3.7037 16.0714C4.43623 16.0714 5.1523 15.862 5.76137 15.4695C6.37044 15.0771 6.84516 14.5193 7.12548 13.8667C7.4058 13.2141 7.47915 12.496 7.33624 11.8032C7.19333 11.1105 6.84059 10.4741 6.32262 9.97462C5.80465 9.47514 5.14471 9.135 4.42626 8.9972C3.70781 8.85939 2.96312 8.93012 2.28636 9.20043C1.60959 9.47074 1.03115 9.9285 0.624187 10.5158C0.217219 11.1031 0 11.7936 0 12.5C0.00110283 13.4469 0.391667 14.3547 1.08601 15.0242C1.78035 15.6937 2.72176 16.0704 3.7037 16.0714ZM3.7037 10.7143C4.06997 10.7143 4.428 10.819 4.73254 11.0152C5.03707 11.2114 5.27443 11.4903 5.41459 11.8166C5.55475 12.1429 5.59143 12.502 5.51997 12.8484C5.44852 13.1948 5.27215 13.513 5.01316 13.7627C4.75417 14.0124 4.42421 14.1825 4.06498 14.2514C3.70576 14.3203 3.33341 14.2849 2.99503 14.1498C2.65665 14.0146 2.36743 13.7857 2.16395 13.4921C1.96046 13.1984 1.85185 12.8532 1.85185 12.5C1.8524 12.0266 2.04769 11.5727 2.39486 11.2379C2.74203 10.9031 3.21273 10.7148 3.7037 10.7143ZM9.72222 20.5357H25V22.3214H9.72222V20.5357ZM3.7037 25C4.43623 25 5.1523 24.7905 5.76137 24.3981C6.37044 24.0057 6.84516 23.4479 7.12548 22.7953C7.4058 22.1427 7.47915 21.4246 7.33624 20.7318C7.19333 20.039 6.84059 19.4027 6.32262 18.9032C5.80465 18.4037 5.14471 18.0636 4.42626 17.9258C3.70781 17.788 2.96312 17.8587 2.28636 18.129C1.60959 18.3993 1.03115 18.8571 0.624187 19.4444C0.217219 20.0317 0 20.7222 0 21.4286C0.00110283 22.3754 0.391667 23.2832 1.08601 23.9528C1.78035 24.6223 2.72176 24.9989 3.7037 25ZM3.7037 19.6429C4.06997 19.6429 4.428 19.7476 4.73254 19.9438C5.03707 20.14 5.27443 20.4189 5.41459 20.7452C5.55475 21.0715 5.59143 21.4306 5.51997 21.7769C5.44852 22.1233 5.27215 22.4415 5.01316 22.6913C4.75417 22.941 4.42421 23.1111 4.06498 23.18C3.70576 23.2489 3.33341 23.2135 2.99503 23.0784C2.65665 22.9432 2.36743 22.7143 2.16395 22.4207C1.96046 22.127 1.85185 21.7818 1.85185 21.4286C1.8524 20.9551 2.04769 20.5012 2.39486 20.1665C2.74203 19.8317 3.21273 19.6434 3.7037 19.6429Z"
              fill="black" />
          </svg>
        </div>
        <form class="">
          <select id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>All States</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
        <form class="">
          <select id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Newest first</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
      </div>
    </section>
    <section class="">
      <div v-if="isGridActiveLayout" class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        <ContractorCard v-for="(item, index) in businesses" :key="index" :name="item.name" :services="item.services" />
      </div>
      <div v-else class="grid grid-cols-1 gap-5 grid-flow-row">
        <ContractorListView v-for="(item, index) in businesses" :key="index" :name="item.name"
          :services="item.services" />
      </div>


    </section>
  </section>
</template>
