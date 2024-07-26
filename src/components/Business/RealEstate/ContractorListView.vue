<!-- src/components/ContractorListCard.vue -->
<template>
  <div class="bg-white flex flex-col md:flex-row border-teal-400 border rounded-lg p-4">
    <div class="md:w-1/4">
      <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
        alt="Contractor Image" class="w-full h-auto rounded-lg">
    </div>
    <div class="mt-4 md:mt-0 pl-4 text-black grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      <div class="lg:col-span-1">
        <div class="text-left">
          <h2 class="text-sm md:text-md font-semibold">Peak Builder & Roofers of San Diego</h2>
          <div class="flex items-center">
            <div class="flex justify-start items-center">
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
                <span class="text-yellow-500 text-md font-medium">5.0</span>

                <span class="text-gray-600 text-sm ml-1">(6 reviews)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-sm mt-2 font-bold text-black">
          <div class="flex justify-start gap-2 ">
            <div class="center"><svg width="12" height="12" viewBox="0 0 17 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.50313 13.0167L0.328125 7.84165L2.68646 5.48332L5.50313 8.30832L13.7365 0.0666504L16.0948 2.42498L5.50313 13.0167Z"
                  fill="black" />
              </svg>
            </div>
            <p class=" whitespace-nowrap text-xs">Licensed</p>
          </div>
          <p class="flex items-center mt-1">
            <span class="ml-2 text-xs">Serves in: CA, AZ, OR, WA, PA</span>
          </p>
        </div>
        <div class="mt-4 ">
          <ContactLayout />
        </div>
      </div>

      <div class="text-left md:border-l-2 lg:border-r-2 md:px-4 lg:col-span-1">
        <div class="mb-2">
          <h3 class="text-sm font-semibold my-1">Working Hours</h3>
          <p class="text-xs text-gray-600">Monday - Friday: 7:30 AM - 5:00 PM</p>
          <p class="text-xs text-gray-600">Saturday - Sunday: Closed</p>
        </div>
        <div class=" ">
          <h3 class="text-sm font-semibold my-1">Office Location</h3>
          <p class="text-gray-600 text-xs">2901 West Coast Highway, Newport Beach, CA</p>
        </div>
      </div>
      <div class="flex mt-4 lg:flex-col flex-row flex-wrap gap-2 text-sm lg:col-span-1 md:col-span-2">
        <div class="flex justify-start gap-2 items-center flex-wrap" v-for="item in 5" :key="item">
          <div class="center"><svg width="17" height="14" viewBox="0 0 17 14" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.50313 13.0167L0.328125 7.84168L2.68646 5.48335L5.50313 8.30835L13.7365 0.0666809L16.0948 2.42501L5.50313 13.0167Z"
                fill="#008080" />
            </svg>
          </div>
          <p class=" whitespace-nowrap text-teal-400">Accessory Buildings {{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactLayout from '../ContactLayout.vue';

export default {
  name: 'ContractorListCard',
  components:{
    ContactLayout
  }
}
</script>

<style scoped>
.material-icons {
  font-size: 20px;
}
</style>