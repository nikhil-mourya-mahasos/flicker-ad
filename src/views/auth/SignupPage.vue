<template>
  <!-- Modal toggle -->

  <!-- Main modal -->
  <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative p-6 bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="p-4 md:p-5 rounded-t">
          <h3 class="text-lg my-3 font-semibold text-gray-900 dark:text-white">
            Enter Your<span>{{ isPhone ? " Phone Number to" : " E-Mail to OTP" }}</span>
            Sign Up
          </h3>
          <div class="center w-full">
            <div v-if="isPhone" class="relative w-4/5">
              <!-- Select Dropdown with Image Options -->
              <select
                class="absolute inset-y-0 left-0 pl-3 pr-6 rounded-l-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white text-sm">
                <option
                  data-image="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                  value="1">
                  Option 1
                </option>
                <option data-image="https://via.placeholder.com/20" value="2">
                  Option 2
                </option>
                <option data-image="https://via.placeholder.com/20" value="3">
                  Option 3
                </option>
              </select>

              <!-- Input Field -->
              <input type="text"
                class="pl-28 w-full pr-3 rounded-r-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white text-sm"
                placeholder="enter your Phone Number" />
            </div>
            <div v-if="!isPhone" class="relative w-4/5">
              <!-- Select Dropdown with Image Options -->
              <div class="absolute center h-full bg-gray-300 px-3 left-0 rounded-l-md border-gray-300 text-sm">
                <div class="">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M16.887 0.139984C17.301 -0.0108586 17.7494 -0.0404016 18.1796 0.0548274C18.6097 0.150056 19.0038 0.3661 19.3154 0.677567C19.627 0.989034 19.8433 1.38298 19.9387 1.81311C20.0341 2.24323 20.0048 2.69167 19.8542 3.1057L14.7485 18.4086C14.6242 18.7846 14.4056 19.1225 14.1134 19.3899C13.8213 19.6572 13.4654 19.8452 13.0799 19.9357C12.6952 20.0294 12.2929 20.0215 11.9122 19.9128C11.5315 19.8041 11.1856 19.5983 10.9085 19.3157L8.16845 16.5886L5.29131 18.0771C5.18102 18.1343 5.05772 18.1618 4.93359 18.1567C4.80945 18.1517 4.68878 18.1144 4.58347 18.0485C4.47817 17.9825 4.39188 17.8903 4.33313 17.7808C4.27437 17.6714 4.24519 17.5485 4.24845 17.4243L4.36702 12.8757L14.4313 5.5657C14.5262 5.49675 14.6067 5.40979 14.668 5.30977C14.7293 5.20974 14.7703 5.09862 14.7887 4.98275C14.807 4.86687 14.8024 4.74851 14.775 4.63443C14.7477 4.52035 14.6981 4.41277 14.6292 4.31784C14.5602 4.22291 14.4733 4.1425 14.3732 4.08118C14.2732 4.01986 14.1621 3.97885 14.0462 3.96047C13.9303 3.9421 13.812 3.94673 13.6979 3.9741C13.5838 4.00147 13.4762 4.05104 13.3813 4.11998L3.14702 11.5543L0.675594 9.08284C0.409241 8.81641 0.212872 8.48828 0.103956 8.12764C-0.00496057 7.76699 -0.023046 7.38502 0.0513082 7.0157C0.126068 6.61193 0.306913 6.23532 0.575284 5.92452C0.843655 5.61373 1.18989 5.37993 1.57845 5.24713H1.58274L16.8856 0.138556L16.887 0.139984Z"
                      fill="#008080" />
                  </svg>
                </div>
              </div>

              <!-- Input Field -->
              <input type="text" class="pl-16 w-full pr-3 border-gray-300 bg-white text-sm"
                placeholder="enter your email" />
            </div>
          </div>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <h3 class="text-left">Enter Code</h3>
          <div class="center">
            <div class="flex gap-2">
              <input type="text" maxlength="1"
                class="w-12 h-12 border-[#008080] border-1 rounded-md text-center text-lg focus:outline-none focus:border-[#008080]"
                placeholder="" />
              <input type="text" maxlength="1"
                class="w-12 h-12 border-[#008080] border-1 rounded-md text-center text-lg focus:outline-none focus:border-[#008080]"
                placeholder="" />
              <input type="text" maxlength="1"
                class="w-12 h-12 border-[#008080] border-1 rounded-md text-center text-lg focus:outline-none focus:border-[#008080]"
                placeholder="" />
              <input type="text" maxlength="1"
                class="w-12 h-12 border-[#008080] border-1 rounded-md text-center text-lg focus:outline-none focus:border-[#008080]"
                placeholder="" />
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <p class="text-gray-500 text-left">
          Resend Code in <span class="text-black">20</span>
        </p>
        <div class="flex items-center justify-center p-4 md:p-5 rounded-b dark:border-gray-600">
          <button data-modal-hide="static-modal" type="button"
            class="text-white w-2/5 primary-bg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Verify
          </button>
        </div>
      </div>
    </div>
  </div>

  <section class="w-full overflow-hidden p-2 bg-default" :class="isModalActive ? 'blur-sm' : 'blur-none'">
    <div class="md:container p-2 lg:p-5 mx-auto">
      <div class="grid p-3 gap-16 xl:grid-cols-9 lg:grid-cols-9 md:grid-cols-9">
        <div class="xl:col-span-5 xl:block lg:block lg:col-span-5 md:hidden sm:hidden xs:hidden xxs:hidden rounded-xl">
          <div class="p-5">
            <div class="center">
              <img class="" src="@/assets/amico.png" />
            </div>
          </div>
        </div>

        <div
          class="xl:col-span-4 lg:col-span-4 md:col-span-9 sm:col-span-9 xl:p-5 lg:p-5 md:p-5 p-5 form-bg drop-shadow-md rounded-xl">
          <h3 class="text-2xl text-center">Create FPAds Account</h3>

          <form class="">
            <div class="my-4 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <DynamicInput :placeholder="'Ex.John'" :isLabel="true" :isRequired="true"
                  :requiredMessage="'First name'" :name="'firstname'" :label="'Enter Your First Name'"
                  :labelPosition="'top'" :icon="'person'" />
              </div>
              <div>
                <DynamicInput :placeholder="'Ex.Doe'" :isLabel="true" :isRequired="true" :requiredMessage="'Last name'"
                  :name="'lastname'" :label="'Enter Your Last Name'" :labelPosition="'top'" :icon="'person'" />
              </div>

            </div>
            <div class="my-4">
              <DynamicInput :placeholder="'Ex. Ramman12'" :isLabel="true" :isTooltip="true" :isRequired="true"
                :tooltipContent="'tooltip string for username'" :label="'Choose Username'" :requiredMessage="'Username'"
                :name="'userName'" :labelPosition="'top'" :icon="'person'" />
            </div>
            <div class="my-4 relative">
              <div class="absolute cursor-pointer top-0 right-10 color-primary text-blue-500 center gap-2">
                <span class="inline"><svg width="10" height="16" viewBox="0 0 10 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L8 0C8.53043 0 9.03914 0.210714 9.41421 0.585786C9.78929 0.960859 10 1.46957 10 2V14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM6 13C6 12.7348 5.89464 12.4804 5.70711 12.2929C5.51957 12.1054 5.26522 12 5 12C4.73478 12 4.48043 12.1054 4.29289 12.2929C4.10536 12.4804 4 12.7348 4 13C4 13.2652 4.10536 13.5196 4.29289 13.7071C4.48043 13.8946 4.73478 14 5 14C5.26522 14 5.51957 13.8946 5.70711 13.7071C5.89464 13.5196 6 13.2652 6 13Z"
                      fill="#0069B5" />
                  </svg>
                </span>
                <span class="inline" @click="isPhone = !isPhone">{{ isPhone ? "Use Email" : "Use Phone" }}
                </span>
              </div>
              <DynamicInput v-if="!isPhone" :placeholder="'Ex.Ramman@gmail.com'" @change="verifyMailContact"
                :name="'email'" :isLabel="true" :isRequired="true" :isTooltip="true" :requiredMessage="'E-mail'"
                :tooltipContent="'tooltip string email verify'" :label="'Enter Email'" :labelPosition="'top'"
                :icon="'mail'" />
              <div v-else class="flex justify-start items-center gap-5 relative text-left">
                <div>
                  <label for="flag" class="block font-bold text-xs text-gray-900">Select Country</label>
                  <select id="flag" v-model="selectedCountry" class="mt-2 border rounded-lg p-1 h-9 bg-transparent border-gray-300">
                    <option v-for="country in countries" :key="country.code" :value="country.code">
                      <span class="flex items-center text-xs">
                        <!-- <img :srcset="country.flag" :src="country.flag" alt="" class="inline" /> -->
                        <object :data="country.flag" width="30" height="30"> </object>

                        {{ country.name }}
                      </span>
                    </option>
                  </select>
                </div>
                <DynamicInput class="flex-grow" :placeholder="'Ex.4477292003'" @change="verifyMailContact"
                  :name="'contactNumber'" :requiredMessage="'Contact Number'" :isLabel="true" :isRequired="true"
                  :isTooltip="true" :tooltipContent="'tooltip string contact number'" :label="'Enter Phone Number'"
                  :labelPosition="'top'" :icon="'call'" />
              </div>

            </div>
            <div class="my-4">
              <DynamicInput :placeholder="'Ex.*****'" :isLabel="true" :name="'password'" :label="'Password'"
                :requiredMessage="'Password'" :labelPosition="'top'" :isRequired="true" :icon="'lock'" />
            </div>
            <div class="relative w-full flex justify-start gap-1 items-baseline my-2">
              <div class="w-12 h-5">
                <CustomCheckbox v-model="isTermsAccpeted" :is-label="false" label="Accept Terms and Conditions" />
              </div>
              <div class="text-gray-500 text-sm text-left">
                By clicking register, you agree to our
                <span class="text-[#008080] inline-block">Terms of Use</span> and
                <span class="text-[#008080] inline-block">Privacy Policy</span>
              </div>
            </div>
            <div class="w-full my-5 flex justify-center gap-5 items-center">
              <button class="primary-bg w-1/2 py-3 text-white rounded-xl p-1 px-5 focus:outline-none">
                <p class="flex justify-center gap-2 md:gap-5">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 0.5C12.9391 0.5 11.9217 0.921427 11.1716 1.67157C10.4214 2.42172 10 3.43913 10 4.5C10 5.56087 10.4214 6.57828 11.1716 7.32843C11.9217 8.07857 12.9391 8.5 14 8.5C15.0609 8.5 16.0783 8.07857 16.8284 7.32843C17.5786 6.57828 18 5.56087 18 4.5C18 3.43913 17.5786 2.42172 16.8284 1.67157C16.0783 0.921427 15.0609 0.5 14 0.5ZM14 2.4C14.2758 2.4 14.5489 2.45432 14.8036 2.55985C15.0584 2.66539 15.2899 2.82007 15.4849 3.01508C15.6799 3.21008 15.8346 3.44158 15.9401 3.69636C16.0457 3.95115 16.1 4.22422 16.1 4.5C16.1 4.77578 16.0457 5.04885 15.9401 5.30364C15.8346 5.55842 15.6799 5.78992 15.4849 5.98492C15.2899 6.17993 15.0584 6.33461 14.8036 6.44015C14.5489 6.54568 14.2758 6.6 14 6.6C13.7242 6.6 13.4511 6.54568 13.1964 6.44015C12.9416 6.33461 12.7101 6.17993 12.5151 5.98492C12.3201 5.78992 12.1654 5.55842 12.0599 5.30364C11.9543 5.04885 11.9 4.77578 11.9 4.5C11.9 3.94305 12.1212 3.4089 12.5151 3.01508C12.9089 2.62125 13.443 2.4 14 2.4ZM3 3.5V6.5H0V8.5H3V11.5H5V8.5H8V6.5H5V3.5H3ZM14 9.5C11.33 9.5 6 10.83 6 13.5V16.5H22V13.5C22 10.83 16.67 9.5 14 9.5ZM14 11.4C16.97 11.4 20.1 12.86 20.1 13.5V14.6H7.9V13.5C7.9 12.86 11 11.4 14 11.4Z"
                        fill="white" />
                    </svg>
                  </span>
                  Sign Up
                </p>
              </button>
            </div>
          </form>

          <div class="w-full my-5 text-center">
            <p class="text-gray-500 rounded-xl p-1 focus:outline-none">
              Already have an account?
              <router-link class="text-[#008080] inline-block" to="/signin">Sign in here</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DynamicInput from "@/components/DynamicInput.vue";
