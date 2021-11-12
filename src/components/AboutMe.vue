<template>
  <div>
    <div class="container mx-auto mt-32 flex flex-col sm:flex-row">
      <!-- col 1 -->
      <div class="flex my-auto mx-auto">
        <h1 class="text-5xl font-medium border-b-2">About Me</h1>
      </div>

      <!-- col 2 -->
      <div class="max-w-2xl text-justify">
        <p class="mx-5">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime
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
            Download CV
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