<template>
  <div class="w-full min-h-pth bg-brand-red-light-1 py-2">
    <div class="flex items-center justify-between py-6 px-6 mx-auto max-w-7xl">
      <div class="text-base font-normal text-brand-gray-dark-1 font-mulish">
        Logo
      </div>

      <div
        class="
          hidden
          md:flex
          text-base text-brand-gray-dark-1
          font-normal
          space-x-6
          items-center
          font-mulish
        "
      >
        <a
          href=""
          class="hover:text-brand-red-dark"
          >HOME</a
        >
        <a
          href=""
          class="hover:text-brand-red-dark"
          >PROJECTS</a
        >
        <a href="" class="hover:text-brand-red-dark"
          >ABOUT</a
        >
        <a href="mailto:boyeadeotan@gmail.com">
          <button
            class="
              bg-brand-red-dark
              hover:bg-opacity-75
              text-white
              font-normal
              px-6
              py-2
              text-sm
            "
          >
            CONTACT ME
          </button>
        </a>
      </div>
      <!--mobile button-->
      <div class="md:hidden flex items-center">
        <button class="mobile-menu-button">
          <img
            src="../assets/hamburger.png"
            class="w-7"
            color="brand-gray-dark-1"
            v-on:click="menu()"
          />
        </button>
      </div>
    </div>
    <!--mobile menu-->
    <div
      class="
        mobile-menu
        hidden
        px-5
        font-mulish
        text-brand-gray-dark-1
        font-normal
        lg:hidden
        md:hidden
      "
    >
      <a
        href="https://zuriprogresstracker.netlify.app/"
        class="block py-2 text-base"
        >HOME</a
      >
      <a
        href="https://training.zuri.team/curriculum"
        class="block py-2 text-base"
        >PROJECTS</a
      >
      <a href="https://hng.tech/" class="block py-2 text-base">ABOUT</a>

      <a href="https://training.zuri.team/enrollment">
        <button
          class="
            bg-brand-red-dark
            hover:bg-opacity-75
            text-white
            font-normal
            py-4
            text-base
            w-full
          "
        >
          CONTACT ME
        </button>
      </a>
    </div>
    <div class="header-body flex justify-center items-center">
      <div class="border-0">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    menu() {
      const menu = document.querySelector(".mobile-menu");
      menu.classList.toggle("hidden");
    },
  },
};
</script>

<style scoped></style>
