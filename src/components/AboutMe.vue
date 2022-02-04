<template>
  <div>
    <div class="container mx-auto mt-32 flex flex-col sm:flex-row">
      <!-- col 1 -->
      <div class="flex my-auto mx-auto">
        <h1 class="text-5xl font-medium mb-10">About Me</h1>
      </div>

      <!-- col 2 -->
      <div class="max-w-2xl text-justify">
        <p class="mx-5 text-white">
          I am an experienced VueJS Developer and i occasionally dabble in NodeJS
          on the backend. I am proficient in replicating designs with
          guaranteed UI fidelity. I also have experience in the Cloud industry
          as a certified Azure Engineer coupled with a Bachelors of Science in Computer
          Science and a Masters in CyberSecurity andPenetration Testing.
        </p>

        <div class="flex flex-row justify-around my-6">
          <button
            class="
              bg-red-600
              p-3
              rounded-sm
              text-white
              font-medium
              hover:bg-red-700
            "
          >
            View Projects
          </button>
          <button
            class="
              bg-white
              px-3
              py-2
              ring-4 ring-red-600
              rounded-sm
              font-medium
              hover:bg-gray-100
            "
          >
            <a
              href="https://drive.google.com/file/d/1JPkmvVasNBjVK646PsQ32jTonDVYk4xX/view?usp=sharing"
              >Download CV</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
</style>