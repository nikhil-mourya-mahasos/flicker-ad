<!-- src/components/NotFound.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-800">404</h1>
      <p class="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <router-link
        to="/signin"
        class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped></style>
