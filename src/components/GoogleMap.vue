<script setup>
import { GoogleMap, Circle } from "vue3-google-map";
import { defineProps, onMounted, reactive,ref } from "vue";

const props = defineProps({
  zipcode: {
    type: String
  }
})

// const gmapKey = import.meta.env.VUE_APP_GOOGLE_MAP_KEY;
const isDataFetched = ref(false);

const center = { lat: 37.09, lng: -95.712 };
const cities = {
  chicago: {
    center: { lat: 41.878, lng: -87.629 },
    population: 2714856,
  },
};

const circles = {};
let zipcodeResponse = reactive(null)

onMounted(() => {
  console.log(props.zipcode, 'zipcode')
  if (props.zipcode) {
    findLatLongbyZipcode()
  }
})

const findLatLongbyZipcode = async () => {
  await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=${props.zipcode}&region=USA&key=AIzaSyAoIWlHYsmd4gwmCJRM_FSEcoykXP1OOaw`)
    .then(res => res.json())
    .then((res) => {
      if (res.status == "OK") {
        zipcodeResponse = res.results[0];
        cities[`${zipcodeResponse.postcode_localities[0]}`] = {
          center: zipcodeResponse.geometry.location,
          population: 2714856
        };
        createCircle();
        isDataFetched.value=true;
      }
    })
}

const createCircle = () => {
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
}


console.log(circles, 'circels')
</script>

<template>
  <GoogleMap v-if="isDataFetched" api-key="AIzaSyAoIWlHYsmd4gwmCJRM_FSEcoykXP1OOaw" style="width: 100%; height: 500px" mapTypeId="terrain"
    :center="center" :zoom="4">
    <Circle v-for="(circle, index) in circles" :key="index" :options="circle" />
  </GoogleMap>
</template>
