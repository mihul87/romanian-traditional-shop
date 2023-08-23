  <script setup>
   const props = defineProps({
    person: Object,
    required: true
   });
      
  const clothesList = computed( () => props.person.clothes);
</script>

<template>
    <li class="group">
      <button type="button" class="btn-people">
        <UIHeroicons :name="props.person.icon"/>
        <span>{{ props.person.name }}</span>
      </button>
      <div class="absolute top-18 -left-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[1400px] transform
      -mt-6 overflow-hidden font-normal normal-case bg-white border-2 border-gray-600 rounded-md shadow-md"
      >
        <ul
          class="grid grid-cols-1 p-6 gap-y-6 gap-x-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <li
              v-for="item in clothesList"
              :key="item.title"
              class="relative z-20 px-4 my-6 text-white rounded-md group bg-orient-default hover:bg-gray-300 hover:text-orient-default"
            >
              <NuxtLink to="product">
                <div class="lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-6">
                  <div class="lg:-my-4">
                    <nuxt-img class="object-cover lg:h-full lg:w-full "
                        src="angel.jpg"
                        alt="angel"
                        format="webp"
                    />
                    <!-- <div class="absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden">
                      <div class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                          <div class="overflow-hidden border-2 shadow-xl border-orient-default aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                          </div>
                      </div>
                    </div> -->
                  </div>  
                  <div class="flex flex-col justify-center lg:m-0">
                    <p class="text-base font-bold tracking-wide">
                      {{ item.title }}
                    </p>
                    <p class="text-sm">
                      {{ item.subtitle }}
                    </p>
                  </div>
                </div>
              </NuxtLink>
          </li>
        </ul>
      </div>
    </li>
</template>

  <style scoped>
  .btn-people {
    @apply items-center text-sm pt-2 pb-1 px-2 rounded-t-md transition duration-300 cursor-pointer text-orient-default font-bold hover:bg-gray-300 active:bg-gray-300;
  }
  </style>