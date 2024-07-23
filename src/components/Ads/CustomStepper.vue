<template>
  <section class="hidden sm:block">
    <div class="flex items-center justify-around md:pl-32 pl-14 pb-10">
      <div class="flex items-center justify-around w-full">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex items-center justify-start w-52 relative"
        >
          <div class="flex items-center flex-col">
            <div
              :class="stepClass(index)"
              class="flex items-center justify-center w-5 h-5 rounded-full"
            >
              <div class="text-[9px] center">
                <svg
                  v-if="currentStep === index"
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.25781 8C6.46695 8 8.25781 6.20914 8.25781 4C8.25781 1.79086 6.46695 0 4.25781 0C2.04867 0 0.257812 1.79086 0.257812 4C0.257812 6.20914 2.04867 8 4.25781 8Z"
                    fill="white"
                  />
                </svg>
                <svg
                  v-if="currentStep > index"
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.2777 2.29289C10.6682 1.90237 10.6682 1.2692 10.2777 0.878679C9.8872 0.488155 9.25403 0.488155 8.86351 0.878679L3.91376 5.82843L1.79244 3.70711C1.40192 3.31658 0.768751 3.31658 0.378227 3.70711C-0.012298 4.09763 -0.0122976 4.7308 0.378227 5.12132L3.20665 7.94975C3.59718 8.34027 4.23034 8.34027 4.62087 7.94975L10.2777 2.29289Z"
                    fill="white"
                  />
                </svg>
                <svg
                  v-if="currentStep < index"
                  width="15"
                  height="15"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1509_1486)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.18945 16C12.6077 16 16.1895 12.4183 16.1895 8C16.1895 3.58172 12.6077 0 8.18945 0C3.77117 0 0.189453 3.58172 0.189453 8C0.189453 12.4183 3.77117 16 8.18945 16Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.18945 12C10.3986 12 12.1895 10.2091 12.1895 8C12.1895 5.79086 10.3986 4 8.18945 4C5.98031 4 4.18945 5.79086 4.18945 8C4.18945 10.2091 5.98031 12 8.18945 12Z"
                      fill="#E0E0E7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1509_1486">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.189453)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="text-xs md:text-sm absolute -bottom-6 whitespace-nowrap">
              {{ step }}
            </div>
          </div>
          <div class="flex-grow">
            <div
              v-if="index < steps.length - 1"
              class="flex-grow border-t-2 border"
              :class="lineClass(index)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="sm:hidden block">
    <div class="text-left">
      Step <span>{{ currentStep + 1 }}</span> of <span>{{ totalStep + 1 }}</span
      ><span>{{ ` (${steps[currentStep]}) ` }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "CustomStepper",
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    totalStep: {
      type: Number,
      required: true,
    },
  },
  computed: {
    steps() {
      return [
        "Select Category",
        "Post Details",
        "Other Details",
        "Gallery",
        "Location & Contact",
        "Submit",
      ];
    },
  },
  methods: {
    stepClass(index) {
      if (index < this.currentStep) {
        return "bg-teal-500 text-white";
      } else if (index === this.currentStep) {
        return "bg-teal-500 text-white";
      } else {
        return "bg-gray-200 text-gray-500";
      }
    },
    lineClass(index) {
      return index < this.currentStep ? "border-teal-500" : "border-gray-200";
    },
  },
};
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
