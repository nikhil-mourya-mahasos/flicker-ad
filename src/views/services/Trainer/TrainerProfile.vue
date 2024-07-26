<script setup>
import { ref } from "vue";
// import DynamicInput from "@/components/DynamicInput.vue";
import PicturesCollage from "@/components/PicturesCollage.vue"
import JoinCourseCard from "@/components/Business/Trainer/JoinCourseCard.vue";
import CourseFeeCard from "@/components/Business/Trainer/CourseFeeCard.vue";
import ReviewCard from "@/components/Business/Trainer/ReviewCard.vue";
import TrainerCard from "@/components/Business/Trainer/TrainerCard.vue";
import AboutUs from "@/components/Business/Trainer/AboutUs.vue";
import ContactLayout from "@/components/Business/ContactLayout.vue";




const imgList = [
  "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
  "https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg",
  "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
  "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
  "https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg",
  "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
  "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
]

const tabs = ["About Us", "Trainer/Tutors", "Courses & Fee", "Reviews"];
let activeTabIndex = ref(2);

const toggleTab = (index) => {
  activeTabIndex.value = index;
}
</script>
<template>
  <section class="lg:mx-14 md:mx-8 m-5 mb-10 p-5 rounded-lg bg">
    <section class="grid md:grid-cols-7 gap-4">
      <div class="md:col-span-4">
        <PicturesCollage :img-list="imgList" />
      </div>
      <div class="md:col-span-3">
        <div>
          <div class="text-left">
            <h2 class="text-md font-semibold">Peak Builder & Roofers of San Diego</h2>
            <div class="flex items-center">
              <div class="flex justify-start items-center">
                <div class="mx-2">
                  <span class="text-yellow-500 text-md font-medium">5.0</span>
                </div>
                <div class="flex gap-1">
                  <div v-for="item in 5" :key="item">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                        fill="#FB9938" />
                    </svg>
                  </div>
                </div>
                <div class="mx-2">
                  <span class="text-gray-600 text-sm ml-1">(6)</span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 p-3 text-sm my-3 border rounded-lg">
            <div class="flex justify-start gap-2 ">
              <div class="center"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.99906 20.42L2.78906 14.21L5.61906 11.38L8.99906 14.77L18.8791 4.88L21.7091 7.71L8.99906 20.42Z"
                    fill="#008080" />
                </svg>
              </div>
              <p class=" whitespace-nowrap">Free Consultation</p>
            </div>
            <div class="flex justify-start gap-2 ">
              <div class="center"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.99906 20.42L2.78906 14.21L5.61906 11.38L8.99906 14.77L18.8791 4.88L21.7091 7.71L8.99906 20.42Z"
                    fill="#008080" />
                </svg>
              </div>
              <p class=" whitespace-nowrap">Virtual Consultation</p>
            </div>
            <div class="flex justify-start gap-2 ">
              <div class="center"><svg width="13" height="13" viewBox="0 0 18 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.95 18C14.8667 18 12.8083 17.546 10.775 16.638C8.74167 15.73 6.89167 14.4423 5.225 12.775C3.55833 11.1077 2.271 9.25767 1.363 7.225C0.455 5.19233 0.000666667 3.134 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0793332 5.725 0.238C5.90833 0.396667 6.01667 0.584 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.704 9.11233 5.162 9.687C5.62 10.2617 6.12433 10.816 6.675 11.35C7.19167 11.8667 7.73333 12.346 8.3 12.788C8.86667 13.23 9.46667 13.634 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1377 17.775 12.313C17.925 12.4883 18 12.684 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                    fill="#008080" />
                </svg>

              </div>
              <p class=" whitespace-nowrap">24/7 on Call Service</p>
            </div>
            <div class="flex justify-start gap-2 ">
              <div class="center"><svg width="15" height="15" viewBox="0 0 10 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 12H2C2 13.08 3.37 14 5 14C6.63 14 8 13.08 8 12C8 10.9 6.96 10.5 4.76 9.97C2.64 9.44 0 8.78 0 6C0 4.21 1.47 2.69 3.5 2.18V0H6.5V2.18C8.53 2.69 10 4.21 10 6H8C8 4.92 6.63 4 5 4C3.37 4 2 4.92 2 6C2 7.1 3.04 7.5 5.24 8.03C7.36 8.56 10 9.22 10 12C10 13.79 8.53 15.31 6.5 15.82V18H3.5V15.82C1.47 15.31 0 13.79 0 12Z"
                    fill="#008080" />
                </svg>
              </div>
              <p class=" whitespace-nowrap">80/hr</p>
            </div>
          </div>
          <!-- <div class="text-sm mt-2 font-bold text-black text-left">
            <div class="flex justify-start gap-2 ">
              <div class="center"><svg width="12" height="12" viewBox="0 0 17 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.50313 13.0167L0.328125 7.84165L2.68646 5.48332L5.50313 8.30832L13.7365 0.0666504L16.0948 2.42498L5.50313 13.0167Z"
                    fill="black" />
                </svg>
              </div>
              <p class=" whitespace-nowrap">Licensed<span class="text-gray-400"> (#234235235)</span></p>

            </div>
            <p class="px-4 whitespace-nowrap font-semibold my-2"><span class="text-gray-400">CA State Class B General
                Building Contractor
                License</span></p>

          </div> -->

        </div>

        <div class="text-left px-4">
          <div class="mb-2">
            <h3 class="text-sm font-semibold my-1">Training Hours</h3>
            <p class="text-xs text-gray-600">Monday - Friday: 7:30 AM - 5:00 PM</p>
            <p class="text-xs text-gray-600">Saturday - Sunday: Closed</p>
          </div>
          <div class=" ">
            <h3 class="text-sm font-semibold my-1">Location</h3>
            <p class="text-gray-600 text-xs">2901 West Coast Highway, Newport Beach, CA</p>
          </div>
        </div>
        <div class="mt-4 ">
          <ContactLayout />
        </div>

      </div>
    </section>
    <section class="flex flex-col-reverse md:grid md:grid-cols-9 gap-4 my-3">
      <div class="col-span-5 text-left">
        <section>
          <div
            class="text-sm text-center text-black font-bold border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
              <li class="m-1 md:me-2" v-for="item, index in tabs" :key="index">
                <span @click="toggleTab(index)"
                  :class="activeTabIndex === index ? 'text-teal-400 border-teal-400 border-b-2' : 'text-black'"
                  class="text-xs md:text-base inline-block p-1 md:p-2 cursor-pointer  rounded-t-lg  hover:border-teal-400 ">{{
                  item }}</span>
              </li>
            </ul>
          </div>

        </section>
        <section class="mt-3">
          <div v-if="activeTabIndex == 1" class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <TrainerCard v-for="item in 5" :key="item" :full-name="'John Doe'"
              :img="'https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg'" />
          </div>
          <AboutUs v-if="activeTabIndex == 0" />
          <CourseFeeCard v-if="activeTabIndex == 2" />
          <div v-if="activeTabIndex == 3" class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ReviewCard v-for="item in 5" :key="item" :full-name="'John Doe'"
              :img="'https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg'" />
          </div>
        </section>
      </div>
      <div class="col-span-4">
        <JoinCourseCard :title="'Spring Boot Full Stack Course Online Starting Soon'" :fees="'2344'" :duration="'2'"
          :img="'https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg'" />
      </div>
    </section>
  </section>
</template>
<style>
.bg {
  background-color: #ffffff;
}
</style>
