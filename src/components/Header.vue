<template>
  <div class="flex flex-row my-40 mx-auto items-center justify-around">
    <!-- col 1 -->
    <div class="space-y-4 flex flex-col justify-center mx-auto px-8">
      <a href="https://github.com/Rippyblogger" class="mx-auto"
        ><img class="mx-auto" src="@/assets/github.png" alt=""
      /></a>
      <a href="https://www.linkedin.com/in/adeboye-adeotan/" class="mx-auto"
        ><img class="mx-auto" src="@/assets/linkedin.png" alt=""
      /></a>
      <a href="mailto:boyeadeotan@gmail.com" class="mx-auto"
        ><img class="mx-auto" src="@/assets/email.png" alt=""
      /></a>
    </div>

    <!-- col 2 -->

    <div class="flex mx-auto flex-col px-5">
      <div>
        <v-typical
          class="blink text-left font-semibold"
          :steps="['Hello, I am Boye 👋', 1000]"
          :loop="1"
          :wrapper="'h2'"
        >
        </v-typical>
      </div>

      <div class="text-left text-2xl font-semibold text-white space-y-0">
        <h1>Frontend Web Developer,</h1>
        <h1>Cloud Engineer,</h1>
        <h1>Security Engineer</h1>
      </div>

      <div>
        <p class="text-white max-w-md text-justify font-medium text-sm py-2">
          I am an experienced VueJS Developer and occasionally dabble in NodeJS
          on the backend.
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
  methods: {
    menu() {},
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

img {
  width: 30%;
}
</style>