<template>
  <section class="w-full overflow-hidden xl:p-10 md:p-10 p-5 sm:p-3 bg-default">
    <div class="container mx-auto flex justify-center items-center">
      <div class="xl:w-2/5 md:w-3/5 form-bg drop-shadow-md rounded-xl">
        <div class="xl:p-5 md:p-2 p-2">
          <div class="center">
            <span>
              <svg
                class="h-30 w-30"
                width="50"
                height="50"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_274_3845)">
                  <path
                    d="M35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0ZM34.7479 16.0217C39.4745 16.0442 43.7947 19.0583 45.6299 23.2636C46.2577 24.7283 46.5912 26.2329 46.5912 27.865V32.0265H52.3248V53.9783H17.6752V32.0263H22.9474C22.8996 29.086 22.8391 25.7223 23.8702 23.2635C25.8752 18.8354 30.0214 15.9992 34.7479 16.0217ZM34.4916 23.0114C31.8735 23.0665 30.1469 25.0574 29.8943 27.8649V32.0263H39.6441V27.8223C39.5239 25.1599 37.5089 23.0848 34.7478 23.0114C34.6624 23.0094 34.577 23.0094 34.4916 23.0114Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_274_3845">
                    <rect width="70" height="70" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div class="px-5">
            <h3
              class="xl:text-2xl md:text-xl text-lg text-center font-semibold text-black"
            >
              Trouble Logging in ?
            </h3>
            <p class="text-center text-black">
              Enter your email, phone, or username and we'll send you a link to get back
              into your account.
            </p>
          </div>

          <form class="">
            <div class="my-4">
              <DynamicInput
                :placeholder="'Email, Username'"
                :label="'Enter Email or Phone'"
                :isLabel="false"
                :labelPosition="'top'"
              />
            </div>
            <div class="w-full my-5 flex justify-center gap-5 items-center">
              <button
                class="primary-bg w-full py-3 text-white rounded-xl p-1 px-5 focus:outline-none"
              >
                <p class="flex justify-center gap-5">Send Login Link</p>
              </button>
            </div>
          </form>
          <div class="w-full center gap-5 my-16 items-center">
            <div class="w-[48%] h-[1px] bg-black"></div>
            <div class="w-[4%]">OR</div>
            <div class="w-[48%] h-[1px] bg-black"></div>
          </div>
          <div class="w-full my-1 text-center">
            <p class="text-black rounded-xl p-1 focus:outline-none">
              <router-link class="text-black" to="/signup"
                >Create new account</router-link
              >
            </p>
          </div>
        </div>
        <div class="m-0 py-3 w-full bg-gray-200 text-center rounded-b-md">
          <p class="text-black rounded-xl p-1 focus:outline-none font-semibold text-md">
            <router-link class="text-black" to="/signin">Back to Login</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DynamicInput from "@/components/DynamicInput.vue";

export default {
  name: "ForgotView",
  components: {
    DynamicInput,
  },
};
</script>

<style lang="scss" scoped>
.form-bg {
  background: #fafafc;
}
</style>
