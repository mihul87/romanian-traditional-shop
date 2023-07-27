<script setup>

</script>

<template>
  <footer class="bg-orient-default" aria-labelledby="footer-heading">
    <div class="px-3 py-6 mx-auto sm:px-6 lg:py-8 lg:px-6">
      <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          
          <!-- <img class="h-10" src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg" alt="Company name" /> -->
          <h1 class="text-xl font-bold tracking-wide text-white">Port Popular Românesc</h1>
          <p class="text-xl text-white">
            Follow us
          </p>
          <!-- <div class="flex space-x-6">
            <NuxtLink v-for="item in social" :key="item.name" :to="item.href" class="text-white">
              <Heroicons :name="item.icon" />
            </NuxtLink>
          </div> -->
        </div>
        <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-4">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold tracking-wider text-white uppercase"
              >
                Customer services
              </h3>
              <!-- <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in services" :key="item.name">
                  <NuxtLink to="item.href" class="text-white">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul> -->
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold tracking-wider text-white uppercase"
              >
                Information
              </h3>
              <!-- <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in information" :key="item.name">
                  <NuxtLink to="item.href" class="text-white">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul> -->
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold tracking-wider text-white uppercase"
              >
                About us
              </h3>
              <!-- <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in about" :key="item.name">
                  <NuxtLink to="item.href" class="text-white">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul> -->
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold tracking-wider text-white uppercase"
              >
                Other
              </h3>
              
            </div>
          </div>
        </div>
        <!-- <div class="mt-12 xl:mt-0">
          <h3 class="text-sm font-semibold tracking-wider text-white uppercase">
            Date de contact
          </h3>
          <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in contact" :key="item.name" class="text-white">
                    {{ item.name }}
                </li>
              </ul>
        </div> -->
      </div>
      <div
        class="pt-8 border-t border-gray-700 lg:flex lg:items-center lg:justify-between xl:mt-0"
      >
        <div>
          <h3 class="text-sm font-semibold tracking-wider text-white uppercase">
            Subscribe to our newsletter
          </h3>
          <p class="mt-2 text-base text-white">
            The latest news about discounts and products, sent to your inbox
            weekly.
          </p>
        </div>
        <form class="mt-4 sm:flex sm:max-w-md lg:mt-0 lg:px-10">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            autocomplete="email"
            required=""
            class="w-full min-w-0 px-4 py-2 text-base text-gray-600 bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs"
            placeholder="Enter your email"
          />
          <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              class="flex items-center justify-center w-full px-3 py-2 text-base font-medium text-white transform border-2 rounded-md motion-safe:hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div class="pt-8 mt-12 border-t border-gray-700">
        <p class="text-base text-center text-white">
          &copy; 2023 Mihail Botnari. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>


<style scoped>

</style>
