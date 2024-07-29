<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable prettier/prettier -->
<template>
  <section class="w-full drop-shadow-md z-50 xxs:fixed">
    <nav class="bg-white xl:p-2 xl:px-10 lg:px-6">
      <div
        class="xl:max-w-10xl mx-auto flex xl:justify-between xl:gap-32 lg:gap-24 md:gap-10 xxs:gap-4 items-center"
      >
        <!-- Logo -->
        <div class="flex xl:gap-20 lg:gap-20 md:gap-10 justify-evenly xxs:w-24 xs:w-auto">
          <div class="flex justify-center items-center xxs:gap-6">
            <div class="relative center hidden">
              <div class="xs:hidden xxs:block cursor-pointer" @click="toggleNav">
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 2.03125C0 1.65829 0.148158 1.3006 0.411881 1.03688C0.675604 0.773158 1.03329 0.625 1.40625 0.625H28.5938C28.9667 0.625 29.3244 0.773158 29.5881 1.03688C29.8518 1.3006 30 1.65829 30 2.03125C30 2.40421 29.8518 2.7619 29.5881 3.02562C29.3244 3.28934 28.9667 3.4375 28.5938 3.4375H1.40625C1.03329 3.4375 0.675604 3.28934 0.411881 3.02562C0.148158 2.7619 0 2.40421 0 2.03125ZM0 10C0 9.62704 0.148158 9.26935 0.411881 9.00563C0.675604 8.74191 1.03329 8.59375 1.40625 8.59375H28.5938C28.9667 8.59375 29.3244 8.74191 29.5881 9.00563C29.8518 9.26935 30 9.62704 30 10C30 10.373 29.8518 10.7306 29.5881 10.9944C29.3244 11.2581 28.9667 11.4062 28.5938 11.4062H1.40625C1.03329 11.4062 0.675604 11.2581 0.411881 10.9944C0.148158 10.7306 0 10.373 0 10ZM1.40625 16.5625C1.03329 16.5625 0.675604 16.7107 0.411881 16.9744C0.148158 17.2381 0 17.5958 0 17.9688C0 18.3417 0.148158 18.6994 0.411881 18.9631C0.675604 19.2268 1.03329 19.375 1.40625 19.375H28.5938C28.9667 19.375 29.3244 19.2268 29.5881 18.9631C29.8518 18.6994 30 18.3417 30 17.9688C30 17.5958 29.8518 17.2381 29.5881 16.9744C29.3244 16.7107 28.9667 16.5625 28.5938 16.5625H1.40625Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div
                id="toggle-view"
                class="block xs:hidden transition-all duration-150 absolute top-10 -left-[400px] h-[100vh] w-80 border border-black bg-white"
              >
                <div class="flex flex-col p-0">
                  <div class="flex justify-end text-sm p-1">
                    <div class="flex justify-end p-3 cursor-pointer" @click="toggleNav()">
                      <span
                        ><svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 15L0 13.5L6 7.5L0 1.5L1.5 0L7.5 6L13.5 0L15 1.5L9 7.5L15 13.5L13.5 15L7.5 9L1.5 15Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="hidden-nav-item text-sm primary-bg text-white">
                    <!-- <p>Account</p> -->
                    <router-link
                      to="/account/notification"
                      class="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Account</router-link
                    >
                    <div class="block mx-auto"><img src="#" /></div>
                  </div>
                  <div class="hidden-nav-item text-sm">
                    <router-link :to="'/signin'">Login </router-link>
                    <div class="block mx-auto"></div>
                  </div>
                  <div class="hidden-nav-item text-sm">
                    <router-link :to="'/signup'">Sign Up </router-link>
                    <div class="block mx-auto"></div>
                  </div>
                  <div class="hidden-nav-item text-sm">
                    <p>Setting</p>
                    <div class="block mx-auto"></div>
                  </div>
                  <div class="hidden-nav-item text-sm">
                    <p>Learn</p>
                    <div class="block mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-black text-xl font-bold">
              <router-link style="color: black" class="text-black" to="/"
                >RGS</router-link
              >
            </p>
          </div>
          <div class="hidden md:block">
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
                  <p
                    class="w-20 lg:block xl:block hidden text-xs text-nowrap overflow-hidden text-primary"
                  >
                    San Diego, CA
                  </p>
                </div>

                <input
                  type="text"
                  class="xl:pl-32 lg:pl-32 md:pl-8 bg-white text-black rounded-lg border-black border px-4 py-2 md:px-2"
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
        </div>

        <div
          class="flex w-full xl:gap-8 lg:gap-6 xxs:gap-3 md:justify-end justify-around xl:mx-10"
          :class="isLoggedIn == false ? '':''"
        >
          <button v-show="isLoggedIn" class="text-gray-400 focus:outline-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 27C21.4035 27 27 21.4035 27 14.5C27 7.59644 21.4035 2 14.5 2C7.59644 2 2 7.59644 2 14.5C2 16.4996 2.46952 18.3896 3.30433 20.0656C3.52617 20.5109 3.60002 21.02 3.47139 21.5007L2.72689 24.2833C2.40369 25.4913 3.50876 26.5963 4.71669 26.2731L7.49922 25.5285C7.97991 25.4 8.489 25.4739 8.93441 25.6957C10.6105 26.5306 12.5004 27 14.5 27Z"
                stroke="black"
                stroke-width="2.22222"
              />
            </svg>
          </button>
          <button v-show="isLoggedIn" class="text-gray-400 focus:outline-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5407 28.8C10.2774 28.8 8.00317 28.8 5.77716 28.7978C4.61042 28.7978 3.54238 28.3724 2.7704 27.6003C1.99842 26.8283 1.57296 25.7581 1.57076 24.5892C1.56637 21.7403 1.56637 18.8454 1.56857 16.0449C1.56857 14.8342 1.56857 13.6215 1.56857 12.4108V10.9195C1.56857 10.9195 0.594826 11.652 0.522446 11.7113C0.270241 11.9173 0.0136461 12.1257 -0.234168 12.3275C-0.477607 12.5271 -0.729812 12.7332 -0.977641 12.935C-1.13335 13.0622 -1.30003 13.128 -1.46013 13.128C-1.62242 13.128 -1.76497 13.0556 -1.87243 12.9196C-2.13122 12.5994 -1.95577 12.2661 -1.70575 12.0622C-0.874558 11.3801 -0.0411732 10.7002 0.790017 10.0182C4.47444 7.00043 8.28169 3.88181 12.0341 0.824619C12.6964 0.285103 13.4574 0 14.2359 0C15.0146 0 15.7756 0.285102 16.4357 0.822424C19.3656 3.20853 22.3374 5.64288 25.2126 7.99609C26.8399 9.32732 28.5219 10.7046 30.1778 12.0578C30.4607 12.288 30.4804 12.4744 30.4629 12.6236C30.4212 12.9723 30.1492 13.1324 29.9123 13.1324C29.7764 13.1324 29.6426 13.0841 29.522 12.9921C29.1865 12.731 28.8487 12.4525 28.5241 12.1828C28.364 12.049 28.1973 11.9107 28.0307 11.777C27.9693 11.7266 27.9101 11.6827 27.8332 11.6257C27.7961 11.5971 27.7522 11.5665 27.7039 11.527L26.9034 10.9173V12.4086C26.9034 13.6061 26.9034 14.8035 26.9034 16.001C26.9034 18.8147 26.9056 21.725 26.9012 24.587C26.899 25.598 26.5898 26.5191 26.0087 27.2561C25.4275 27.9885 24.6117 28.4886 23.6489 28.7014C23.3703 28.7627 23.0501 28.7956 22.6971 28.7956C19.2846 28.7978 15.8654 28.8 12.5407 28.8ZM21.7781 27.6596C21.8878 27.6596 21.9953 27.6618 22.1093 27.6639C22.2234 27.6661 22.3418 27.6683 22.4602 27.6683C22.7562 27.6683 22.9844 27.6552 23.197 27.6244C24.7323 27.4118 25.763 26.1682 25.7652 24.5322C25.7673 22.7952 25.7673 21.0275 25.7673 19.3191C25.7673 16.4462 25.7673 13.4745 25.7739 10.5533C25.7739 10.1125 25.6248 9.79226 25.2893 9.52031C22.7826 7.47853 20.2408 5.39946 17.7822 3.38616C17.1243 2.84886 16.4663 2.30936 15.8085 1.77203C15.3019 1.35754 14.7733 1.14699 14.2359 1.14699C13.7009 1.14699 13.1723 1.35754 12.6679 1.76984L11.1898 2.97825C8.56022 5.13189 5.84076 7.3557 3.16296 9.54005C2.84715 9.79884 2.70021 10.1081 2.70021 10.516C2.7068 12.9943 2.7068 15.5163 2.7068 17.9529C2.7068 18.7314 2.7068 19.5121 2.7068 20.2907C2.7068 20.7095 2.7068 21.1351 2.7046 21.5473C2.70241 22.5913 2.70021 23.6725 2.71337 24.7361C2.73311 26.1682 3.73755 27.3459 5.15431 27.6003C5.45257 27.653 5.75302 27.6596 6.01181 27.6596C6.0491 27.6596 6.08857 27.6596 6.12586 27.6596C6.16315 27.6596 6.20042 27.6596 6.23771 27.6596C6.27061 27.6596 6.3035 27.6596 6.3364 27.6596C6.65001 27.6618 6.99214 27.6639 7.41103 27.6639C7.65447 27.6639 7.89789 27.6639 8.14353 27.6639C8.39354 27.6639 8.64356 27.6639 8.89796 27.6639H9.3958V26.7736C9.3958 26.131 9.3958 25.4884 9.3958 24.8459C9.3958 23.4116 9.3936 21.9268 9.39799 20.4683C9.40019 19.5143 9.75546 18.6326 10.3959 17.9901C11.0384 17.3475 11.9157 16.9901 12.8697 16.9879C13.1877 16.9857 13.5233 16.9857 13.9267 16.9857C14.2469 16.9857 14.5671 16.9857 14.8873 16.9857C15.0935 16.9857 15.2997 16.9857 15.5037 16.9857C16.0255 16.9857 16.5168 17.0756 16.962 17.2532C17.3897 17.4221 17.7669 17.6699 18.0805 17.9857C18.3963 18.3016 18.642 18.6787 18.8109 19.1063C18.9885 19.5517 19.0784 20.0429 19.0784 20.567C19.0784 22.0013 19.0784 23.4575 19.0784 24.8677C19.0784 25.5038 19.0784 26.1376 19.0784 26.7736V27.6683H19.5762C19.8044 27.6683 20.0258 27.6683 20.2473 27.6683C20.4601 27.6683 20.6706 27.6683 20.879 27.6683C21.2101 27.6683 21.482 27.6683 21.7321 27.6661C21.7475 27.6596 21.7627 27.6596 21.7781 27.6596Z"
                fill="#232323"
              />
            </svg>
          </button>
          <!-- Notification button -->
          <button v-show="isLoggedIn" class="text-gray-400 focus:outline-none">
            <router-link to="/account/notification">
              <svg
                width="20"
                height="20"
                viewBox="0 0 27 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5532 27.7376H16.7802C16.7509 28.8485 16.292 29.724 15.374 30.3073C14.3098 30.9899 13.1872 31.0191 12.0953 30.3862C11.0897 29.8117 10.5927 28.9157 10.5532 27.7376ZM13.1595 25.0333H2.36459L2.42306 24.9456C2.7154 24.6533 3.16562 24.225 3.67284 23.8055C3.69184 23.788 3.7123 23.7763 3.73131 23.7587V23.7485C4.52064 23.0571 4.46217 22.5119 4.46217 22.5119C4.48264 22.3555 4.49141 22.1815 4.48264 21.9769C4.4534 19.0169 4.46363 16.0086 4.4724 13.3702C4.49287 9.42792 7.0012 6.05863 10.7096 4.98864C11.502 4.75649 12.3235 4.63836 13.1492 4.63783V0.159088C12.8174 0.159088 12.5061 0.422199 12.4958 0.733548C12.4754 1.12237 12.4856 1.52288 12.4856 1.93217V3.21557L11.784 3.36174L11.5969 3.40121C11.4839 3.4269 11.3704 3.4498 11.2563 3.46991C6.64015 4.33525 3.22409 8.34478 3.14369 13.0106C3.10569 15.2003 3.11446 17.4294 3.12469 19.5811C3.12469 20.2535 3.13492 20.9259 3.13492 21.5968C3.13492 22.1026 2.95951 22.5119 2.597 22.8627C2.18772 23.2617 1.77843 23.6812 1.37792 24.0788C1.03588 24.4194 0.685061 24.7805 0.324013 25.1211C-0.0765007 25.5201 -0.026802 25.7437 0.0609018 25.9689C0.157376 26.1925 0.284547 26.3971 0.850236 26.3971H13.1478V25.0333H13.1595Z"
                  fill="black"
                />
                <path
                  d="M24.5672 24.5922L24.5072 24.5061C24.0983 24.1141 23.6708 23.7404 23.2261 23.3861C23.2066 23.3689 23.1857 23.3574 23.1662 23.3402V23.3301C22.357 22.651 22.417 22.1154 22.417 22.1154C22.396 21.9618 22.387 21.791 22.396 21.5899C22.426 18.6824 22.4155 15.7275 22.4065 13.1359C22.3855 9.26354 19.8143 5.954 16.0128 4.90299C15.2005 4.67495 14.3584 4.55892 13.512 4.5584V0.159088C13.8521 0.159088 14.1713 0.417533 14.1833 0.72336C14.2027 1.10528 14.1923 1.4987 14.1923 1.90072V3.16136L14.9115 3.30494L15.1033 3.34371C15.2322 3.37242 15.343 3.39109 15.4524 3.41119C20.1949 4.26119 23.7071 8.20104 23.776 12.7827C23.8165 14.9335 23.806 17.1231 23.797 19.2366C23.797 19.8971 23.7865 20.5576 23.7865 21.2166C23.7865 21.7134 23.9663 22.1154 24.3364 22.46C24.756 22.852 25.177 23.2641 25.5876 23.6546C25.9367 23.9892 26.2978 24.3438 26.6664 24.6784C27.0785 25.0703 27.0276 25.29 26.9377 25.5111C26.8373 25.7308 26.7069 25.9318 26.1285 25.9318H13.5225V24.5922H13.5H24.5672Z"
                  fill="black"
                />
              </svg>
            </router-link>
          </button>
          <button v-show="isLoggedIn" class="text-black focus:outline-none">
            <router-link to="/services/register">
              <div class="flex justify-center items-center lg:gap-3">
                <span class="h-5 w-5"
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 26 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.53098 4.69749C7.63839 4.63158 8.97296 4.63158 10.6 4.63158H15.4C17.0271 4.63158 18.3616 4.63158 19.4691 4.69749M6.53098 4.69749C4.55823 4.8149 3.30632 5.14148 2.40588 6.0498C1 7.46802 1 9.75065 1 14.3158C1 18.8809 1 21.1636 2.40588 22.5817C3.81178 24 6.07451 24 10.6 24H15.4C19.9254 24 22.1883 24 23.5941 22.5817C25 21.1636 25 18.8809 25 14.3158C25 9.75065 25 7.46802 23.5941 6.0498C22.6937 5.14148 21.4418 4.8149 19.4691 4.69749M6.53098 4.69749C7.51911 4.67223 8.39109 3.97173 8.72732 3.03407C8.73767 3.00522 8.74827 2.97315 8.76948 2.90896L8.80027 2.81579C8.85089 2.66259 8.87621 2.58596 8.90329 2.518C9.24912 1.6502 10.0595 1.06097 10.985 1.00443C11.0574 1 11.1375 1 11.2977 1H14.7029C14.863 1 14.943 1 15.0155 1.00443C15.941 1.06097 16.7514 1.6502 17.0973 2.518C17.1243 2.58596 17.1496 2.66257 17.2002 2.81579L17.2311 2.90896C17.2522 2.97306 17.2629 3.00525 17.2732 3.03407C17.6094 3.97173 18.4809 4.67223 19.4691 4.69749M24.5942 7.92389C20.9823 10.2921 19.1764 11.4763 17.2726 12.0729C14.4899 12.9451 11.5103 12.9451 8.72755 12.0729C6.82375 11.4763 5.01786 10.2921 1.40605 7.92389M8.2 10.6842V13.1053M17.8 10.6842V13.1053"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    </svg></span>

                <span class="text-sm sm:text-[12px] hidden md:flex"
                  >Register Business</span
                >
              </div>
            </router-link>
          </button>
          <router-link to="/ads/add">
            <button
              class="xxs:hidden xs:block xswhitespace-nowrap primary-bg text-white rounded-lg p-1 xl:px-2 px-2 focus:outline-none"
            >
              <span class="text-[14px] sm:text-xs">+ POST AD</span>
            </button>
          </router-link>

          <div
            v-if="!isLoggedIn"
            class="xxs:hidden xs:flex xsxl:mx-5 font-semibold justify-center items-center"
          >
            <p class="whitespace-nowrap md:text-sm xxs:text-xs">
              <router-link :to="'/signin'">Login </router-link>
            </p>
            <p class="mx-2">|</p>
            <p class="whitespace-nowrap md:text-sm xxs:text-xs">
              <router-link :to="'/signup'">Sign Up </router-link>
            </p>
          </div>

          <button
            v-show="this.isLoggedIn"
            id="dropdownButton"
            @click="toggleLoggedInMenu"
            data-dropdown-toggle="dropdownMenu"
            class="flex text-sm md:me-0"
            type="button"
          >
            <div class="center gap-4">
              <img
                class="w-8 h-8 rounded-full"
                src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg"
                alt="user photo"
              />
              <span class="">Account</span>
            </div>

            <!-- <span class="sr-only">Open user menu</span> -->
          </button>

          <!-- Dropdown menu -->
          <div
            id="dropdownMenu"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUserAvatarButton"
            >
              <li>
                <router-link
                  to="/account/notification"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Account</router-link
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Learnings</a
                >
              </li>
            </ul>
            <div class="py-2">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Log out</a
              >
            </div>
          </div>
        </div>
        <!-- Search bar with dropdown -->
      </div>
    </nav>
  </section>
