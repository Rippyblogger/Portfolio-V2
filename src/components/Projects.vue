<template>
  <div class="flex flex-col mt-16" :style="{ 'background-color': '#1E1E1E' }">
    <h1 class="text-3xl font-medium mt-5">WEB PROJECTS</h1>
    <div
      v-for="work in works"
      :key="work.header"
      class="flex justify-center items-center flex-col mx-auto my-8 space-y-4"
    >
      <img
        data-aos="fade-right"
        :src="work.image"
        :alt="work.alt"
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

          <img :src="work.imageOne" :alt="work.imageOneAlt" class="custImg" />

          <img :src="work.imageTwo" :alt="imageTwoAlt" class="custImg" />

          <img
            v-if="work.imageThree"
            :src="work.imageThree"
            :alt="imageThreeAlt"
            class="custImg"
            :style="{ 'background-color': work.color }"
          />

          <img
            v-if="work.imageFour"
            :src="work.imageFour"
            :alt="imageFourAlt"
            class="custImg"
          />

          <img
            v-if="work.imageFive"
            :src="work.imageFive"
            :alt="imageFiveAlt"
            class="custImg"
          />
        </div>
      </div>

      <div class="flex flex-row space-x-3">
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
            LIVE LINK
          </button></a
        >
        <!-- button two -->
        <a :href="work.codeUrl">
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
            VIEW CODE
          </button></a
        >
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
          image: require("@/assets/booreyko.jpeg"),
          header: "Booreyko",
          alt: "Boorekyo screenshot capture",
          description:
            "A landing page for an SEO company built with Vue3, Vuex and Tailwind with working Portfolio and Services. Pulls all data from an api.",
          imageOne: require("@/assets/vuejs.png"),
          imageOneAlt: "VueJS logo",
          imageTwo: require("@/assets/tailwind.svg"),
          imageTwoAlt: "Tailwind logo",
          linkUrl: "https://nlyctest.netlify.app/",
          codeUrl: "https://github.com/Rippyblogger/Nylctest",
        },
        {
          image: require("@/assets/Deliver.jpeg"),
          header: "Email Marketing Page",
          alt: "Deliver landing page screenshot capture",
          description:
            "A landing page for an email marketing company built with pure HTML and CSS. It displays different plans and features for potential customers.",
          imageOne: require("@/assets/html.png"),
          imageOneAlt: "HTML logo",
          imageTwo: require("@/assets/css3.png"),
          imageTwoAlt: "CSS logo",
          linkUrl: "https://deliver-bulk.netlify.app",
          codeUrl: "https://github.com/Rippyblogger/Deliver",
        },
        {
          image: require("@/assets/irorunshop.jpeg"),
          header: "Irorun Shop",
          alt: "Irorun Shop landing page screenshot capture",
          description:
            "IrorunShop is a sample sneaker ecommerce website displaying new arrivals, different categorisations for men and women and cart functionality. It was built with pure CSS and VueJS as the preferred frontend Javascript framework.",
          imageOne: require("@/assets/vuejs.png"),
          imageOneAlt: "VueJS logo",
          imageTwo: require("@/assets/css3.png"),
          imageTwoAlt: "CSS logo",
          linkUrl: "https://irorun-shop.netlify.app",
          codeUrl: "https://github.com/Rippyblogger/Irorun-Shop",
        },
        {
          image: require("@/assets/zuriprogress.jpeg"),
          header: "Zuri Progress Tracker",
          alt: "Zuri Progress Tracker landing page screenshot capture",
          description:
            "Zuri Progress Tracker is a full web application used to track the progress of the HNG Internship  finalists. Built with VueJS as its frontend framework, Tailwind as its CSS framework, and Django as its preferred Python framework for the backend, it displays information about Interns, their stacks and technologies as well as allows them edit information on the fly as they progress with their respective careers.",
          imageOne: require("@/assets/vuejs.png"),
          imageOneAlt: "VueJS logo",
          imageTwo: require("@/assets/tailwind.svg"),
          imageTwoAlt: "Tailwind CSS logo",
          imageThree: require("@/assets/django.png"),
          imageThreeAlt: "Django logo",
          imageFour: require("@/assets/mysql.png"),
          imageFourAlt: "MySQL logo",
          linkUrl: "https://zuriprogresstracker.netlify.app/",
          codeUrl: "https://github.com/Rippyblogger/zuri_team_progress_tracker",
        },
        {
          image: require("@/assets/traveleasy.jpeg"),
          header: "Travel Easy",
          alt: "Travel Easy landing page screenshot capture",
          description:
            "IrorunShop is a sample travel booking website. Working pages include a the landing page, simple sign up, login functionality and an about page. It was built with Bulma as its CSS framework and VueJS as the preferred frontend Javascript framework.",
          imageOne: require("@/assets/vuejs.png"),
          imageOneAlt: "VueJS logo",
          imageTwo: require("@/assets/css3.png"),
          imageTwoAlt: "CSS logo",
          imageThree: require("@/assets/bulma.svg"),
          imageThreeAlt: "Django logo",
          color: "#cd1c29",
          linkUrl: "https://travel-easy.netlify.app/",
          codeUrl: "https://github.com/Rippyblogger/TravelEasy",
        },
        {
          image: require("@/assets/shortenme.jpeg"),
          header: "Shorten Me",
          alt: " Shorten Melanding page screenshot capture",
          description:
            "Shorten Me is a URL shortening web tool desigined using the bit.ly API, VueJS as the frontend Javascript framework and Vuetify as its CSS framework.",
          imageOne: require("@/assets/vuejs.png"),
          imageOneAlt: "VueJS logo",
          imageTwo: require("@/assets/vuetify.svg"),
          imageTwoAlt: "Vuetify logo",
          linkUrl: "https://url-link-shortner.netlify.app/",
          codeUrl: "https://github.com/Rippyblogger/Url-Shortner",
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

hr {
  margin: 0 41rem;
  color: black;
  border: 2px solid #cd1c29;
}
</style>
