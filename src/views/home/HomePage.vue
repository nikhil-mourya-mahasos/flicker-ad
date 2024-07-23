<template>
  <div class="md:p-16 p-3 bg-gray-primary">
    <div class="xs:hidden my-2 block">
      <div class="">
        <div class="relative w-full">
          <div
            class="absolute left-3 top-1/2 transform -translate-y-1/2 flex justify-start gap-2"
          >
            <button class="text-gray-400 focus:outline-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5712 9.18713C13.5712 10.2315 13.1423 11.233 12.3788 11.9715C11.6153 12.7099 10.5797 13.1248 9.5 13.1248C8.42026 13.1248 7.38474 12.7099 6.62124 11.9715C5.85775 11.233 5.42882 10.2315 5.42882 9.18713C5.42882 8.14281 5.85775 7.14126 6.62124 6.40281C7.38474 5.66437 8.42026 5.24951 9.5 5.24951C10.5797 5.24951 11.6153 5.66437 12.3788 6.40281C13.1423 7.14126 13.5712 8.14281 13.5712 9.18713ZM12.2141 9.18713C12.2141 8.49092 11.9282 7.82322 11.4192 7.33092C10.9102 6.83862 10.2198 6.56205 9.5 6.56205C8.78017 6.56205 8.08982 6.83862 7.58083 7.33092C7.07183 7.82322 6.78588 8.49092 6.78588 9.18713C6.78588 9.88335 7.07183 10.551 7.58083 11.0433C8.08982 11.5356 8.78017 11.8122 9.5 11.8122C10.2198 11.8122 10.9102 11.5356 11.4192 11.0433C11.9282 10.551 12.2141 9.88335 12.2141 9.18713ZM16.2174 15.6908C17.9991 13.9666 19 11.6287 19 9.19107C19 6.7534 17.9991 4.41551 16.2174 2.69137C15.3353 1.83811 14.2881 1.16126 13.1355 0.699468C11.9829 0.23768 10.7476 0 9.5 0C8.25244 0 7.01709 0.23768 5.86451 0.699468C4.71192 1.16126 3.66467 1.83811 2.78256 2.69137C1.00087 4.41551 0 6.7534 0 9.19107C0 11.6287 1.00087 13.9666 2.78256 15.6908L4.84665 17.6583L7.61912 20.2637L7.7996 20.4185C8.85133 21.2428 10.3916 21.1903 11.3822 20.2637L14.6867 17.1529L16.2174 15.6908ZM3.73929 3.61671C4.49549 2.8845 5.3935 2.30363 6.38196 1.90731C7.37043 1.511 8.42997 1.30701 9.5 1.30701C10.57 1.30701 11.6296 1.511 12.618 1.90731C13.6065 2.30363 14.5045 2.8845 15.2607 3.61671C16.7457 5.05486 17.5994 6.99188 17.6439 9.02394C17.6884 11.056 16.9202 13.0263 15.4996 14.5239L15.2607 14.7654L13.468 16.477L10.4418 19.3239L10.3142 19.4289C10.0792 19.5991 9.7934 19.691 9.49977 19.6907C9.20615 19.6905 8.92052 19.5982 8.68576 19.4276L8.55956 19.3226L4.51552 15.5096L3.73929 14.7654L3.50044 14.5252C2.07975 13.0276 1.31158 11.0573 1.35607 9.02526C1.40057 6.9932 2.25431 5.05486 3.73929 3.61671Z"
                  fill="black"
                />
              </svg>
            </button>
            <p class="w-20 text-xs text-nowrap overflow-hidden text-primary">
              San Diego, CA
            </p>
          </div>

          <input
            type="text"
            class="bg-white pl-32 w-full text-black rounded-lg border-black border px-4 py-2 md:px-2"
            placeholder="Search..."
          />

          <button
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
          >
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7233 13.2075H14.7296L14.3774 12.8834C15.6527 11.4714 16.3536 9.66876 16.3522 7.80446C16.3522 6.26089 15.8727 4.75197 14.9743 3.46854C14.0759 2.1851 12.7989 1.18478 11.305 0.594083C9.81097 0.00338155 8.16703 -0.151173 6.58102 0.149964C4.99502 0.451101 3.53818 1.1944 2.39473 2.28588C1.25128 3.37735 0.472582 4.76797 0.157105 6.28189C-0.158371 7.7958 0.0035426 9.36502 0.622372 10.7911C1.2412 12.2172 2.28915 13.4361 3.63371 14.2936C4.97826 15.1512 6.55902 15.6089 8.1761 15.6089C10.2013 15.6089 12.0629 14.9005 13.4969 13.7238L13.8365 14.06V15.0086L20.1258 21L22 19.211L15.7233 13.2075ZM8.1761 13.2075C5.04403 13.2075 2.51573 10.7942 2.51573 7.80446C2.51573 4.81475 5.04403 2.40138 8.1761 2.40138C11.3082 2.40138 13.8365 4.81475 13.8365 7.80446C13.8365 10.7942 11.3082 13.2075 8.1761 13.2075Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <BusinessCategory />
    <section class="md:grid gap-10 md:grid-cols-4 w-full my-5 flex flex-col-reverse">
      <section class="md:col-span-1 md:h-4/6 flex md:block flex-row justify-normal gap-4">
        <div class="banner-bg p-5 w-full text-white xxs:hidden xs:block">
          Advertise Banner Here
        </div>
        <div
          class="p-5 my-2 h-60 border border-black w-full center text-black rounded-lg"
        >
          <h1>Banner 1</h1>
        </div>
        <div
          class="p-5 my-2 h-60 border border-black w-full center text-black rounded-lg"
        >
          <h1>Banner 2</h1>
        </div>
      </section>
      <section class="md:col-span-3 col-span-4 overflow-hidden">
        <h3 class="text-lg text-left font-extrabold">Esports</h3>
        <div class="grid grid-cols-12 gap-2 md:gap-5 my-2 md:my-5">
          <div class="col-span-1 center" v-if="isRightSlide">
            <div @click="handleSlideLeft()" class="cursor-pointer rotate-180">
              <svg
                width="30"
                height="31"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_10_203)">
                  <circle cx="25" cy="25" r="18" fill="white" />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.3909 24.4842C29.6601 24.7537 29.8113 25.1191 29.8113 25.5C29.8113 25.8809 29.6601 26.2463 29.3909 26.5158L23.9705 31.9381C23.7009 32.2076 23.3352 32.359 22.9539 32.3589C22.5726 32.3588 22.207 32.2073 21.9374 31.9376C21.6679 31.6679 21.5165 31.3022 21.5166 30.921C21.5167 30.5397 21.6682 30.174 21.9379 29.9045L26.3424 25.5L21.9379 21.0955C21.6759 20.8245 21.5309 20.4615 21.534 20.0846C21.5371 19.7076 21.6881 19.347 21.9545 19.0804C22.2209 18.8137 22.5813 18.6624 22.9582 18.6589C23.3352 18.6555 23.6983 18.8002 23.9696 19.0619L29.3918 24.4832L29.3909 24.4842Z"
                  fill="#008080"
                />
                <defs>
                  <filter
                    id="filter0_d_10_203"
                    x="3"
                    y="7"
                    width="44"
                    height="44"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_10_203"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_10_203"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div
            id="service-container"
            class="flex gap-5 xxs:gap-2 overflow-hidden overflow-x-scroll no-scrollbar"
            :class="isRightSlide ? 'col-span-10' : 'col-span-11'"
          >
            <div
              v-for="(item, index) in list"
              :key="index"
              :class="index == 0 ? 'active-tab' : ''"
              class="p-1 px-4 border border-black rounded-full cursor-pointer"
            >
              <div class="center">
                <h4 class="">{{ item?.name }}</h4>
              </div>
            </div>
          </div>
          <div class="col-span-1 center">
            <div @click="handleSlideRight()" class="cursor-pointer">
              <svg
                width="30"
                height="31"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_10_203)">
                  <circle cx="25" cy="25" r="18" fill="white" />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.3909 24.4842C29.6601 24.7537 29.8113 25.1191 29.8113 25.5C29.8113 25.8809 29.6601 26.2463 29.3909 26.5158L23.9705 31.9381C23.7009 32.2076 23.3352 32.359 22.9539 32.3589C22.5726 32.3588 22.207 32.2073 21.9374 31.9376C21.6679 31.6679 21.5165 31.3022 21.5166 30.921C21.5167 30.5397 21.6682 30.174 21.9379 29.9045L26.3424 25.5L21.9379 21.0955C21.6759 20.8245 21.5309 20.4615 21.534 20.0846C21.5371 19.7076 21.6881 19.347 21.9545 19.0804C22.2209 18.8137 22.5813 18.6624 22.9582 18.6589C23.3352 18.6555 23.6983 18.8002 23.9696 19.0619L29.3918 24.4832L29.3909 24.4842Z"
                  fill="#008080"
                />
                <defs>
                  <filter
                    id="filter0_d_10_203"
                    x="3"
                    y="7"
                    width="44"
                    height="44"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_10_203"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_10_203"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex justify-around w-full flex-wrap gap-4 my-5">
          <div
            v-for="(item, index) in postlist"
            :key="index"
            class="xxs:w-[47%] md:w-[30%] cursor-pointer"
          >
            <router-link to="/post/12"
              ><PostDetail
                :title="item?.title"
                :location="item?.location"
                :date="item?.date"
                :image="item?.image"
            /></router-link>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import BusinessCategory from "@/components/BusinessCategory.vue";
