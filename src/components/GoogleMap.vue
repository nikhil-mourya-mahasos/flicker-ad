<script setup>
import { GoogleMap, Circle } from "vue3-google-map";
import { defineProps, onMounted } from "vue";

const props = defineProps({
  zipcode:{
    type:String
  }
})

// const gmapKey = import.meta.env.VUE_APP_GOOGLE_MAP_KEY;

const center = { lat: 37.09, lng: -95.712 };
const cities = {
  chicago: {
    center: { lat: 41.878, lng: -87.629 },
    population: 2714856,
  },
  newyork: {
    center: { lat: 40.714, lng: -74.005 },
    population: 8405837,
  },
  losangeles: {
    center: { lat: 34.052, lng: -118.243 },
    population: 3857799,
  },
  vancouver: {
    center: { lat: 49.25, lng: -123.1 },
    population: 603502,
  },
};

const circles = {};

onMounted(()=>{
  console.log(props.zipcode,'zipcode')
})

for (const key in cities) {
  circles[key] = {
    center: cities[key].center,
    radius: Math.sqrt(cities[key].population) * 100,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  };
}
</script>

<template>
  <GoogleMap
    api-key="AIzaSyAoIWlHYsmd4gwmCJRM_FSEcoykXP1OOaw"
    style="width: 100%; height: 500px"
    mapTypeId="terrain"
    :center="center"
    :zoom="4"
  >
    <Circle v-for="(circle, index) in circles" :key="index" :options="circle" />
  </GoogleMap>
</template>
