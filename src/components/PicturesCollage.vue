<template>
    <!-- <div class="flex flex-col-reverse md:grid md:grid-cols-8 gap-2">
        <div class="flex flex-row md:col-span-2 md:grid md:grid-flow-row gap-2 overflow-hidden">
            <div v-for="(item, index) in imgList" @click="toggleImg(index)" :key="index" class="cursor-pointer">
                <img class="h-16 w-40 md:h-auto md:w-auto object-cover" :src="item" />
            </div>
        </div>
        <div class="md:col-span-6">
            <img :src="activeImg" class="w-full h-full object-cover" />
        </div>
    </div> -->
    <div class="" :class="activeImg !== '' ? 'flex flex-col-reverse gap-2' : ''">
        <div class="grid grid-cols-2 grid-flow-row gap-2 w-full"
            :class="activeImg !== '' ? 'grid-cols-4 grid-flow-col gap-2' : 'grid-cols-2'">
            <div v-for="(item, index) in imgArr" @click="toggleImg(index)" :key="index"
                class="cursor-pointer rounded-lg" :class="activeImg !== '' ? 'h-20 w-36' : 'h-40 w-full'">
                <img class="h-full w-full object-cover rounded-lg hover:scale-105 transition-all duration-100" 
                    :src="item" />
            </div>
        </div>
        <div v-if="activeImg" class="">
            <img :src="activeImg" class="w-full h-72 object-cover  rounded-lg" />
        </div>
    </div>
</template>
<script>
export default {
    name: "PicturesCollage",
    props: {
        imgList: []
    },
    data() {
        return {
            activeImg: "",
            imgArr:[],
        }
    },
    methods: {
        toggleImg(index) {
            this.activeImg = this.$props.imgList[index];
        }
    },
    mounted() {
        // this.activeImg = this.$props.imgList[0];
        this.imgArr = this.$props.imgList.slice(0,4);
        if(!this.activeImg){
            this.$props.imgList  =  this.$props.imgList.slice(0,3)
        }
    }
}
</script>