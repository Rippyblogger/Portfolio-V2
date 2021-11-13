<template>
  <div class="flex flex-col mt-16" :style="{ 'background-color': '#1E1E1E' }">
    <div
      v-for="work in works"
      :key="work.header"
      class="flex justify-center items-center flex-col mx-auto my-8"
    >
      <img
        data-aos="fade-right"
        :src="work.image"
        alt=""
        class="rounded cursor-pointer projImg"
      />
      <h1 data-aos="fade-right" class="font-bold text-2xl mt-2 pt-5">
        {{ work.header }}
      </h1>
      <p data-aos="fade-right" class="text-justify my-1 text-white max-w-2xl">
        {{ work.description }}
      </p>
      <div
        
        class="flex flex-row space-between space-x-4 my-1"
      >
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
          description: "A landing page for an email marketing company built with pure HTML and CSS. It displays different plans and features for potential customers.",
          imageOne: require("@/assets/html.png"),
          imageTwo: require("@/assets/css3.png"),
        },
        {
          image: require("@/assets/irorunshop.jpeg"),
          header: "Ecommerce Store",
          description: "IrorunShop is a sample sneaker ecommerce website displaying new arrivals, different categorisations for men and women and cart functionality. It was build with pure CSS and VueJS as the preferred frontend Javascript framework.",
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

.projImg {
  width: 50%;
}
</style>
