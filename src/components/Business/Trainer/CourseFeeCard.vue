<template>
    <div class="border rounded-lg border-teal-400 grid grid-cols-9 overflow-hidden">
        <div class="col-span-2 p-1 border-r border-teal-400 center justify-start flex-col">
            <h2 class="text-gray-600 text-md font-bold" >Course</h2>
            <p class="text-black text-md" >UI Design</p>
        </div>
        <div class="col-span-1 p-1 border-r border-teal-400 center justify-start flex-col">
            <h2 class="text-gray-600 text-md font-bold" >Fees</h2>
            <p class="text-black text-md" >230$</p>
        </div>
        <div class="col-span-2 p-1 border-r border-teal-400 center justify-start flex-col">    
           <h2 class="text-gray-600 text-md font-bold" >Enrolled People</h2>
           <p class="text-black text-md" >230+</p>
        </div>
        <div class="col-span-2 p-1 border-r border-teal-400 center justify-start flex-col">    
           <h2 class="text-gray-600 text-md font-bold" >Duration</h2>
           <p class="text-black text-md" >3 Months</p>
        </div>
        <div class="col-span-2 p-1 center">    
            <button class="p-2 px-4 text-black border-teal-400 border rounded-lg">Enroll Now</button>
        </div>
    </div>
</template>

<script>
export default{
    name:"CourseFeeCard",
    props:["img","fee","duration","title"]
}
</script>