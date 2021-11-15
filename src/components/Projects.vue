<template>
  <div class="flex flex-col mt-16" :style="{ 'background-color': '#1E1E1E' }">
    <h1 class="text-3xl font-medium
    mt-5">WEB PROJECTS</h1>
    <div
      v-for="work in works"
      :key="work.header"
      class="flex justify-center items-center flex-col mx-auto my-8 space-y-4"
    >
      <img
        data-aos="fade-right"
        :src="work.image"
        alt=""
        class="rounded cursor-pointer projImg"
      />
      <h1 data-aos="fade-right" class="font-bold text-2xl">
        {{ work.header }}
      </h1>
      <p data-aos="fade-right" class="text-justify text-white max-w-2xl mx-5">
        {{ work.description }}
      </p>
      <div>
        <div class="flex flex-row space-between space-x-4">
          <h2 class="align-middle py-3">STACK:</h2>
          <img :src="work.imageOne" alt="" class="custImg" />
          <img :src="work.imageTwo" alt="" class="custImg" />
        </div>
      </div>

      <a :href="work.linkUrl">
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
          VIEW PROJECT
        </button></a
      >
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
          description:
            "A landing page for an email marketing company built with pure HTML and CSS. It displays different plans and features for potential customers.",
          imageOne: require("@/assets/html.png"),
          imageTwo: require("@/assets/css3.png"),
          linkUrl: "https://deliver-bulk.netlify.app",
        },
        {
          image: require("@/assets/irorunshop.jpeg"),
          header: "Irorun Shop",
          description:
            "IrorunShop is a sample sneaker ecommerce website displaying new arrivals, different categorisations for men and women and cart functionality. It was built with pure CSS and VueJS as the preferred frontend Javascript framework.",
          imageOne: require("@/assets/vuejs.png"),
          imageTwo: require("@/assets/css3.png"),
          linkUrl: "https://irorun-shop.netlify.app",
        },
        {
          image: require("@/assets/traveleasy.jpeg"),
          header: "Travel Easy",
          description:
            "IrorunShop is a sample travel booking website. Working pages include a the landing page, simple sign up, login functionality and an about page. It was built with Bulma as its CSS framework and VueJS as the preferred frontend Javascript framework.",
          imageOne: require("@/assets/vuejs.png"),
          imageTwo: require("@/assets/css3.png"),
          linkUrl: "https://travel-easy.netlify.app/",
        },
        {
          image: require("@/assets/shortenme.jpeg"),
          header: "Shorten Me",
          description:
            "Shorten Me is a URL shortening web tool desigined using the bit.ly API, VueJS as the frontend Javascript framework and Vuetify as its CSS framework.",
          imageOne: require("@/assets/vuejs.png"),
          imageTwo: require("@/assets/vuetify.svg"),
          linkUrl: "https://url-link-shortner.netlify.app/",
        },
        /* {
          image: require("@/assets/runtracker.jpeg"),
          header: "Run Tracker",
          description:
            "Shorten Me is a URL shortening web tool desigined using the bit.ly API, VueJS as the frontend Javascript framework and Vuetify.",
          imageOne: require("@/assets/vuejs.png"),
          imageTwo: require("@/assets/vuetify.svg"),
          linkUrl: "https://url-link-shortner.netlify.app/",
        }, */
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