import CustomCheckbox from "@/components/CustomCheckbox.vue";
import { Modal } from "flowbite";

export default {
  name: "SignUp",
  components: {
    DynamicInput,
    CustomCheckbox
  },
  data() {
    return {
      targetEl: undefined,
      options: undefined,
      instanceOptions: undefined,
      modal: undefined,
      isPhone: false,
      isModalActive: true,
      isTermsAccpeted: false,
      selectedCountry: 'US',
      countries: [
        { code: 'US', name: 'USA', flag: 'https://flagcdn.com/us.svg' },
        { code: 'CA', name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
      ],

    };
  },
  mounted() {
    // set the modal menu element
    // console.log(document.getElementById("static-modal"));
    this.targetEl = document.getElementById("static-modal");
    // console.log(this.$targetEl);
    // options with default values

    //closable: false on production & validation
    this.options = {
      placement: "bottom-right",
      backdrop: "dynamic",
      backdropClasses: "bg-gray-300/50 dark:bg-gray-300/80 fixed inset-0 z-40",
      closable: true,
      onHide: () => {
        console.log("modal is hidden");
        this.isModalActive = false;
      },
      onShow: () => {
        console.log("modal is shown");
      },
      onToggle: () => {
        console.log("modal has been toggled");
      },
    };

    // instance options object
    this.instanceOptions = {
      id: "static-modal",
      override: true,
    };
    this.modal = new Modal(this.targetEl, this.options, this.instanceOptions);
    this.isModalActive = false;
    // this.modal.show();

    //flag slect on contact number
    // let select = document.querySelector("select");
    // select.addEventListener("change", function () {
    //   let option = select.options[select.selectedIndex];
    //   let imageSrc = option.getAttribute("data-image");
    //   document.querySelector(".select-img").src = imageSrc;
    // });
  },
  methods: {
    verifyMailContact() {
      this.modal.show();
      this.isModalActive = true;
    },
    hideVerifyModal() {
      this.modal.hide();
      this.isModalActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-bg {
  background: #fafafc;
}
</style>
