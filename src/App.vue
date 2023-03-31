<template>
  <Nav />
  <main>
    <input
      class="border-stroke border-[1px] w-[600px] max-md:w-full rounded-[10px] mt-6 mb-12 p-2 pl-12"
      type="text"
      placeholder="Search"
      v-model="searchTerm"
    />
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

export default {
  name: "App",
  components: {
    Button,
    FeaturedEvents,
    Nav,
    AllEvents,
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
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "BR Firma", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f9fb;
  padding: 4rem 7rem;
}
</style>
