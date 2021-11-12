<template>
  <div class="flex flex-col mt-16" :style="{ 'background-color': '#1E1E1E' }">
    <div
      v-for="work in works"
      :key="work.header"
      class="flex justify-center items-center flex-col mx-auto my-8"
    >
      <img :src="work.image" alt="" class="rounded cursor-pointer" />
      <h1 class="font-bold text-2xl mt-2">{{ work.header }}</h1>
      <p class="text-justify my-1">{{ work.description }}</p>
      <div class="flex flex-row space-between space-x-4 my-1">
        <img :src="work.imageOne" alt="" class="custImg" />
        <img :src="work.imageTwo" alt="" class="custImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      works: [
        {
          image: require("@/assets/Deliver.jpeg"),
          header: "Email Marketing Page",
          description: "Lorem ipsum and all dat shii",
          imageOne: require("@/assets/html.png"),
          imageTwo: require("@/assets/css3.png"),
        },
        {
          image: require("@/assets/irorunshop.jpeg"),
          header: "Ecommerce Store",
          description: "Lorem ipsum and all dat shii",
          imageOne: require("@/assets/vuejs.png"),
          imageTwo: require("@/assets/css3.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.custImg {
  width: 3rem;
}
</style>