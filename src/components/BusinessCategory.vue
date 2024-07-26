<template>
  <section class="">
    <div class="p-1 w-full grid grid-cols-12">
      <div class="col-span-1 center" v-if="isRightSlide">
        <div @click="handleSlideLeft()" class="cursor-pointer rotate-180">
          <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_10_203)">
              <circle cx="25" cy="25" r="18" fill="white" />
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M29.3909 24.4842C29.6601 24.7537 29.8113 25.1191 29.8113 25.5C29.8113 25.8809 29.6601 26.2463 29.3909 26.5158L23.9705 31.9381C23.7009 32.2076 23.3352 32.359 22.9539 32.3589C22.5726 32.3588 22.207 32.2073 21.9374 31.9376C21.6679 31.6679 21.5165 31.3022 21.5166 30.921C21.5167 30.5397 21.6682 30.174 21.9379 29.9045L26.3424 25.5L21.9379 21.0955C21.6759 20.8245 21.5309 20.4615 21.534 20.0846C21.5371 19.7076 21.6881 19.347 21.9545 19.0804C22.2209 18.8137 22.5813 18.6624 22.9582 18.6589C23.3352 18.6555 23.6983 18.8002 23.9696 19.0619L29.3918 24.4832L29.3909 24.4842Z"
              fill="#008080" />
            <defs>
              <filter id="filter0_d_10_203" x="3" y="7" width="44" height="44" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_203" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_203" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div id="category-container"
        class="flex gap-5 xxs:gap-2 overflow-hidden overflow-x-scroll no-scrollbar scroll-smooth"
        :class="isRightSlide ? 'col-span-10' : 'col-span-11'">
        <div v-for="(item, index) in list" :key="index" :class="index == 0 ? 'active-tab' : ''"
          class="xxs:p-3 p-5 border border-gray-300 rounded-lg cursor-pointer transition ease-in-out delay-150 duration-100">
          <div class="">
            <div class="center">
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.965 4.075C13.7688 3.39125 14.17 3.04875 14.59 2.8475C15.0693 2.61854 15.5938 2.4997 16.125 2.4997C16.6562 2.4997 17.1807 2.61854 17.66 2.8475C18.08 3.04875 18.4825 3.39125 19.285 4.075C19.605 4.3475 19.765 4.48375 19.935 4.59875C20.3263 4.86125 20.7663 5.0425 21.2275 5.13375C21.43 5.17375 21.6388 5.19 22.0575 5.22375C23.1088 5.3075 23.635 5.34875 24.0737 5.505C25.0887 5.8625 25.8863 6.66125 26.245 7.67625C26.4 8.11375 26.4425 8.64125 26.5262 9.6925C26.56 10.1113 26.5763 10.32 26.6163 10.5225C26.7075 10.985 26.89 11.4225 27.1512 11.815C27.2662 11.985 27.4013 12.145 27.675 12.465C28.3588 13.2688 28.7013 13.67 28.9025 14.09C29.365 15.0613 29.365 16.19 28.9025 17.16C28.7013 17.58 28.3588 17.9825 27.675 18.785C27.4886 18.9918 27.3137 19.2088 27.1512 19.435C26.8893 19.8262 26.7074 20.2655 26.6163 20.7275C26.5763 20.93 26.56 21.1388 26.5262 21.5575C26.4425 22.6088 26.4013 23.135 26.245 23.5737C26.0681 24.0748 25.7812 24.5298 25.4055 24.9055C25.0298 25.2812 24.5748 25.5681 24.0737 25.745C23.6362 25.9 23.1088 25.9425 22.0575 26.0262C21.6388 26.06 21.43 26.0763 21.2275 26.1163C20.7655 26.2074 20.3262 26.3893 19.935 26.6512C19.765 26.7662 19.605 26.9013 19.285 27.175C18.4813 27.8588 18.08 28.2013 17.66 28.4025C17.1807 28.6315 16.6562 28.7503 16.125 28.7503C15.5938 28.7503 15.0693 28.6315 14.59 28.4025C14.17 28.2013 13.7675 27.8588 12.965 27.175C12.7582 26.9885 12.5412 26.8137 12.315 26.6512C11.9238 26.3893 11.4845 26.2074 11.0225 26.1163C10.82 26.0763 10.6113 26.06 10.1925 26.0262C9.14125 25.9425 8.615 25.9013 8.17625 25.745C7.67525 25.5681 7.2202 25.2812 6.8445 24.9055C6.46879 24.5298 6.18194 24.0748 6.005 23.5737C5.85 23.1362 5.8075 22.6088 5.72375 21.5575C5.69 21.1388 5.67375 20.93 5.63375 20.7275C5.54265 20.2655 5.36081 19.8262 5.09875 19.435C4.93633 19.2088 4.76148 18.9918 4.575 18.785C3.89125 17.9813 3.54875 17.58 3.3475 17.16C3.11854 16.6807 2.9997 16.1562 2.9997 15.625C2.9997 15.0938 3.11854 14.5693 3.3475 14.09C3.54875 13.67 3.89125 13.2675 4.575 12.465C4.8475 12.145 4.98375 11.985 5.09875 11.815C5.36125 11.4237 5.5425 10.9838 5.63375 10.5225C5.67375 10.32 5.69 10.1113 5.72375 9.6925C5.8075 8.64125 5.84875 8.115 6.005 7.67625C6.18189 7.17542 6.46857 6.7205 6.84405 6.34481C7.21952 5.96912 7.67427 5.68218 8.175 5.505C8.6125 5.35 9.14 5.3075 10.1912 5.22375C10.61 5.19 10.8187 5.17375 11.0212 5.13375C11.4837 5.0425 11.9213 4.86 12.3138 4.59875C12.4838 4.48375 12.6437 4.34875 12.9637 4.075H12.965Z"
                  stroke="#232323" stroke-width="1.5" />
                <path d="M11.8525 19.8975L20.3975 11.3525" stroke="#232323" stroke-width="1.5" stroke-linecap="round" />
                <path
                  d="M21.11 19.1863C21.118 19.3782 21.0872 19.5699 21.0193 19.7496C20.9513 19.9294 20.8478 20.0935 20.7148 20.2322C20.5818 20.3709 20.4221 20.4813 20.2453 20.5567C20.0686 20.6321 19.8784 20.6709 19.6863 20.6709C19.4941 20.6709 19.3039 20.6321 19.1272 20.5567C18.9504 20.4813 18.7907 20.3709 18.6577 20.2322C18.5247 20.0935 18.4212 19.9294 18.3532 19.7496C18.2853 19.5699 18.2545 19.3782 18.2625 19.1863C18.2779 18.819 18.4346 18.4718 18.6999 18.2174C18.9653 17.963 19.3186 17.8209 19.6863 17.8209C20.0539 17.8209 20.4072 17.963 20.6726 18.2174C20.9379 18.4718 21.0946 18.819 21.11 19.1863ZM13.9888 12.065C13.9944 12.2556 13.9617 12.4454 13.8927 12.6231C13.8237 12.8009 13.7196 12.963 13.5868 13.0998C13.454 13.2366 13.2951 13.3454 13.1194 13.4197C12.9438 13.4939 12.7551 13.5322 12.5644 13.5322C12.3737 13.5322 12.1849 13.4939 12.0093 13.4197C11.8337 13.3454 11.6748 13.2366 11.5419 13.0998C11.4091 12.963 11.3051 12.8009 11.2361 12.6231C11.167 12.4454 11.1344 12.2556 11.14 12.065C11.151 11.6945 11.3059 11.3429 11.5718 11.0848C11.8377 10.8266 12.1937 10.6822 12.5644 10.6822C12.935 10.6822 13.291 10.8266 13.557 11.0848C13.8229 11.3429 13.9778 11.6945 13.9888 12.065Z"
                  fill="#232323" />
              </svg>
            </div>
            <h4 class="whitespace-nowrap xxs:text-sm">{{ item.name }}</h4>
          </div>
        </div>
      </div>
      <div class="col-span-1 center">
        <div @click="handleSlideRight()" class="cursor-pointer">
          <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_10_203)">
              <circle cx="25" cy="25" r="18" fill="white" />
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M29.3909 24.4842C29.6601 24.7537 29.8113 25.1191 29.8113 25.5C29.8113 25.8809 29.6601 26.2463 29.3909 26.5158L23.9705 31.9381C23.7009 32.2076 23.3352 32.359 22.9539 32.3589C22.5726 32.3588 22.207 32.2073 21.9374 31.9376C21.6679 31.6679 21.5165 31.3022 21.5166 30.921C21.5167 30.5397 21.6682 30.174 21.9379 29.9045L26.3424 25.5L21.9379 21.0955C21.6759 20.8245 21.5309 20.4615 21.534 20.0846C21.5371 19.7076 21.6881 19.347 21.9545 19.0804C22.2209 18.8137 22.5813 18.6624 22.9582 18.6589C23.3352 18.6555 23.6983 18.8002 23.9696 19.0619L29.3918 24.4832L29.3909 24.4842Z"
              fill="#008080" />
            <defs>
              <filter id="filter0_d_10_203" x="3" y="7" width="44" height="44" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_203" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_203" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BusinessCategory",
  props: {
    isCarousel: { type: Boolean, default: false },
    list: { default: [] }
  },
  data() {
    return {
      // list: [
      //   { name: "Service" },
      //   { name: "Jobs" },
      //   { name: "Accomedation" },
      //   { name: "Real Estate" },
      //   { name: "Legal/Lawyers" },
      //   { name: "Repairs" },
      //   { name: "Trining" },
      //   { name: "Pets" },
      //   { name: "Rent" },
      //   { name: "Lease" },
      //   { name: "Service" },
      //   { name: "Jobs" },
      //   { name: "Accomedation" },
      //   { name: "Real Estate" },
      //   { name: "Legal/Lawyers" },
      //   { name: "Repairs" },
      // ],
      isRightSlide: false,
    };
  },
  methods: {
    handleSlideRight() {
      document.getElementById("category-container").scrollBy({
        top: 0,
        left: 150, // Adjust the value to scroll by more or less
        behavior: "smooth", // Optional, adds smooth scrolling animation
      });
      this.isRightSlide = true;
    },
    handleSlideLeft() {
      document.getElementById("category-container").scrollBy({
        top: 0,
        left: -150, // Adjust the value to scroll by more or less
        behavior: "smooth", // Optional, adds smooth scrolling animation
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
