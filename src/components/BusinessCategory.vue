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
        <div v-for="(item, index) in list" :key="index" @click="handleSelected(index,item)" :class="index == activeIndex ? 'active-tab' : ''"
          class="xxs:p-3 p-5 border border-gray-300 rounded-lg cursor-pointer transition ease-in-out delay-150 duration-100">
          <div class="">
            <div class="center">
              <FpIcons :icon="item.icon" />
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
import * as icons from "@/icons/icons"
import FpIcons from "@/icons/FpIcons.vue";


export default {
  name: "BusinessCategory",
  components: {
    FpIcons
  },
  props: {
    isCarousel: { type: Boolean, default: false },
    // list: { default: [] }
  },
  emits:['activeCategory'],
  data() {
    return {
      list: [
        { name: "All", icon: 'service' },
        { name: "Service",icon: 'service' },
        { name: "Jobs",icon: 'job' },
        { name: "Accomedation",icon: 'accomodation' },
        { name: "Real Estate",icon: 'realEstate' },
        { name: "Legal/Lawyers",icon: 'legalLawyer' },
        { name: "Repairs",icon: 'repairs' },
        { name: "Trining",icon: 'training' },
        { name: "Pets",icon: 'pet' },
        { name: "Rent",icon: 'rentLease' },
        { name: "Lease",icon: 'rentLease' },
        { name: "Repairs",icon: 'repairs' },
        { name: "Freelancer",icon: 'freelancer' },
        { name: "Community",icon: 'community' },
        { name: "Sale",icon: 'sale' },
        { name: "Legal/Lawyers",icon: 'service' },
        { name: "Repairs",icon: 'service' },
      ],
      isRightSlide: false,
      icons,
      activeIndex:0,
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
    handleSelected(index,item){
      this.activeIndex = index;
      this.$emit("activeCategory",item)
      console.log(item)
    },

  },
  // mounted() {
  //   console.log(icons);
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
