<template>
    <div class="border rounded-lg border-gray-300 grid grid-cols-6 gap-1 overflow-hidden">
        <div class="col-span-2">
            <img :src="img" class="w-full h-full object-cover">
        </div>
        <div class="col-span-4 p-4 text-left text-sm">    
            <h1 class=" font-semibold">{{ title }}</h1>
            <p class=" font-semibold">Course Duration <span>{{ duration + ' Months' }}</span></p>
            <div class="mt-3 flex flex-row gap-5 items-center justify-start">
                <h4 class="">Fee: <span>$234/Seat</span></h4>
                <button class="primary-bg px-4 p-2 rounded-lg text-white">Join Now</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"AboutUs",
    props:["img","fee","duration","title"]
}
</script>