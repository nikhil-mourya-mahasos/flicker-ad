<script setup>
import { GoogleMap, Circle } from "vue3-google-map";
import { defineProps, onMounted, reactive, ref, watch } from "vue";

const props = defineProps({
  zipcode: {
    type: String
  }
})

watch(props.zipcode, (newVal, oldVal) => {
  console.log(newVal + 'newVal',oldVal+'oldVal');
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
  console.log(props.zipcode, 'zipcode on gmap props')
  if (props.zipcode) {
    initMap();
  }
})

const initMap = async () => {
  await findLatLongbyZipcode()
}
const findLatLongbyZipcode = async () => {
  await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=${props.zipcode}&region=USA&key=AIzaSyAoIWlHYsmd4gwmCJRM_FSEcoykXP1OOaw`)
    .then(res => res.json())
    .then((res) => {
      // console.log(res,zipcodeResponse);
      // isDataFetched.value = true;

      // createCircle();
      if (res.status == "OK" && res.results.length) {
        zipcodeResponse = res.results[0];
        cities[`${props.zipcode}`] = {
          center: zipcodeResponse.geometry.location,
          population: 2714856
        };

        createCircle();
        console.log(cities);
        isDataFetched.value = true;
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

</script>

<template>
  <div class="w-full h-[500px]" v-loading="true">
    <GoogleMap api-key="AIzaSyAoIWlHYsmd4gwmCJRM_FSEcoykXP1OOaw" style="width: 100%; height: 500px" mapTypeId="terrain"
      :center="center" :zoom="4">
      <Circle v-for="(circle, index) in circles" :key="index" :options="circle" />
    </GoogleMap>
  </div>
</template>
