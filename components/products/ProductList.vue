<script setup>
  const products =  [
    {
      id: 1,
      name: "Costum popular - Muscel, Argeș",
      to: "/products/costum-muscel",
      price: "£600",
      description: "Costum expus la Muzeul Național al Principatului Liechtenstein",
      imageSrc: "costum_muscel.jpg",
      imageAlt: "Costum popular - Muscel, Argeș"
    },
    {
      id: 2,
      name: "Costum popular din Corbi",
      to: "/products/costum-corbi",
      price: "£800",
      description:
        "Diana Georgescu - Sânzienele și Ziua Universală a Iei 2014",
      imageSrc: "costum_corbi.jpg",
      imageAlt: "Ziua iei"
    },
    {
      id: 3,
      name: "Costum popular din Arges",
      to: "/products/costum-arges",
      price: "£450",
      description:
        "Andreea Catalina Draghici - Costum tradițional din Argeș cu o vechime de 80 de ani",
      imageSrc: "costum_arges.jpg",
      imageAlt: "Costum popular din Argeș"
    },
    {
      id: 4,
      name: "Costum popular din Săpânța",
      to: "/products/sapanta",
      price: "£400",
      description: "Costum popular din Săpânța, Maramureș",
      imageSrc: "costum_sapanta.jpg",
      imageAlt: "Costum popular din Săpânța, Maramureș."
    },
    {
      id: 5,
      name: "Costum popular - Vișeu de Sus, Maramureș",
      to: "/products/costum-viseu-de-sus",
      price: "£600",
      description: "Domul Fănică din Vișeu de Sus, Maramureș",
      imageSrc: "costum_viseu.jpg",
      imageAlt: "Costum popular - Vișeu de Sus, Maramureș."
    },
    {
      id: 6,
      name: "Costumul miresei - Grid, Țara Făgărașului",
      to: "/products/costum-mireasa",
      price: "£1000",
      description: "Costumul miresei purtat de Petra Urdea din 1951",
      imageSrc: "costum_fagaras.jpg",
      imageAlt: "Costumul miresei - Grid, Țara Făgărașului"
    }
  ]
    
</script>

<template>
    <section
      class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8"
    >
      <nuxt-link
        v-for="product in products"
        :key="product.id"
        :to="product.to"
        class="group"
      >
        <div
          class="w-full overflow-hidden rounded-lg aspect-w-1 aspect-h-1 sm:aspect-w-2 sm:aspect-h-3"
        >
          <!-- <img
            :src="require(`~/assets/images/products/${product.imageSrc}`)"
            :alt="product.imageAlt"
            class="object-cover object-center w-full h-full group-hover:opacity-75"
          /> -->
        </div>
        <div
          class="flex items-center justify-between mt-4 text-base font-medium text-gray-900"
        >
          <h3>
            {{ product.name }}
          </h3>
          <p>
            {{ product.price }}
          </p>
        </div>
        <p class="mt-1 text-sm italic text-gray-500">
          {{ product.description }}
        </p>
      </nuxt-link>
    </section>
  </template>