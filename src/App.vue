<template>
  <Nav />
  <main >
    <div class="relative">
      <label class="absolute inset-y-[11px] left-0 pl-4"><Icon icon="ri:search-2-line" color="#6c757d" width="20" :horizontalFlip="false" /></label>
      <input
      class=" border-stroke border-[1px] focus:outline-none focus:border-cyan-300 focus:border-[2px] w-[500px] max-md:w-full rounded-[10px] mb-12 p-2 pl-12"
      type="text"
      placeholder="Search"
      v-model="searchTerm"
    /></div>
    
    
    <FeaturedEvents />
    <AllEvents :Events="handleFilter" />
  </main>
</template>

<script>
import FeaturedEvents from "./components/FeaturedEvents.vue";
import AllEvents from "./components/AllEvents.vue";
import { Button } from "./index.js";
import Nav from "./components/Nav.vue";
import userData from "./data.json";
import { Icon } from "@iconify/vue";

export default {
  name: "App",
  components: {
    Button,
    FeaturedEvents,
    Nav,
    AllEvents,
    Icon
  },

  data() {
    return {
      searchTerm: "",
      AllEvents: userData,
    };
  },
  computed: {
    handleFilter() {
      // If the search term is empty, return all events
      if (!this.searchTerm) {
        return this.AllEvents;
      }
      // Filter the events based on the search term
      return this.AllEvents.filter((event) => {
        return event.title
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
          
      });

    },
  },
};
</script>

<style>
#app {
  font-family: "BR Firma", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f9fb;
  padding: 4rem 7rem;
}
@media screen and (max-width: 1280px){
    /*Tablets [601px -> 1200px]*/
    #app {
      padding: 4rem 3rem
    }
}

@media screen and (max-width: 768px){
    /*Tablets [601px -> 1200px]*/
    #app {
      padding: 4rem 1rem
    }
}
</style>
