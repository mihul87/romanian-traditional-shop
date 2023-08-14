<script setup>
// import { storeToRefs } from "pinia";
// import { useUserStore } from "~/stores/users";

// const userStore = useUserStore();
// const {user, isAuthenticated} = storeToRefs(userStore);

// import { mapGetters } from "vuex";
    const search = ref("")
    const isMobileMenuOpen = ref(false)
    const adtmenu = [
        {
          to: "/discount",
          icon: "discount",
          name: "Discount",
        },
        {
          to: "/giftCard",
          icon: "gift",
          name: "Gift Card",
        },
        {
          to: "/aboutUs",
          icon: "about",
          name: "About Us",
        },
        {
          to: "/contact",
          icon: "contact",
          name: "Contact",
        },
      ]

    
const signOut = async () => {
  await userStore.signout();
}
//   computed: {
//     ...mapGetters("users", ["user", "isAuthenticated"]),
//   },
//   methods: {
//     signOut() {
//       this.$store
//         .dispatch("users/signOut")
//         .then(() => {
//           this.$router.push("/");
//         })
//         .catch((err) => {
//           alert(err.message);
//         });
//     },
//   },

</script>

<template>
    <header class="bg-blue-50">
    <div class="relative z-0 flex items-center justify-between px-6 py-1 rounded-t-md bg-orient-default">
      <!-- Logo -->
      <div class="flex items-center flex-shrink-0">
        <NuxtLink to="/">
          <UISvg name="logo_mob" class="lg:hidden" />
          <UISvg name="logo" class="hidden lg:block" />
        </NuxtLink>
      </div>
      <!-- Desktop -->
      <div class="flex-1 px-2 lg:divide-y lg:divide-gray-700 lg:px-3">
        <div class="relative flex items-center justify-between py-3">
          <h1 class="hidden text-xl font-bold tracking-wide text-white lg:block">
            Port Popular Românesc
          </h1>

          <!-- Search bar -->
          <div
            class="relative z-0 flex items-center justify-center flex-1 px-2"
          >
            <div class="w-full sm:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <!-- Heroicon name: solid/search -->
                  <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  class="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-400 bg-gray-200 border border-transparent rounded-md 
                         focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500
                         sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>

          <!-- Log buttons -->
          <div class="hidden lg:pt-1 lg:flex">
            <div v-if="user" class="flex items-center px-4">
              <div class="flex-shrink-0 mr-3">
                <img
                  class="w-12 h-12 rounded-full border-2 border-white"
                  src="~/assets/img/profil.jpg"
                  alt="profil"
                />
              </div>
              <div v-if="user?.userType === 'admin'">
                <NuxtLink to="/admin/createproduct">
                  Create Product
                </NuxtLink>
                <NuxtLink to="/admin/products">
                  Products
                </NuxtLink>
              </div>
              <div v-else class="flex">
                <NuxtLink to="/account/favorite">
                  <UIHeroicons
                    name="favorite"
                    class="pr-1 text-white cursor-pointer mr-3"
                  />
                </NuxtLink>
                <NuxtLink to="/account/cart">
                  <UIHeroicons
                    name="cart"
                    class="pr-1 text-white cursor-pointer mr-3"
                  />
                </NuxtLink>
              </div>
              <button @click="signOut" class="btn-log-active">Sign Out</button>
            </div>
            <div v-else class="lg:flex">
              <nuxt-link to="/account/signin" class="mr-2 btn-log">Sign in</nuxt-link>
              <nuxt-link to="/account/signup" class="btn-log-active">Sign up</nuxt-link>
            </div>
          </div>
        </div>
        <nav class="relative items-center justify-end hidden py-3 lg:flex">
          <ul class="flex h-12 gap-4 text-white uppercase bg-orient-default">
            <li
              class="flex items-center text-base hover:text-neon-carrot-default"
              v-for="item in adtmenu"
              :key="item.name"
            >
              <NuxtLink :to="item.to" class="flex">
                <UIHeroicons
                  :name="item.icon"
                  class="pr-1 text-neon-carrot-default"
                />
                <span class="hover:text-neon-carrot-default">{{
                  item.name
                }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="items-center block lg:hidden">
        <!-- Mobile menu button -->
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white
                 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="sr-only">Open menu</span>
          <!-- Icon when menu is closed. Heroicon name: outline/menu  Menu open: "hidden", Menu closed: "block"  -->
          <svg
            class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
            aria-hidden="true"
            v-if="!isMobileMenuOpen"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <!-- Icon when menu is open. Heroicon name: outline/x  Menu open: "block", Menu closed: "hidden"  -->
          <svg
            class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor"
            v-else
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <!-- <NavigationNavPeopleMobile :isOpen="isMobileMenuOpen" /> -->

    <!-- NavigationPeople after -->
    <!-- <NavigationNavPeople class="hidden lg:block" /> -->
  </header>
</template>


<style scoped>
.btn-log {
  @apply flex items-center cursor-pointer justify-center px-2 py-1 text-lg text-white font-bold transform rounded-md focus:outline-none  focus:ring-2 focus:ring-white border-2 border-neon-carrot-default ;
}
.btn-log-active {
  @apply flex items-center cursor-pointer justify-center px-3 py-2 text-lg font-bold text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300;
}

.header {
  margin: 0;
}
</style>