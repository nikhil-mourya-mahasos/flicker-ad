<template>
  <section class="w-full overflow-hidden p-10 bg-default">
    <div class="container mx-auto md:px-20">
      <div class="grid grid-flow-col xl:p-50 sm:p-50 gap-16 xl:grid-cols-9">
        <div class="bg-white hidden md:flex xl:col-span-5 md:col-span-5 rounded-xl">
          <div class="p-1">
            <div class="center">
              <img class="" src="@/assets/pana.png" />
            </div>

            <h3 class="text-2xl py-5">
              <span class="text-3xl text-primary font-semibold">FlickerPageAds</span>
              helps you connect and share with people your ads.
            </h3>
          </div>
        </div>

        <div class="xl:col-span-4 md:col-span-4  center">
          <div class="form-bg drop-shadow-md rounded-xl  xl:p-5 md:p-5 sm:p-5 p-5">
            <h3 class="lg:text-2xl sm:text-xl text-start">
              Welcome to
              <span class="lg:text-3xl sm:text-xl text-primary font-semibold">FlickerPage</span>
              Ads
            </h3>
            <!-- <div class="my-4 flex gap-5 justify-start items-center">
            <p class="">Quick Sign-In</p>
            <div class="border-gray-300 border p-1 center rounded-md">
              <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="23" height="23" fill="url(#pattern0_44_51)" />
                <defs>
                  <pattern id="pattern0_44_51" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_44_51" transform="scale(0.0078125)" />
                  </pattern>
                  <image id="image0_44_51" width="128" height="128"
                    xlink:href="data:image/png;base64,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" />
                </defs>
              </svg>
              <p class="ml-2 hidden md:flex lg:flex">Gmail</p>
            </div>
            <div class="border-gray-300 border p-1 center rounded-md">
              <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="23" height="23" fill="url(#pattern0_44_52)" />
                <defs>
                  <pattern id="pattern0_44_52" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_44_52" transform="scale(0.0078125)" />
                  </pattern>
                  <image id="image0_44_52" width="128" height="128"
                    xlink:href="data:image/png;base64,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" />
                </defs>
              </svg>
              <p class="ml-2 hidden md:flex lg:flex">Facebook</p>
            </div>
            <div class="border-gray-300 border p-1 center rounded-md">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="23" height="23" fill="url(#pattern0_44_53)" />
                <defs>
                  <pattern id="pattern0_44_53" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_44_53" transform="scale(0.0078125)" />
                  </pattern>
                  <image id="image0_44_53" width="128" height="128"
                    xlink:href="data:image/png;base64,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" />
                </defs>
              </svg>
              <p class="ml-2 hidden md:flex lg:flex">LinkedIn</p>
            </div>
          </div> -->

            <div class="">
              <div class="my-4">
                <DynamicInput :placeholder="'Enter Username'" :label="'Username'" :name="'userName'" v-model="userName"
                  :labelPosition="'top'" :icon="'person'" />
              </div>
              <div class="my-4">
                <DynamicInput :placeholder="'Enter Password'" v-model="password" :label="'Password'" :icon="'lock'"
                  :name="'password'" :labelPosition="'top'" :input-type="'passsword'" />
              </div>

              <div class="w-full my-5 flex justify-center gap-5 items-center">
                <button class="primary-bg w-1/2 py-3 text-white rounded-xl p-1 px-5 focus:outline-none"
                  @click="handleSignIn()">
                  <p class="flex justify-center gap-2 md:gap-5">
                    <span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 20V17.7778H17.7778V2.22222H10V0H17.7778C18.3889 0 18.9122 0.217778 19.3478 0.653333C19.7833 1.08889 20.0007 1.61185 20 2.22222V17.7778C20 18.3889 19.7826 18.9122 19.3478 19.3478C18.913 19.7833 18.3896 20.0007 17.7778 20H10ZM7.77778 15.5556L6.25 13.9444L9.08333 11.1111H0V8.88889H9.08333L6.25 6.05555L7.77778 4.44444L13.3333 10L7.77778 15.5556Z"
                          fill="white" />
                      </svg>
                    </span>
                    Sign In
                  </p>
                </button>
                <button class="bg-white w-1/2 py-3 text-white rounded-xl outline p-1 px-5 outline-1 outline-[#008080]">
                  <router-link to="/signup">
                    <p class="text-black flex justify-center gap-2 md:gap-5">
                      <span>
                        <svg width="20" height="20" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 0C12.9391 0 11.9217 0.421427 11.1716 1.17157C10.4214 1.92172 10 2.93913 10 4C10 5.06087 10.4214 6.07828 11.1716 6.82843C11.9217 7.57857 12.9391 8 14 8C15.0609 8 16.0783 7.57857 16.8284 6.82843C17.5786 6.07828 18 5.06087 18 4C18 2.93913 17.5786 1.92172 16.8284 1.17157C16.0783 0.421427 15.0609 0 14 0ZM14 1.9C14.2758 1.9 14.5489 1.95432 14.8036 2.05985C15.0584 2.16539 15.2899 2.32007 15.4849 2.51508C15.6799 2.71008 15.8346 2.94158 15.9401 3.19636C16.0457 3.45115 16.1 3.72422 16.1 4C16.1 4.27578 16.0457 4.54885 15.9401 4.80364C15.8346 5.05842 15.6799 5.28992 15.4849 5.48492C15.2899 5.67993 15.0584 5.83461 14.8036 5.94015C14.5489 6.04568 14.2758 6.1 14 6.1C13.7242 6.1 13.4511 6.04568 13.1964 5.94015C12.9416 5.83461 12.7101 5.67993 12.5151 5.48492C12.3201 5.28992 12.1654 5.05842 12.0599 4.80364C11.9543 4.54885 11.9 4.27578 11.9 4C11.9 3.44305 12.1212 2.9089 12.5151 2.51508C12.9089 2.12125 13.443 1.9 14 1.9ZM3 3V6H0V8H3V11H5V8H8V6H5V3H3ZM14 9C11.33 9 6 10.33 6 13V16H22V13C22 10.33 16.67 9 14 9ZM14 10.9C16.97 10.9 20.1 12.36 20.1 13V14.1H7.9V13C7.9 12.36 11 10.9 14 10.9Z"
                            fill="black" />
                        </svg>
                      </span>
                      Sign Up
                    </p>
                  </router-link>
                </button>
              </div>
            </div>

            <div class="w-full my-5 text-start">
              <p class="text-gray-500 flex justify-start gap-3 rounded-xl p-1 focus:outline-none">
                <span class=""><svg width="20" height="20" viewBox="0 0 23 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.25928 15C1.25928 12.172 1.25928 10.757 2.15727 9.879C3.05425 9 4.49983 9 7.38894 9H15.5618C18.4509 9 19.8965 9 20.7935 9.879C21.6915 10.757 21.6915 12.172 21.6915 15C21.6915 17.828 21.6915 19.243 20.7935 20.121C19.8965 21 18.4509 21 15.5618 21H7.38894C4.49983 21 3.05425 21 2.15727 20.121C1.25928 19.243 1.25928 17.828 1.25928 15Z"
                      stroke="black" stroke-opacity="0.3" stroke-width="1.5" />
                    <path opacity="0.5"
                      d="M5.3457 9V7C5.3457 5.4087 5.99151 3.88258 7.14104 2.75736C8.29058 1.63214 9.84968 1 11.4754 1C13.1011 1 14.6602 1.63214 15.8097 2.75736C16.9592 3.88258 17.605 5.4087 17.605 7V9"
                      stroke="black" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                </span>

                Forgot Password ?
                <router-link class="text-[#008080]" to="/forgot-password">click here</router-link>
              </p>
              <p class="text-gray-500 rounded-xl p-1 flex justify-start gap-3">
                <svg width="20" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.4125 1.5625C12.0689 1.5625 9.3584 4.22081 9.3584 7.5C9.3584 10.7792 12.0689 13.4375 15.4125 13.4375C18.7562 13.4375 21.4667 10.7792 21.4667 7.5C21.4667 4.22081 18.7562 1.5625 15.4125 1.5625ZM11.2702 7.5C11.2702 5.25634 13.1248 3.4375 15.4125 3.4375C17.7002 3.4375 19.5548 5.25634 19.5548 7.5C19.5548 9.74366 17.7002 11.5625 15.4125 11.5625C13.1248 11.5625 11.2702 9.74366 11.2702 7.5Z"
                    fill="#232323" fill-opacity="0.3" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.4125 15.3125C12.4638 15.3125 9.74706 15.9699 7.73392 17.0804C5.75076 18.1745 4.26017 19.8326 4.26017 21.875L4.2601 22.0025C4.25866 23.4547 4.25685 25.2775 5.88703 26.5794C6.68933 27.2201 7.8117 27.6758 9.32808 27.9769C10.8487 28.2786 12.8306 28.4375 15.4125 28.4375C17.9945 28.4375 19.9765 28.2786 21.497 27.9769C23.0134 27.6758 24.1357 27.2201 24.9381 26.5794C26.5682 25.2775 26.5665 23.4547 26.5651 22.0025L26.5649 21.875C26.5649 19.8326 25.0743 18.1745 23.0912 17.0804C21.0781 15.9699 18.3614 15.3125 15.4125 15.3125ZM6.17201 21.875C6.17201 20.8109 6.96399 19.6564 8.67121 18.7146C10.3485 17.7894 12.73 17.1875 15.4125 17.1875C18.0951 17.1875 20.4766 17.7894 22.1539 18.7146C23.8611 19.6564 24.6531 20.8109 24.6531 21.875C24.6531 23.5098 24.6017 24.43 23.7308 25.1255C23.2586 25.5028 22.4691 25.8709 21.1177 26.1391C19.7706 26.4065 17.9288 26.5625 15.4125 26.5625C12.8963 26.5625 11.0545 26.4065 9.70737 26.1391C8.356 25.8709 7.56653 25.5028 7.09427 25.1255C6.2234 24.43 6.17201 23.5098 6.17201 21.875Z"
                    fill="#232323" fill-opacity="0.3" />
                </svg>

                Forgot Username ?
                <router-link class="text-[#008080]" to="/forgot-username">click here</router-link>
                <!-- <span class=""></span> -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DynamicInput from "@/components/DynamicInput.vue";
import router from "@/router";
// import { ref } from "vue";
// import store from "@/store/index.js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SignIn",
  components: {
    DynamicInput,
  },
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["accessToken"]),
  },
  methods: {
    ...mapActions(["handleLogin"]),
    async handleSignIn() {
      const payload = { email: this.userName, password: this.password };
      const data = await this.handleLogin(payload);
      if (data) {
        router.push("/");
      }
      console.log(data, "res from signin");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-bg {
  background: #fafafc;
}
</style>
