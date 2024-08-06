<template>
  <section class="bg-default">
    <div v-if="isSubmited" class="rounded-lg md:p-2 ">
      <div class="mx-auto w-full lg:w-3/5 flex flex-col items-center">
        <div class="w-fit" >
          <div class="border primary-border-color rounded-full p-2">
            <div class="center">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M27 53.25C30.4472 53.25 33.8606 52.571 37.0454 51.2518C40.2302 49.9327 43.124 47.9991 45.5616 45.5616C47.9991 43.124 49.9327 40.2302 51.2518 37.0454C52.571 33.8606 53.25 30.4472 53.25 27C53.25 23.5528 52.571 20.1394 51.2518 16.9546C49.9327 13.7698 47.9991 10.876 45.5616 8.43845C43.124 6.00091 40.2302 4.06735 37.0454 2.74816C33.8606 1.42898 30.4472 0.75 27 0.75C20.0381 0.75 13.3613 3.51562 8.43845 8.43845C3.51562 13.3613 0.75 20.0381 0.75 27C0.75 33.9619 3.51562 40.6387 8.43845 45.5616C13.3613 50.4844 20.0381 53.25 27 53.25ZM26.3233 37.6167L40.9067 20.1167L36.4267 16.3833L23.885 31.4304L17.3954 24.9379L13.2713 29.0621L22.0213 37.8121L24.2788 40.0696L26.3233 37.6167Z"
                  fill="#008080" />
              </svg>
            </div>
          </div>
        </div>
        <div class="">
          <h2 class="my-2 text-2xl md:text-4xl font-semibold">Thank you!</h2>
          <p class="my-2 text-xs md:text-sm">We appreciate your business. Your post has been submitted for admin review
            successfully.</p>
          <p class="my-2 text-xs md:text-sm">You will receive an email once it is approved.</p>
        </div>
      </div>
    </div>
    <div v-else class="bg-default rounded-lg md:p-2">
      <!-- <FormStepper /> -->
      <section class="md:my-6 my-3 bg-white p-5 rounded-lg shadow-md">
        <CustomStepper :currentStep="currentStep" :totalStep="totalStep" />
      </section>

      <section>
        <section>
          <TransitionGroup name="fade">
            <CategoryTab v-if="currentStep === 0" @handleCategory="getCategory" />
            <SubCategoryTab v-if="currentStep === 0" />
            <KeepAlive>
              <PostDetailTab v-if="currentStep === 1" />
            </KeepAlive>
            <OtherDetailTab :categoryId="cateogryId" v-if="currentStep === 2" />
            <KeepAlive>
              <UploaderTab v-if="currentStep === 3" />
            </KeepAlive>
            <LocationTab v-if="currentStep === 4" />
            <PaymentTab v-if="currentStep === 5" />
          </TransitionGroup>
        </section>
      </section>
      <div class="mt-14">
        <button @click="prevStep" class="mr-2 px-4 py-2 rounded outline-2 outline-teal-600 border-teal-600 border">
          Previous
        </button>
        <button @click="nextStep" class="px-10 py-2 bg-teal-500 text-white rounded">
          Next
        </button>
      </div>
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
      isSubmited: false,
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
// }</style>
