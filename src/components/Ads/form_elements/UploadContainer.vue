<template>
  <div
    class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-white rounded-lg p-4 h-80 text-black"
  >
    <input
      type="file"
      accept="image/*"
      multiple
      ref="fileInput"
      class="hidden"
      @change="handleFiles"
    />
    <button
      class="flex flex-col items-center justify-center w-full md:h-52 h-28 rounded-lg focus:outline-none"
      @click="triggerFileInput"
    >
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_212_966)">
          <path
            d="M18.375 31.5V10.1062L11.55 16.9312L7.875 13.125L21 0L34.125 13.125L30.45 16.9312L23.625 10.1062V31.5H18.375ZM5.25 42C3.80625 42 2.57075 41.4864 1.5435 40.4591C0.516249 39.4319 0.00175 38.1955 0 36.75V28.875H5.25V36.75H36.75V28.875H42V36.75C42 38.1937 41.4864 39.4301 40.4591 40.4591C39.4319 41.4881 38.1955 42.0017 36.75 42H5.25Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_212_966">
            <rect width="42" height="42" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p class="mt-2">Click here to upload image</p>
      <p class="text-sm text-gray-400">Max 30 images Allowed</p>
    </button>
    <div
      class="mt-4 grid lg:grid-cols-10 6grid-cols-4 gap-2 overflow-scroll no-scrollbar"
    >
      <div v-for="(image, index) in images" :key="index" class="relative">
        <img
          :src="image.url"
          alt="uploaded image"
          class="md:w-24 md:h-24 h-16 w-16 object-cover rounded-lg"
        />
        <button
          @click="removeImage(index)"
          class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadContainer",
  data() {
    return {
      images: [],
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFiles(event) {
      const files = event.target.files;
      if (files.length + this.images.length > 30) {
        alert("You can only upload up to 30 images");
        return;
      }
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push({ url: e.target.result, file });
        };
        reader.readAsDataURL(file);
      });
      this.$refs.fileInput.value = null;
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* button {
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: rgba(0, 0, 0, 0.1);
} */
</style>
