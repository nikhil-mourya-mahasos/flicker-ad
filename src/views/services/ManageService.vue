<template>
  <section class="w-full lg:p-10 md:p-6 p-5">
    {{ activeComponent }}
    <!-- <component :is="activeComponent"></component> -->
    <!-- <LawyerExplorePage /> -->
    <RealEstateExplorePage />
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue";
// import LawyerExplorePage from "./lawyer/LawyerExplorePage.vue";
import RealEstateExplorePage from "./RealEstate/RealEstateExplorePage.vue";
// import router from "@/router";
import { useRoute } from "vue-router";
const route = useRoute();
let activeComponent = "";

const params = ref("");
onMounted(() => {
  params.value = route.params.id;
  console.log(route.params.id);
  switch (params.value) {
    case "lawyer": {
      activeComponent = "LawyerExplorePage";
      console.log("lawyer");
      break;
    }
  }
});
</script>
