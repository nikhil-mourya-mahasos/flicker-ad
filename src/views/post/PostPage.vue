<template>
  <main class="p-2 md:p-10 md:pt-5 md:px-14">
    <div
      class="cursor-pointer px-2 my-3 md:my-1 flex justify-start items-center gap-5 text-black"
    >
      <div class="md:hidden" @click="goBack()">
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1766 7.47609H1.69397L7.15771 13.3305L6.53289 14L0 7L6.53289 0L7.15771 0.669501L1.69397 6.52391H14.1766V7.47609Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="hidden md:block" @click="goBack()">
        <div class="center">
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_49_58)">
                <circle cx="24" cy="20" r="20" fill="#008080" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.5048 17.8063C18.1118 18.2138 17.891 18.7661 17.891 19.342C17.891 19.9179 18.1118 20.4702 18.5048 20.8777L26.4176 29.0747C26.8113 29.4822 27.3452 29.711 27.9018 29.7109C28.4584 29.7108 28.9922 29.4817 29.3857 29.074C29.7791 28.6663 30.0001 28.1135 30 27.5371C29.9999 26.9607 29.7786 26.4079 29.385 26.0005L22.9551 19.342L29.385 12.6836C29.7674 12.2739 29.9792 11.7251 29.9747 11.1553C29.9701 10.5855 29.7497 10.0403 29.3608 9.63722C28.9719 9.23411 28.4456 9.00531 27.8954 9.00009C27.3452 8.99487 26.815 9.21366 26.419 9.60932L18.5034 17.8049L18.5048 17.8063Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_49_58"
                  x="0"
                  y="0"
                  width="48"
                  height="48"
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
                    result="effect1_dropShadow_49_58"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_49_58"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <h4 class="md:hidden" @click="goBack()">Back</h4>
      <h4 class="hidden md:block">
        BENITO general clean up - free estimate 🌲 (All sandiego)
      </h4>
    </div>
    <section class="rounded-lg lg:px-2 p-2 shadow-lg bg-white">
      <div class="md:hidden my-2 text-left text-xs">
        BENITO general clean up - free estimate 🌲 (All sandiego)
      </div>
      <div class="relative grid grid-cols-9 gap-5">
        <div class="md:col-span-5 col-span-9">
          <!-- post gallery section -->
          <div class="flex flex-col-reverse md:grid md:grid-cols-8 gap-2">
            <div
              class="flex flex-row md:col-span-2 md:grid md:grid-flow-row gap-2 overflow-hidden"
            >
              <div
                v-for="(item, index) in imgList"
                @click="toggleImg(index)"
                :key="index"
                class="cursor-pointer"
              >
                <img class="h-16 w-40 md:h-auto md:w-auto object-cover" :src="item" />
              </div>
            </div>
            <div class="md:col-span-6">
              <img :src="activeImg" class="w-full h-full object-cover" />
            </div>
          </div>
          <!-- post gallery section -->

          <!-- post description for large screen -->
          <div class="my-5 hidden md:block">
            <p class="text-left text-sm my-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p class="text-left text-sm my-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries
            </p>
          </div>
        </div>
        <div class="md:col-span-4 col-span-9 p-2 relative">
          <span
            class="absolute hidden md:block left-0 top-0 h-5/6 w-[1px] bg-gray-400"
          ></span>
          <div class="absolute md:hidden xxs:center left-0 w-full h-[1px] bg-gray-400">
            <div class="w-5/6 bg-gray-400"></div>
          </div>

          <aside class="p-2">
            <div class="relative my-2">
              <div class="flex justify-start items-center gap-5 md:text-sm xxs:text-xs">
                <div class="center">
                  <img class="rounded-full h-14 w-14" :src="activeImg" />
                </div>
                <div class="center"><h3>Posted by Ramanna Gude</h3></div>
              </div>
              <div
                class="my-3 flex justify-center items-center gap-2 md:gap-5 text-sm xxs:text-[12px] font-semibold text-gray-400"
              >
                <div class="flex items-center gap-2">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4092 6.0343C12.8794 6.0343 14.2893 6.61832 15.3289 7.65788C16.3685 8.69744 16.9525 10.1074 16.9525 11.5776M10.3008 1.66653C10.6685 1.62168 11.0387 1.59947 11.4092 1.60002C14.0554 1.60002 16.5933 2.65122 18.4644 4.52237C20.3356 6.39352 21.3868 8.93135 21.3868 11.5776C21.3868 11.9483 21.3646 12.3178 21.3202 12.686"
                        stroke="#344054"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.7352 21.5551C13.0166 21.1454 11.3864 20.4279 9.92359 19.4373L11.9414 16.5446C12.2732 16.0919 12.7643 15.7818 13.3156 15.677C13.867 15.5721 14.4376 15.6802 14.9124 15.9794C15.2785 16.212 15.6552 16.4227 16.0213 16.6334C16.2967 16.7681 16.5412 16.9584 16.7393 17.1923C16.9374 17.4262 17.0849 17.6986 17.1724 17.9924C17.2599 18.2862 17.2855 18.5949 17.2477 18.8991C17.2099 19.2033 17.1094 19.4963 16.9526 19.7597L16.265 20.8134C16.142 21.1004 15.9195 21.3335 15.6385 21.4698C15.3575 21.6062 15.0368 21.6361 14.7352 21.5551ZM2.17463 6.77775L3.28307 6.0897C3.54018 5.92284 3.82909 5.8111 4.13156 5.76153C4.43403 5.71195 4.74349 5.72562 5.04042 5.80168C5.33734 5.87773 5.61527 6.01452 5.85666 6.2034C6.09805 6.39229 6.29766 6.62916 6.44289 6.89908C6.65362 7.29818 6.86381 7.67546 7.09688 8.00805C7.39609 8.4829 7.5041 9.05355 7.39912 9.6049C7.29415 10.1563 6.984 10.6473 6.53122 10.979L3.58266 13.0298C2.58407 11.5795 1.85543 9.96088 1.43177 8.25177C1.36547 7.95805 1.40331 7.65041 1.53883 7.38152C1.67434 7.11263 1.8991 6.8992 2.17463 6.77775Z"
                        stroke="#306CFE"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.58252 13.0303C4.39755 14.3077 5.35731 15.4867 6.44275 16.544C7.50018 17.6295 8.6794 18.5892 9.95697 19.4042"
                        stroke="#306CFE"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h3>Call</h3>
                </div>
                <div class="relative flex items-center justify-normal gap-2 md:px-5 px-2">
                  <span class="absolute left-0 w-[1px] h-5/6 bg-gray-400"></span>
                  <span class="absolute right-0 w-[1px] h-5/6 bg-gray-400"></span>
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1668 5.50001C20.1668 4.49167 19.3418 3.66667 18.3335 3.66667H3.66683C2.6585 3.66667 1.8335 4.49167 1.8335 5.50001V16.5C1.8335 17.5083 2.6585 18.3333 3.66683 18.3333H18.3335C19.3418 18.3333 20.1668 17.5083 20.1668 16.5V5.50001ZM18.3335 5.50001L11.0002 10.0833L3.66683 5.50001H18.3335ZM18.3335 16.5H3.66683V7.33334L11.0002 11.9167L18.3335 7.33334V16.5Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <h3>Email</h3>
                </div>
                <div class="flex items-center justify-normal gap-2">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2.2778C0 1.8063 0.187303 1.35411 0.520705 1.02071C0.854107 0.687303 1.3063 0.5 1.7778 0.5H16.0002C16.4717 0.5 16.9239 0.687303 17.2573 1.02071C17.5907 1.35411 17.778 1.8063 17.778 2.2778V12.0557C17.778 12.5272 17.5907 12.9794 17.2573 13.3128C16.9239 13.6462 16.4717 13.8335 16.0002 13.8335H11.9237L9.51745 16.2397C9.35075 16.4064 9.1247 16.5 8.88899 16.5C8.65329 16.5 8.42724 16.4064 8.26054 16.2397L5.85429 13.8335H1.7778C1.3063 13.8335 0.854107 13.6462 0.520705 13.3128C0.187303 12.9794 0 12.5272 0 12.0557V2.2778ZM16.0002 2.2778H1.7778V12.0557H6.2223C6.45803 12.0557 6.68409 12.1494 6.85075 12.3161L8.88899 14.3544L10.9272 12.3161C11.0939 12.1494 11.32 12.0557 11.5557 12.0557H16.0002V2.2778ZM3.5556 5.38895C3.5556 5.1532 3.64925 4.9271 3.81595 4.7604C3.98265 4.5937 4.20875 4.50005 4.4445 4.50005H13.3335C13.5692 4.50005 13.7953 4.5937 13.962 4.7604C14.1287 4.9271 14.2224 5.1532 14.2224 5.38895C14.2224 5.6247 14.1287 5.85079 13.962 6.01749C13.7953 6.18419 13.5692 6.27785 13.3335 6.27785H4.4445C4.20875 6.27785 3.98265 6.18419 3.81595 6.01749C3.64925 5.85079 3.5556 5.6247 3.5556 5.38895ZM3.5556 8.94454C3.5556 8.70879 3.64925 8.4827 3.81595 8.316C3.98265 8.1493 4.20875 8.05565 4.4445 8.05565H9.77789C10.0136 8.05565 10.2397 8.1493 10.4064 8.316C10.5731 8.4827 10.6668 8.70879 10.6668 8.94454C10.6668 9.1803 10.5731 9.40639 10.4064 9.57309C10.2397 9.73979 10.0136 9.83344 9.77789 9.83344H4.4445C4.20875 9.83344 3.98265 9.73979 3.81595 9.57309C3.64925 9.40639 3.5556 9.1803 3.5556 8.94454Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <h3>Message</h3>
                </div>
              </div>
              <div class="absolute left-0 h-[1px] -bottom-2 w-full center">
                <div class="w-11/12 h-[10%] bg-gray-400"></div>
              </div>
            </div>
            <div class="my-2 md:hidden text-left">
              <h3 class="my-4 font-bold">Description</h3>
              <p class="text-sm my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <p class="text-sm my-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries
              </p>
            </div>
            <div class="text-sm my-2 text-start">
              <h3><b>Quick Information</b></h3>
              <p><b>Service By Benito</b></p>
              <div class="my-3 flex justify-start gap-10">
                <p><b>Open Hours</b></p>
                <p><b>On call Support</b></p>
              </div>
              <div class="text-sm flex flex-wrap gap-3 justify-start text-white">
                <p class="md:p-2 xxs:p-1 primary-bg rounded-lg">1. Hauling</p>
                <p class="md:p-2 xxs:p-1 primary-bg rounded-lg">1. Lawn Moving</p>
                <p class="md:p-2 xxs:p-1 primary-bg rounded-lg">1. Tree Trimming</p>
                <p class="md:p-2 xxs:p-1 primary-bg rounded-lg">1. Wedding Pulling</p>
                <p class="md:p-2 xxs:p-1 primary-bg rounded-lg">1. Fire Hazard</p>
              </div>
              <div class="my-3 h-40 w-full border border-black center">
                <h3>Map Here</h3>
              </div>
              <p>
                The location data here is only for information purposes. May not be
                accurate
              </p>
            </div>
          </aside>
        </div>
      </div>
      <!-- post footer -->
      <div class="my-3 md:px-10 w-full flex justify-start gap-10 text-[12px]">
        <div>Post Id :22</div>
        <div class="flex justify-between items-start gap-3">
          <div class="center">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 21.2495V13.7495"
                  stroke="#232323"
                  stroke-width="2.04545"
                  stroke-linecap="round"
                />
                <path
                  d="M14.9995 8.75C15.6899 8.75 16.2495 9.30964 16.2495 10C16.2495 10.6904 15.6899 11.25 14.9995 11.25C14.3092 11.25 13.7495 10.6904 13.7495 10C13.7495 9.30964 14.3092 8.75 14.9995 8.75Z"
                  fill="#232323"
                />
                <path
                  d="M2.49951 14.9995C2.49951 9.10696 2.49951 6.16067 4.3301 4.3301C6.16067 2.49951 9.10696 2.49951 14.9995 2.49951C20.8921 2.49951 23.8384 2.49951 25.6689 4.3301C27.4995 6.16067 27.4995 9.10696 27.4995 14.9995C27.4995 20.8921 27.4995 23.8384 25.6689 25.6689C23.8384 27.4995 20.8921 27.4995 14.9995 27.4995C9.10696 27.4995 6.16067 27.4995 4.3301 25.6689C2.49951 23.8384 2.49951 20.8921 2.49951 14.9995Z"
                  stroke="#232323"
                  stroke-width="2.04545"
                />
              </svg>
            </div>
          </div>
          <h4>Report</h4>
        </div>
        <div class="flex justify-between items-start gap-3">
          <div class="center">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4124 16.3231L21.2003 10.9592C22.7622 6.27339 23.5432 3.93049 22.3064 2.69375C21.0697 1.457 18.7268 2.23797 14.041 3.79992L8.6771 5.58787C4.8952 6.84851 3.00424 7.47883 2.46688 8.40315C1.9557 9.28246 1.9557 10.3685 2.46688 11.2478C3.00424 12.1721 4.8952 12.8024 8.6771 14.0631C9.28435 14.2655 9.58796 14.3667 9.84176 14.5366C10.0877 14.7013 10.299 14.9125 10.4636 15.1585C10.6335 15.4123 10.7347 15.7159 10.9371 16.3231C12.1978 20.105 12.8281 21.996 13.7524 22.5334C14.6317 23.0445 15.7178 23.0445 16.5971 22.5334C17.5214 21.996 18.1517 20.105 19.4124 16.3231Z"
                  stroke="#232323"
                  stroke-width="1.38889"
                />
                <path
                  d="M16.826 9.15451C17.0988 8.88483 17.1012 8.44513 16.8316 8.17244C16.5619 7.89974 16.1222 7.8973 15.8495 8.16699L16.826 9.15451ZM11.046 14.871L16.826 9.15451L15.8495 8.16699L10.0693 13.8834L11.046 14.871Z"
                  fill="#232323"
                />
              </svg>
            </div>
          </div>
          <h4>Share</h4>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "PostPage",
  data() {
    return {
      imgList: [
        "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
        "https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg",
        "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
        "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
      ],
      activeImg: "",
    };
  },
  methods: {
    toggleImg(index) {
      this.activeImg = this.imgList[index];
    },
    goBack() {
      //   router.go(-1);
      window.history.go(-1);
    },
  },
  mounted() {
    // console.log(router);
    if (this.imgList) this.activeImg = this.imgList[0];
  },
};
</script>
<style lang="scss"></style>
