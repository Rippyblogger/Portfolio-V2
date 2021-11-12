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
        h-80
        my-1
      "
      :style="{ 'background-color': feature.bgColor }"
    >
      <img :src="feature.image" alt="" />
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
          headerName: "Brand Research",
          featureText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          bgColor: "#1E1E1E",
        },
        {
          image: require("@/assets/webdesign.png"),
          headerName: "Web Development",
          featureText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          bgColor: "#CD1C29",
          textColor: "white",
        },
        {
          image: require("@/assets/design.png"),
          headerName: "Brand Design",
          featureText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          bgColor: "#1E1E1E",
        },
      ],
    };
  },
};
</script>

<style>
img {
  width: 40%;
}
</style>