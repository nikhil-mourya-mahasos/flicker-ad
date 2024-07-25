<template>
    <div class="border rounded-lg border-gray-300 grid grid-cols-6 gap-1 overflow-hidden p-2 py-3">
        <div class="col-span-2">
            <img :src="img" class="w-20 h-20 object-cover rounded-full">
        </div>
        <div class="col-span-4 p-2 pt-0 text-sm">
            <div class="flex justify-start items-center gap-2">
                <h1>{{ fullName }}</h1>
                <div class="center"><svg width="15" height="15" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.0245 1.08156C10.1741 0.620904 10.8259 0.620903 10.9755 1.08156L12.6064 6.10081C12.8072 6.71885 13.3831 7.13729 14.033 7.13729H19.3105C19.7949 7.13729 19.9963 7.75709 19.6044 8.0418L15.3348 11.1439C14.8091 11.5258 14.5891 12.2029 14.7899 12.8209L16.4207 17.8402C16.5704 18.3008 16.0432 18.6839 15.6513 18.3992L11.3817 15.2971C10.8559 14.9152 10.1441 14.9152 9.61832 15.2971L5.34869 18.3992C4.95683 18.6839 4.42959 18.3008 4.57927 17.8402L6.21012 12.8209C6.41093 12.2029 6.19095 11.5258 5.66522 11.1439L1.39558 8.04179C1.00373 7.7571 1.20511 7.13729 1.68948 7.13729H6.96703C7.61687 7.13729 8.19281 6.71885 8.39362 6.10081L10.0245 1.08156Z"
                            stroke="#FF8730" />
                    </svg>
                </div>
                <p class="text-blue-500">4.5 ratings</p>
            </div>
            <p> UX Designer</p>
            <p> 5 Courses</p>
            <p>Trained<span>{{ " 100+" + ' Students' }}</span></p>
            <!-- <div class="flex flex-row gap-5 items-center justify-start">
                <h4 class="">Fee: <span>$234/Seat</span></h4>
                <button class="primary-bg px-4 p-2 rounded-lg text-white">Join Now</button>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "TrainerCard",
    props: ["img", "profession", "coursesCount", "fullName", "rating"]
}
</script>