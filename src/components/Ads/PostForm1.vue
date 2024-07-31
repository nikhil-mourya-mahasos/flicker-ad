<template>
  <section class="bg-default rounded-lg md:p-2">
    <!-- <FormStepper /> -->
    <section class="md:my-6 my-3 bg-white p-5 rounded-lg shadow-md">
      <CustomStepper :currentStep="currentStep" :totalStep="totalStep" />
    </section>

    <section>
      <section>
        <TransitionGroup name="fade">
          <CategoryTab v-if="currentStep === 0" @handleCategory="getCategory" />
          <SubCategoryTab v-if="currentStep === 0" />
          <KeepAlive><PostDetailTab v-if="currentStep === 1" /> </KeepAlive>
          <OtherDetailTab :categoryId="cateogryId" v-if="currentStep === 2" />
          <KeepAlive><UploaderTab v-if="currentStep === 3" /></KeepAlive>
          <LocationTab v-if="currentStep === 4" />
          <PaymentTab v-if="currentStep === 5"
        /></TransitionGroup>
      </section>
    </section>
    <div class="mt-14">
      <button
        @click="prevStep"
        class="mr-2 px-4 py-2 rounded outline-2 outline-teal-600 border-teal-600 border"
      >
        Previous
      </button>
      <button @click="nextStep" class="px-10 py-2 bg-teal-500 text-white rounded">
        Next
      </button>
    </div>
  </section>
</template>
<script>
// import FormStepper from "./FormStepper.vue";
import CustomStepper from "./CustomStepper.vue";
import CategoryTab from "./tabs/CategoryTab.vue";
import SubCategoryTab from "./tabs/SubCategoryTab.vue";
import PostDetailTab from "./tabs/PostDetailTab.vue";
import OtherDetailTab from "./tabs/OtherDetailTab.vue";
import UploaderTab from "./tabs/UploaderTab.vue";
import LocationTab from "./tabs/LocationTab.vue";
import PaymentTab from "./tabs/PaymentTab.vue";
export default {
  components: {
    CustomStepper,
    CategoryTab,
    SubCategoryTab,
    PostDetailTab,
    OtherDetailTab,
    UploaderTab,
    LocationTab,
    PaymentTab,
  },
  data() {
    return {
      currentStep: 0,
      totalStep: 5,
      cateogryId: null,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 5) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    getCategory(data) {
      this.cateogryId = data;
    },
  },
};
</script>
<style scoped lang="scss">
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
//   transform: translateY(10px);
// }
</style>
