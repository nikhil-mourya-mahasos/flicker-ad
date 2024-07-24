<template>
  <section class="w-full lg:p-10 md:p-6 p-5">
    <component :is="activeComponent"></component>
  </section>
</template>
<script>
import LawyerExplorePage from "./lawyer/LawyerExplorePage.vue";
import RealEstateExplorePage from "./RealEstate/RealEstateExplorePage.vue";

export default {
  name: "ManageService",
  components: {
    LawyerExplorePage,
    RealEstateExplorePage
  },
  data() {
    return {
      activeComponent: ""
    }
  },
  created() {
    switch (this.$route.params.id) {
      case "lawyer": {
        this.activeComponent = "LawyerExplorePage";
        break;
      }
      case "realEstate": {
        this.activeComponent = "RealEstateExplorePage";
        break;
      }
      default :{
        this.$router.go(-1)
      }
    }
  },
  // mounted() {

  // }
}
</script>
