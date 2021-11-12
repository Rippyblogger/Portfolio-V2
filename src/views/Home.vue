<template>
  <div class="bg-black text-red-600 px-2" style="">
    <Navbar class=""/>
    <div>
      <Header />
    </div>
    <div>
      <LowerHeader class=""/>
    </div>
    <div>
      <AboutMe />
    </div>
    <div>
      <Projects />
    </div>
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import LowerHeader from "@/components/LowerHeader.vue";
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    LowerHeader,
    AboutMe,
    Projects,
    Footer,
  },
};
</script>
