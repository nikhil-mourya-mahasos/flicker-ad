<!-- src/components/NotFound.vue -->
<template>
  <div class="p-2 bg-white">
    <nav class="p-4">
      <div class="grid grid-cols-10 gap-4">
        <div class="md:col-span-1 col-span-2">
          <div class="center">
            <img
              :src="profilePicture"
              class="w-12 h-12 md:w-12 md:h-12 rounded-full object-cover"
            />
          </div>
        </div>
        <div class="md:col-span-8 col-span-7 text-xs md:text-sm">
          <div>
            <h3>
              <b>{{ userName }}</b> {{ title }}
            </h3>
            <!-- <h3>Paresetnt ultricies lacus in ligula volutpta feugiat.</h3> -->
          </div>
          <p class="text-gray-400 my-2 text-xs">{{ timeStamp }}</p>
        </div>
        <div class="md:col-span-1 col-span-1 flex flex-col gap-2 justify-around">
          <div class="center">
            <div class="new h-2 w-2 md:h-4 md:w-4 rounded-full"></div>
          </div>

          <div class="center cursor-pointer">
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  profilePicture: {
    type: String,
    default: "",
  },
  userName: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  timeStamp: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.new {
  background: #008080;
  opacity: 0.5;
}
</style>