</template>

<script>
// import { onMounted } from "vue";
// const count = ref(0);
import store from "@/store/index.js";
// import { mapActions, mapGetters } from "vuex";
import { Dropdown } from "flowbite";

export default {
  name: "HeaderLayout",
  data() {
    return {
      navToggle: null,
      isNavOpen: false,
      isLoggedIn: false,
      targetEl: null,
      triggerEl: null,
      options: null,
      instanceOptions: null,
      dropdown: null,
    };
  },
  watch: {
    $route(to, from) {
      // this.show = false;
      this.isNavOpen = false;
      this.navToggle.classList.add("-left-[400px]");
      this.navToggle.classList.remove("-left-1");
      this.navToggle.classList.remove("opacity-100");
      console.log(to, from);
    },
  },
  // created() {
  //   console.log(store.state.isLoggedIn, "is log in header");
  // },
  mounted() {
    this.navToggle = document.getElementById("toggle-view");
    // console.log(store.state.isLoggedIn, "is log in header");
    if (store.state.isLoggedIn) {
      this.isLoggedIn = true;
    }
    this.targetEl = document.getElementById("dropdownMenu");

    // set the element that trigger the dropdown menu on click
    this.triggerEl = document.getElementById("dropdownButton");
    // options with default values
    this.options = {
      placement: "bottom",
      triggerType: "click",
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
      ignoreClickOutsideClass: false,
      onHide: () => {
        console.log("dropdown has been hidden");
      },
      onShow: () => {
        console.log("dropdown has been shown");
      },
      onToggle: () => {
        console.log("dropdown has been toggled");
      },
    };

    // instance options object
    this.instanceOptions = {
      id: "dropdownMenu",
      override: true,
    };
    this.dropdown = new Dropdown(
      this.targetEl,
      this.triggerEl,
      this.options,
      this.instanceOptions
    );
    setTimeout(() => {
      this.checkAuth();
    }, 2000);
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
      if (this.isNavOpen) {
        this.navToggle.classList.add("-left-[400px]");
        this.navToggle.classList.remove("-left-1");
        this.navToggle.classList.remove("opacity-100");
      } else {
        this.navToggle.classList.add("-left-1");
        this.navToggle.classList.add("opacity-100");
        this.navToggle.classList.remove("-left-[400px]");
      }
    },
    toggleLoggedInMenu() {
      this.dropdown.show();
    },
    checkAuth() {
      // console.log(store.state.isLoggedIn, "auth check is log in header");
      if (store.state.isLoggedIn) {
        this.isLoggedIn = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  white-space: no-wrap;
}
nav {
  padding: 10px;
}

.hidden-nav-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding: 1rem;
}
</style>
