<template>
  <section class="w-full overflow-hidden">
    <HeaderLayout />
    <div class="xxs:pt-[50px] md:pt-[70px] bg-default pb-10">
      <router-view v-slot="{ Component }"
        ><Transition name="slide-fade"> <component :is="Component" /> </Transition
      ></router-view>
    </div>
  </section>
</template>
<script>
import HeaderLayout from "@/layout/HeaderLayout.vue";

export default {
  name: "App",
  components: {
    HeaderLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
