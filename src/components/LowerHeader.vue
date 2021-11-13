<template>
  <div
    class="
      flex flex-col
      sm:flex-row
      mx-auto
      justify-center
      items-center
      max-w-4xl
      p-4
    "
  >
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      v-for="feature in features"
      :key="feature.headerName"
      class="
        text-white
        space-y-3
        text-left
        py-10
        mx-1
        px-4
        flex flex-col
        h-96
        my-1
      "
      :style="{ 'background-color': feature.bgColor }"
    >
      <div>
        <img :src="feature.image" alt="" class="pb-2" />
      </div>
      <h1 class="font-bold text-2xl">{{ feature.headerName }}</h1>
      <p class="text-sm">{{ feature.featureText }}</p>
      <h3
        class="text-sm py-2 text-red-600 font-semibold cursor-pointer"
        :style="{ color: feature.textColor }"
      >
        KNOW MORE
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "LowerHeader",
  data() {
    return {
      features: [
        {
          image: require("@/assets/dataanalysis.png"),
          headerName: "Cloud Architecture Design",
          featureText:
            "I can design a scalable cloud architecture tailored to your organizational needs.",
          bgColor: "#1E1E1E",
        },
        {
          image: require("@/assets/webdesign.png"),
          headerName: "Frontend Web Development",
          featureText:
            "Using VueJS as my preferred frontend framework, I can bring your designs to life.",
          bgColor: "#CD1C29",
          textColor: "white",
        },
        {
          image: require("@/assets/design.png"),
          headerName: "Conduct Brand Research",
          featureText:
            "I can conduct reasearch into the best way to present your brand's message to the world.",
          bgColor: "#1E1E1E",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 90px;
  height: 90px;
}
</style>
