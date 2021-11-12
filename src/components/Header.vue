<template>
  <div
    class="
      flex flex-row
      font-semibold
      my-40
      mx-auto
      items-center
      justify-around
    "
  >
    <!-- col 1 -->
    <div></div>

    <!-- col 2 -->

    <div>
      <div>
        <v-typical
          class="blink text-left"
          :steps="['Hello, I am Boye 👋', 1000]"
          :loop="1"
          :wrapper="'h2'"
        >
        </v-typical>
      </div>

      <div class="text-left text-2xl text-white space-y-0">
        <h1>Frontend Web Developer,</h1>
        <h1>Cloud Engineer,</h1>
        <h1>Security Engineer</h1>
      </div>

      <div>
        <p class="text-white max-w-md text-justify text-sm py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>

      <div class="flex">
        <button
          class="
            bg-red-600
            hover:bg-red-700
            font-semibold
            my-3
            text-white
            py-3
            px-5
            text-sm
            rounded-sm
          "
        >
          ABOUT ME
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VTypical from "vue-typical";

export default {
  name: "Header",
  components: {
    VTypical,
  },
};
</script>

<style scoped>
.blink::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>