import PostDetail from "@/components/PostDetail.vue";
export default {
  name: "HomeView",
  components: {
    BusinessCategory,
    PostDetail,
  },
  data() {
    return {
      list: [
        { name: "All" },
        { name: "Service" },
        { name: "Jobs" },
        { name: "Accomedation" },
        { name: "Service" },
        { name: "Jobs" },
        { name: "Accomedation" },
        { name: "Service" },
        { name: "Jobs" },
        { name: "Accomedation" },
      ],
      postlist: [
        {
          title: "All",
          location: "San Diego",
          image:
            "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
          date: "May 05",
        },
        {
          title: "Service",
          location: "San Diego",
          image:
            "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
          date: "May 05",
        },
        {
          title: "Jobs",
          location: "San Diego",
          image:
            "https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg",
          date: "May 05",
        },
        {
          title: "Accomedation",
          location: "San Diego",
          image:
            "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
          date: "May 05",
        },
        {
          title: "All",
          location: "San Diego",
          image:
            "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
          date: "May 05",
        },
        {
          title: "Service",
          location: "San Diego",
          image:
            "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
          date: "May 05",
        },
      ],
      isRightSlide: false,
    };
  },
  methods: {
    handleSlideRight() {
      document.getElementById("service-container").scrollBy({
        top: 0,
        left: 150, // Adjust the value to scroll by more or less
        behavior: "smooth", // Optional, adds smooth scrolling animation
      });
      this.isRightSlide = true;
    },
    handleSlideLeft() {
      document.getElementById("service-container").scroll;
      // .scrollBy({
      //   top: 0,
      //   left: -150, // Adjust the value to scroll by more or less
      //   behavior: "smooth", // Optional, adds smooth scrolling animation
      // });
    },
  },
};
</script>
<style scoped>
.banner-bg {
  background: linear-gradient(88.8deg, #008080 34.51%, #00d5d5 130.17%);
}
.active-tab {
  background-color: #008080;
  color: white;
}
.gap {
  gap: auto !important;
}
</style>
