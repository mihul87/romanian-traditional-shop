
  
  <script setup>
    const people = [
          {
            id: "men",
            icon: "men",
            name: "Men",
            clothes: [
              {
                title: "Shirts",
                subtitle: "Tradițional, în stil modern",
                to: "men-shirts",
                src: "men/shirts"
              },
              {
                title: "Trousers",
                subtitle: "Tradițional, în stil modern",
                to: "men-trousers",
                src: "men/trousers"
              },
              {
                title: "Hats",
                subtitle: "Tradițional, în stil modern",
                to: "men-hats",
                src: "men/hats"
              },
              {
                title: "Boots",
                subtitle: "Tradițional, în stil modern",
                to: "men-boots",
                src: "men/boots"
              },
              {
                title: "Coats",
                subtitle: "Tradițional, în stil modern",
                to: "men-coats",
                src: "men/coats"
              },
              {
                title: "Belts",
                subtitle: "Tradițional, în stil modern",
                to: "men-belts",
                src: "men/belts"
              },
              {
                title: "Purses",
                subtitle: "Tradițional, în stil modern",
                to: "men-purses",
                src: "men/purses"
              }
            ]
          },
          {
            id: "women",
            icon: "women",
            name: "Women",
            clothes: [
              {
                title: "Blouses and shirts",
                subtitle: "Tradițional, în stil modern",
                to: "women-shirts",
                src: "women/shirts"
              },
              {
                title: "Dresses",
                subtitle: "Zile inspirate și colorate",
                to: "women-dresses",
                src: "women/dresses"
              },
              {
                title: "Waistcoats",
                subtitle: "Tradiționale românești",
                to: "women-waistcoats",
                src: "women/waistcoats"
              },
              {
                title: "Skirts",
                subtitle: "Motive românești tradiționale",
                to: "women-skirts",
                src: "women/skirts"
              },
              {
                title: "Coats",
                subtitle: "Motive românești tradiționale",
                to: "women-coats",
                src: "women/coats"
              },
              {
                title: "Jackets",
                subtitle: "Motive românești tradiționale",
                to: "women-jackets",
                src: "women/jackets"
              },
              {
                title: "Ii",
                subtitle: "Cusute și brodate manual",
                to: "women-ii",
                src: "women/ii"
              },
            ]
          },
          {
            id: "children",
            icon: "children",
            name: "Children",
            clothes: [
              {
                title: "Dress",
                subtitle: "Tradițional, în stil modern",
                to: "children-dress",
                src: "children/dresses"
              },
              {
                title: "Girls's suit",
                subtitle: "Tradițional, în stil modern",
                to: "children-suit",
                src: "children/skirts"
              },
              {
                title: "Suit",
                subtitle: "Tradițional, în stil modern",
                to: "children-suit",
                src: "children/shirts"
              },
              {
                title: "Ie",
                subtitle: "Tradițional, în stil modern",
                to: "children-ie",
                src: "children/ii"
              }
            ]
          }
    ]
      
  </script>
  
  <template>
    <nav class="lg:relative lg:z-30 lg:left-32 lg:-top-16 ">
      <div class="lg:flex lg:mx-2 lg:mt-3">
        <ul class="relative flex flex-col p-2 bg-white border-2 border-orient-default lg:flex-row rounded-t-md" >
          <MainNavDropdown v-for="person in people" :key="person.id" :person="person" />
        </ul>
      </div>
    </nav>
</template>
