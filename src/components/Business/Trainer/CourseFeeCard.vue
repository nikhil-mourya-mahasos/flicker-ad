<template>
    <div class="border rounded-lg border-teal-400 grid grid-cols-9 overflow-hidden">
        <div class="col-span-1 p-4 border-teal-400">
            <h2 class="text-gray-500" >Course</h2>
            <p class="text-black text-md" ></p>
        </div>
        <div class="col-span-1 p-4 border-teal-400">
            <h2 class="text-gray-500" >Fees</h2>
            <p class="text-black text-md" ></p>
        </div>
        <div class="col-span-2 p-4 border-teal-400">    
           <h2 class="text-gray-500" >Enrolled People</h2>
           <p class="text-black text-md" ></p>
        </div>
        <div class="col-span-2 p-4 border-teal-400">    
           <h2 class="text-gray-500" >Duration</h2>
           <p class="text-black text-md" ></p>
        </div>
        <div class="col-span-2 p-4 border-teal-400 center">    
            <button class="p-2 px-4 text-black border-teal-400 rounded-lg">Enroll Now</button>
        </div>
    </div>
</template>

<script>
export default{
    name:"CourseFeeCard",
    props:["img","fee","duration","title"]
}
</script>