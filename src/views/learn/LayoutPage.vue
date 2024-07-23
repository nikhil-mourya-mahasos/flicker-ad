<!-- src/components/NotFound.vue -->
<template>
  <section
    class="lg:m-16 md:m-12 m-5 pb-32 sm:grid sm:grid-cols-10 flex flex-col gap-5 overflow-hidden"
  >
    <section class="md:col-span-3 lg:col-span-2 col-span-4 bg-white rounded-2xl">
      <MenuList />
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
</template>

<script setup>
import MenuList from "./MenuList.vue";
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
