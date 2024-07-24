<script setup>
import { ref } from "vue";
// import DynamicInput from "@/components/DynamicInput.vue";
import PicturesCollage from "@/components/PicturesCollage.vue"
import JoinCourseCard from "@/components/Business/Trainer/JoinCourseCard.vue";
import CourseFeeCard from "@/components/Business/Trainer/CourseFeeCard.vue";
import ReviewCard from "@/components/Business/Trainer/ReviewCard.vue";
import TrainerCard from "@/components/Business/Trainer/TrainerCard.vue";



const imgList = [
  "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
  "https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg",
  "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
  "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
  "https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg",
  "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24062.jpg",
  "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
]

const tabs = ["About Us", "Trainer/Tutors", "Courses & Fee", "Reviews"];
let activeTabIndex = ref(0);

const toggleTab = (index) => {
  activeTabIndex.value = index;
}
</script>
<template>
  <section class="mx-14 m-5 mb-10 p-5 rounded-lg bg">
    <section class="grid grid-cols-7 gap-4">
      <div class="col-span-4">
        <PicturesCollage :img-list="imgList" />
      </div>
      <div class="col-span-3">
        <div>
          <div class="text-left">
            <h2 class="text-md font-semibold">Peak Builder & Roofers of San Diego</h2>
            <div class="flex items-center">
              <div class="flex justify-start items-center">
                <div class="mx-2">
                  <span class="text-yellow-500 text-md font-medium">5.0</span>
                </div>
                <div class="flex gap-1">
                  <div v-for="item in 5" :key="item">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                        fill="#FB9938" />
                    </svg>
                  </div>
                </div>
                <div class="mx-2">
                  <span class="text-gray-600 text-sm ml-1">(6)</span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 p-3 text-sm my-3 border rounded-lg">
            <div class="flex justify-start gap-2 ">
              <div class="center"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.99906 20.42L2.78906 14.21L5.61906 11.38L8.99906 14.77L18.8791 4.88L21.7091 7.71L8.99906 20.42Z"
                    fill="#008080" />
                </svg>
              </div>
              <p class=" whitespace-nowrap">Free Consultation</p>
            </div>
            <div class="flex justify-start gap-2 ">
              <div class="center"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.99906 20.42L2.78906 14.21L5.61906 11.38L8.99906 14.77L18.8791 4.88L21.7091 7.71L8.99906 20.42Z"
                    fill="#008080" />
                </svg>
              </div>
              <p class=" whitespace-nowrap">Virtual Consultation</p>
            </div>
            <div class="flex justify-start gap-2 ">
              <div class="center"><svg width="13" height="13" viewBox="0 0 18 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.95 18C14.8667 18 12.8083 17.546 10.775 16.638C8.74167 15.73 6.89167 14.4423 5.225 12.775C3.55833 11.1077 2.271 9.25767 1.363 7.225C0.455 5.19233 0.000666667 3.134 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0793332 5.725 0.238C5.90833 0.396667 6.01667 0.584 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.704 9.11233 5.162 9.687C5.62 10.2617 6.12433 10.816 6.675 11.35C7.19167 11.8667 7.73333 12.346 8.3 12.788C8.86667 13.23 9.46667 13.634 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1377 17.775 12.313C17.925 12.4883 18 12.684 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                    fill="#008080" />
                </svg>

              </div>
              <p class=" whitespace-nowrap">24/7 on Call Service</p>
            </div>
            <div class="flex justify-start gap-2 ">
              <div class="center"><svg width="15" height="15" viewBox="0 0 10 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 12H2C2 13.08 3.37 14 5 14C6.63 14 8 13.08 8 12C8 10.9 6.96 10.5 4.76 9.97C2.64 9.44 0 8.78 0 6C0 4.21 1.47 2.69 3.5 2.18V0H6.5V2.18C8.53 2.69 10 4.21 10 6H8C8 4.92 6.63 4 5 4C3.37 4 2 4.92 2 6C2 7.1 3.04 7.5 5.24 8.03C7.36 8.56 10 9.22 10 12C10 13.79 8.53 15.31 6.5 15.82V18H3.5V15.82C1.47 15.31 0 13.79 0 12Z"
                    fill="#008080" />
                </svg>
              </div>
              <p class=" whitespace-nowrap">80/hr</p>
            </div>
          </div>
          <!-- <div class="text-sm mt-2 font-bold text-black text-left">
            <div class="flex justify-start gap-2 ">
              <div class="center"><svg width="12" height="12" viewBox="0 0 17 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.50313 13.0167L0.328125 7.84165L2.68646 5.48332L5.50313 8.30832L13.7365 0.0666504L16.0948 2.42498L5.50313 13.0167Z"
                    fill="black" />
                </svg>
              </div>
              <p class=" whitespace-nowrap">Licensed<span class="text-gray-400"> (#234235235)</span></p>

            </div>
            <p class="px-4 whitespace-nowrap font-semibold my-2"><span class="text-gray-400">CA State Class B General
                Building Contractor
                License</span></p>

          </div> -->

        </div>

        <div class="text-left px-4">
          <div class="mb-2">
            <h3 class="text-sm font-semibold my-1">Training Hours</h3>
            <p class="text-xs text-gray-600">Monday - Friday: 7:30 AM - 5:00 PM</p>
            <p class="text-xs text-gray-600">Saturday - Sunday: Closed</p>
          </div>
          <div class=" ">
            <h3 class="text-sm font-semibold my-1">Location</h3>
            <p class="text-gray-600 text-xs">2901 West Coast Highway, Newport Beach, CA</p>
          </div>
        </div>
        <div class="mt-4 flex justify-around opacity-50 ">
          <button class="flex gap-2 focus:outline-none">
            <div class="center">
              <span>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.4053 6.03427C12.8755 6.03427 14.2854 6.61829 15.325 7.65785C16.3645 8.69741 16.9486 10.1074 16.9486 11.5775M10.2969 1.6665C10.6646 1.62165 11.0348 1.59944 11.4053 1.59999C14.0515 1.59999 16.5893 2.65119 18.4605 4.52234C20.3316 6.39349 21.3829 8.93132 21.3829 11.5775C21.3829 11.9482 21.3607 12.3177 21.3163 12.686"
                    stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M14.7337 21.5551C13.0151 21.1454 11.385 20.4278 9.92212 19.4372L11.94 16.5445C12.2717 16.0918 12.7628 15.7818 13.3141 15.6769C13.8655 15.572 14.4361 15.6801 14.9109 15.9794C15.277 16.2119 15.6538 16.4227 16.0199 16.6334C16.2952 16.7681 16.5397 16.9583 16.7378 17.1923C16.9359 17.4262 17.0834 17.6986 17.1709 17.9924C17.2584 18.2862 17.2841 18.5949 17.2462 18.8991C17.2084 19.2033 17.1079 19.4963 16.9511 19.7597L16.2636 20.8133C16.1405 21.1004 15.9181 21.3334 15.6371 21.4698C15.3561 21.6061 15.0353 21.6361 14.7337 21.5551ZM2.17317 6.77772L3.28161 6.08967C3.53871 5.92281 3.82762 5.81107 4.13009 5.76149C4.43257 5.71192 4.74203 5.72559 5.03895 5.80165C5.33587 5.8777 5.6138 6.01449 5.85519 6.20337C6.09658 6.39225 6.29619 6.62913 6.44143 6.89905C6.65215 7.29815 6.86234 7.67543 7.09542 8.00802C7.39463 8.48287 7.50264 9.05352 7.39766 9.60487C7.29268 10.1562 6.98253 10.6473 6.52976 10.9789L3.5812 13.0298C2.58261 11.5795 1.85397 9.96085 1.43031 8.25174C1.364 7.95802 1.40185 7.65038 1.53736 7.38149C1.67288 7.1126 1.89763 6.89917 2.17317 6.77772Z"
                    stroke="#306CFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M3.57812 13.0303C4.39315 14.3077 5.35291 15.4867 6.43835 16.544C7.49579 17.6294 8.675 18.5892 9.95258 19.4042"
                    stroke="#306CFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></span>
            </div>

            <div>Call</div>
          </button>
          <button class="flex gap-2 focus:outline-none">
            <div class="center">
              <span>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.1693 5.50002C20.1693 4.49169 19.3443 3.66669 18.3359 3.66669H3.66927C2.66094 3.66669 1.83594 4.49169 1.83594 5.50002V16.5C1.83594 17.5084 2.66094 18.3334 3.66927 18.3334H18.3359C19.3443 18.3334 20.1693 17.5084 20.1693 16.5V5.50002ZM18.3359 5.50002L11.0026 10.0834L3.66927 5.50002H18.3359ZM18.3359 16.5H3.66927V7.33335L11.0026 11.9167L18.3359 7.33335V16.5Z"
                    fill="black" />
                </svg></span>
            </div>
            <div><span>Email</span></div>
          </button>
          <button class="flex gap-2 items-center focus:outline-none">
            <div class="center items-center">
              <span><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 2.2778C0 1.8063 0.187303 1.35411 0.520705 1.02071C0.854107 0.687303 1.3063 0.5 1.7778 0.5H16.0002C16.4717 0.5 16.9239 0.687303 17.2573 1.02071C17.5907 1.35411 17.778 1.8063 17.778 2.2778V12.0557C17.778 12.5272 17.5907 12.9794 17.2573 13.3128C16.9239 13.6462 16.4717 13.8335 16.0002 13.8335H11.9237L9.51745 16.2397C9.35075 16.4064 9.1247 16.5 8.88899 16.5C8.65329 16.5 8.42724 16.4064 8.26054 16.2397L5.85429 13.8335H1.7778C1.3063 13.8335 0.854107 13.6462 0.520705 13.3128C0.187303 12.9794 0 12.5272 0 12.0557V2.2778ZM16.0002 2.2778H1.7778V12.0557H6.2223C6.45803 12.0557 6.68409 12.1494 6.85075 12.3161L8.88899 14.3544L10.9272 12.3161C11.0939 12.1494 11.32 12.0557 11.5557 12.0557H16.0002V2.2778ZM3.5556 5.38895C3.5556 5.1532 3.64925 4.9271 3.81595 4.7604C3.98265 4.5937 4.20875 4.50005 4.4445 4.50005H13.3335C13.5692 4.50005 13.7953 4.5937 13.962 4.7604C14.1287 4.9271 14.2224 5.1532 14.2224 5.38895C14.2224 5.6247 14.1287 5.85079 13.962 6.01749C13.7953 6.18419 13.5692 6.27785 13.3335 6.27785H4.4445C4.20875 6.27785 3.98265 6.18419 3.81595 6.01749C3.64925 5.85079 3.5556 5.6247 3.5556 5.38895ZM3.5556 8.94454C3.5556 8.70879 3.64925 8.4827 3.81595 8.316C3.98265 8.1493 4.20875 8.05565 4.4445 8.05565H9.77789C10.0136 8.05565 10.2397 8.1493 10.4064 8.316C10.5731 8.4827 10.6668 8.70879 10.6668 8.94454C10.6668 9.1803 10.5731 9.40639 10.4064 9.57309C10.2397 9.73979 10.0136 9.83344 9.77789 9.83344H4.4445C4.20875 9.83344 3.98265 9.73979 3.81595 9.57309C3.64925 9.40639 3.5556 9.1803 3.5556 8.94454Z"
                    fill="black" />
                </svg></span>
            </div>
            <div><span>Message</span></div>
          </button>
          <div class="center cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.412 10.6667C12.4786 10.1167 12.5286 9.56666 12.5286 8.99999C12.5286 8.43332 12.4786 7.88332 12.412 7.33332H15.2286C15.362 7.86666 15.4453 8.42499 15.4453 8.99999C15.4453 9.57499 15.362 10.1333 15.2286 10.6667M10.937 15.3C11.437 14.375 11.8203 13.375 12.087 12.3333H14.5453C13.738 13.7236 12.4571 14.7767 10.937 15.3ZM10.7286 10.6667H6.82865C6.74531 10.1167 6.69531 9.56666 6.69531 8.99999C6.69531 8.43332 6.74531 7.87499 6.82865 7.33332H10.7286C10.8036 7.87499 10.862 8.43332 10.862 8.99999C10.862 9.56666 10.8036 10.1167 10.7286 10.6667ZM8.77865 15.6333C8.08698 14.6333 7.52865 13.525 7.18698 12.3333H10.3703C10.0286 13.525 9.47031 14.6333 8.77865 15.6333ZM5.44531 5.66666H3.01198C3.81085 4.27252 5.09086 3.21769 6.61198 2.69999C6.11198 3.62499 5.73698 4.62499 5.44531 5.66666ZM3.01198 12.3333H5.44531C5.73698 13.375 6.11198 14.375 6.61198 15.3C5.09387 14.7769 3.81555 13.7235 3.01198 12.3333ZM2.32865 10.6667C2.19531 10.1333 2.11198 9.57499 2.11198 8.99999C2.11198 8.42499 2.19531 7.86666 2.32865 7.33332H5.14531C5.07865 7.88332 5.02865 8.43332 5.02865 8.99999C5.02865 9.56666 5.07865 10.1167 5.14531 10.6667M8.77865 2.35832C9.47031 3.35832 10.0286 4.47499 10.3703 5.66666H7.18698C7.52865 4.47499 8.08698 3.35832 8.77865 2.35832ZM14.5453 5.66666H12.087C11.8258 4.63466 11.4396 3.63841 10.937 2.69999C12.4703 3.22499 13.7453 4.28332 14.5453 5.66666ZM8.77865 0.666656C4.17031 0.666656 0.445312 4.41666 0.445312 8.99999C0.445312 11.2101 1.32329 13.3297 2.88609 14.8925C3.65991 15.6664 4.57857 16.2802 5.58962 16.699C6.60066 17.1178 7.6843 17.3333 8.77865 17.3333C10.9888 17.3333 13.1084 16.4553 14.6712 14.8925C16.234 13.3297 17.112 11.2101 17.112 8.99999C17.112 7.90564 16.8964 6.82201 16.4776 5.81096C16.0589 4.79991 15.445 3.88125 14.6712 3.10743C13.8974 2.33361 12.9787 1.71978 11.9677 1.30099C10.9566 0.882205 9.87299 0.666656 8.77865 0.666656Z"
                fill="#232323" fill-opacity="0.5" />
            </svg>

          </div>
          <div class="center cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7623 15.025 18.637C15.0417 18.5117 15.0667 18.3993 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.646 7.1 14.788C6.75 14.93 6.38333 15.0007 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.071 7.1 9.213C7.45 9.355 7.76667 9.55067 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.48767 15.025 5.363C15.0083 5.23833 15 5.11733 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92933 16.9 7.788C16.55 7.64667 16.2333 7.45067 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5127 8.975 11.638C8.99167 11.7633 9 11.884 9 12C9 12.116 8.99167 12.237 8.975 12.363C8.95833 12.489 8.93333 12.6013 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3543 16.9 16.213C17.25 16.0717 17.6167 16.0007 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22ZM18 6C18.2833 6 18.521 5.90433 18.713 5.713C18.905 5.52167 19.0007 5.284 19 5C18.9993 4.716 18.9033 4.47867 18.712 4.288C18.5207 4.09733 18.2833 4.00133 18 4C17.7167 3.99867 17.4793 4.09467 17.288 4.288C17.0967 4.48133 17.0007 4.71867 17 5C16.9993 5.28133 17.0953 5.519 17.288 5.713C17.4807 5.907 17.718 6.00267 18 6ZM6 13C6.28333 13 6.521 12.904 6.713 12.712C6.905 12.52 7.00067 12.2827 7 12C6.99933 11.7173 6.90333 11.48 6.712 11.288C6.52067 11.096 6.28333 11 6 11C5.71667 11 5.47933 11.096 5.288 11.288C5.09667 11.48 5.00067 11.7173 5 12C4.99933 12.2827 5.09533 12.5203 5.288 12.713C5.48067 12.9057 5.718 13.0013 6 13ZM18 20C18.2833 20 18.521 19.904 18.713 19.712C18.905 19.52 19.0007 19.2827 19 19C18.9993 18.7173 18.9033 18.48 18.712 18.288C18.5207 18.096 18.2833 18 18 18C17.7167 18 17.4793 18.096 17.288 18.288C17.0967 18.48 17.0007 18.7173 17 19C16.9993 19.2827 17.0953 19.5203 17.288 19.713C17.4807 19.9057 17.718 20.0013 18 20Z"
                fill="#232323" fill-opacity="0.5" />
            </svg>
          </div>
        </div>

      </div>
    </section>
    <section class="grid grid-cols-9 gap-4 my-3">
      <div class="col-span-5 text-left">
        <section>
          <div
            class="text-sm text-center text-black font-bold border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
              <li class="me-2" v-for="item, index in tabs" :key="index">
                <span @click="toggleTab(index)"
                  :class="activeTabIndex === index ? 'text-teal-400 border-teal-400 border-b-2' : 'text-black'"
                  class="inline-block p-2 cursor-pointer  rounded-t-lg  hover:border-teal-400 ">{{ item }}</span>
              </li>
              <!-- <li class="me-2">
                <a href="#"
                  class="inline-block p-4  border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  aria-current="page">Dashboard</a>
              </li> -->
              <!-- <li>
                <a
                  class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
              </li> -->
            </ul>
          </div>

        </section>
        <section>
          <TrainerCard />
          <CourseFeeCard />
          <ReviewCard />
        </section>
      </div>
      <div class="col-span-4">
        <JoinCourseCard :title="'Spring Boot Full Stack Course Online Starting Soon'" :fees="'2344'" :duration="'2'"
          :img="'https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg'" />
      </div>
    </section>
  </section>
</template>
<style>
.bg {
  background-color: #ffffff;
}
</style>
