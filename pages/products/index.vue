<script setup>
  let selected =  ref("")
  let isOpen =  ref(false)
  let isColorOpen = ref(false)
  let isSizeSelectorOpen = ref(false);
  const sortOptions =  [
          { name: "Most Popular", to: "/", current: true },
          { name: "Best Rating", to: "/", current: false },
          { name: "Newest", to: "/", current: false },
          { name: "Price: Low to High", to: "/", current: false },
          { name: "Price: High to Low", to: "/", current: false }
        ]
  let products = reactive([])
    
 const toggleColorSelector = () => {
      this.isColorOpen = !this.isColorOpen
    }
  const setOption = (name) => {
      selected = name;
      let index = sortOptions.findIndex(option => option.current === true);
      console.log(index);
      if (index !== -1) {
        sortOptions[index].current = false;
      }
      index = sortOptions.findIndex(option => option.name === name);
      if (index !== -1) {
        sortOptions[index].current = true;
        // some code for sorting products
      }
      isOpen = false;
    }
</script>
<template>
   <div class="bg-white">
        <div>
          <div
            class="fixed inset-0 z-40 flex lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div
              class="fixed inset-0 bg-black bg-opacity-25"
              aria-hidden="true"
            ></div>
            <div
              class="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  class="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
  
              <!-- Filters -->
              <form class="mt-4 border-t border-gray-200">
                <h3 class="sr-only">Categories</h3>
                <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                  <li> <a href="#" class="block px-2 py-3"> Totes </a> </li>
                  <li> <a href="#" class="block px-2 py-3"> Backpacks </a> </li>
                  <li> <a href="#" class="block px-2 py-3"> Travel Bags </a> </li>
                  <li> <a href="#" class="block px-2 py-3"> Hip Bags </a> </li>
                  <li> <a href="#" class="block px-2 py-3"> Laptop Sleeves </a> </li>
                </ul>
  
                <div class="px-4 py-6 border-t border-gray-200">
                  <h3 class="flow-root -mx-2 -my-3">
                    <button
                      type="button"
                      class="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500"
                      aria-controls="filter-section-mobile-0"
                      aria-expanded="false"
                    >
                      <span class="font-medium text-gray-900">
                        Color
                      </span>
                      <span class="flex items-center ml-6">
                        <svg
                          class="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          class="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div class="pt-6" id="filter-section-mobile-0">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-0"
                          class="flex-1 min-w-0 ml-3 text-gray-500"
                        >
                          White
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-1"
                          class="flex-1 min-w-0 ml-3 text-gray-500"
                        >
                          Beige
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="px-4 py-6 border-t border-gray-200">
                  <h3 class="flow-root -mx-2 -my-3">
                    <button
                      type="button"
                      class="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500"
                      aria-controls="filter-section-mobile-1"
                      aria-expanded="false"
                    >
                      <span class="font-medium text-gray-900">
                        Category
                      </span>
                      <span class="flex items-center ml-6">
                        <svg
                          class="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          class="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div class="pt-6" id="filter-section-mobile-1">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-0"
                          class="flex-1 min-w-0 ml-3 text-gray-500"
                        >
                          New Arrivals
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-1"
                          class="flex-1 min-w-0 ml-3 text-gray-500"
                        >
                          Sale
                        </label>
                      </div>
                    <!-- Travel  Organization Accessories-->
                    </div>
                  </div>
                </div>
  
                <div class="px-4 py-6 border-t border-gray-200">
                  <h3 class="flow-root -mx-2 -my-3">
                    <button
                      type="button"
                      class="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500"
                      aria-controls="filter-section-mobile-2"
                      aria-expanded="false"
                    >
                      <span class="font-medium text-gray-900">
                        Size
                      </span>
                      <span class="flex items-center ml-6">
                        <svg
                          class="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          class="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <!-- Filter section, show/hide based on section state. -->
                  <div class="pt-6" id="filter-section-mobile-2">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-0"
                          name="size[]"
                          value="2l"
                          type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-0"
                          class="flex-1 min-w-0 ml-3 text-gray-500"
                        >
                          2L
                        </label>
                      </div>
  
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-1"
                          name="size[]"
                          value="6l"
                          type="checkbox"
                          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-1"
                          class="flex-1 min-w-0 ml-3 text-gray-500"
                        >
                          6L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
  
          <main class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200"
            >
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
                Products
              </h1>
  
              <div class="flex items-center">
                <!-- Sort options -->
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      class="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900"
                      @click="isOpen = !isOpen"
                    >
                      <span>Sort</span>
                      <svg
                        class="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    class="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                    tabindex="-1"
                    v-if="isOpen"
                  >
                    <ul class="py-1" @mouseleave="isOpen = false">
                      <li
                        @click="setOption(option.name)"
                        @mouseleave="isOpen = false"
                        v-for="option in sortOptions"
                        :key="option.name"
                        class="block px-4 py-2 text-sm hover:bg-gray-100"
                        :class="
                          option.current
                            ? 'font-medium text-gray-900'
                            : 'text-gray-500'
                        "
                      >
                        {{ option.name }}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <button
                  type="button"
                  class="p-2 ml-5 -m-2 text-gray-400 sm:ml-7 hover:text-gray-500"
                >
                  <span class="sr-only">View grid</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  class="p-2 ml-4 -m-2 text-gray-400 sm:ml-6 hover:text-gray-500 lg:hidden"
                >
                  <span class="sr-only">Filters</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
  
            <section aria-labelledby="products-heading" class="pt-6 pb-24">
              <h2 id="products-heading" class="sr-only">Products</h2>
  
              <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                <!-- Filters -->
                <form class="hidden lg:block">
                  <h3 class="sr-only">Categories</h3>
                  <ul
                    role="list"
                    class="pb-6 space-y-4 text-sm font-medium text-gray-900 border-b border-gray-200"
                  >
                    <li>
                      <a href="#">
                        Totes
                      </a>
                    </li>
  
                    <li>
                      <a href="#">
                        Backpacks
                      </a>
                    </li>
                    <!-- Travel Bags, Hip Bags, Laptop Sleeves-->
                  </ul>
                  <!-- color filter     -->
                  <div class="py-6 border-b border-gray-200">
                    <h3 class="flow-root -my-3">
                      <button
                        type="button"
                        class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                        @click="isColorOpen = !isColorOpen" 
                      >
                        <span class="font-medium text-gray-900">
                          Color
                        </span>
                        <span class="flex items-center ml-6">
                          <svg
                            class="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            v-if="!isColorOpen"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            v-else
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div class="pt-6" id="filter-section-0" v-if="isColorOpen">
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-color-0"
                            name="color[]"
                            value="white"
                            type="checkbox"
                            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <label
                            for="filter-color-0"
                            class="ml-3 text-sm text-gray-600"
                          >
                            White
                          </label>
                        </div>
                        <!-- Beige Blue Brown Green Purple -->
                      </div>
                    </div>
                  </div>
                  <!-- size filter -->
                  <div class="py-6 border-b border-gray-200">
                    <h3 class="flow-root -my-3">
                      <button
                        type="button"
                        class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500"
                        aria-controls="filter-section-2"
                        aria-expanded="false"
                        @click="isSizeSelectorOpen = !isSizeSelectorOpen"
                      >
                        <span class="font-medium text-gray-900">
                          Size
                        </span>
                        <span class="flex items-center ml-6">
                          <svg
                            class="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            v-if="!isSizeSelectorOpen"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            v-else
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div class="pt-6" id="filter-section-2" v-if="isSizeSelectorOpen">
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input
                            id="filter-size-0"
                            name="size[]"
                            value="2l"
                            type="checkbox"
                            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <label
                            for="filter-size-0"
                            class="ml-3 text-sm text-gray-600"
                          >
                            S
                          </label>
                        </div>
  
                        <div class="flex items-center">
                          <input
                            id="filter-size-1"
                            name="size[]"
                            value="6l"
                            type="checkbox"
                            class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                          <label
                            for="filter-size-1"
                            class="ml-3 text-sm text-gray-600"
                          >
                            M
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
  
                <!-- Product grid -->
                <div class="lg:col-span-3">
                  <ProductsProductList />
                </div>
              </div>
            </section>
          </main>
        </div>
   </div>
  </template>
  
  