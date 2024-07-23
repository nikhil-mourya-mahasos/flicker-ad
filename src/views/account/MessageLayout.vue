<!-- src/components/NotFound.vue -->
<template>
  <section class="bg-[#f9f9f9] shadow lg:m-24 lg:mx-40 md:m-12 m-5 pb-32">
    <div
      class="my-3 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
    >
      <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >All Message</a
          >
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-2 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
            aria-current="page"
            >Archived</a
          >
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >Bin</a
          >
        </li>
      </ul>
    </div>
    <section class="sm:grid sm:grid-cols-10 flex flex-col gap-5 overflow-hidden">
      <section class="md:col-span-3 lg:col-span-2 col-span-4 bg-white rounded-2xl">
        <!-- <MenuList /> -->
      </section>
      <section class="md:col-span-7 lg:col-span-8 col-span-6 bg-white rounded-2xl">
        <div class="lg:p-5 p-2">
          <router-view v-slot="{ Component }">
            <transition>
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </section>
    </section>
  </section>
</template>

<script setup>
//import MenuList from "./MenuList.vue";
// import { defineProps } from "vue";
// defineProps({});
</script>

<style scoped>
/* .new {
    background: #008080;
    opacity: 0.5;
  } */
/*
    Enter and leave animations can use different
    durations and timing functions.
  */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
