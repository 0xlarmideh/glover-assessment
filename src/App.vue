<template>
  <!-- <h1 class="text-slate-500 text-[60px]">TEST</h1> -->
    <!-- <Button link="#">Buy Tickets</Button> -->
    <Nav />
    <main>
      <input class="border-slate-300 rounded-[10px] p-2" type="text" placeholder="Search events" v-model="searchTerm">
      <FeaturedEvents />
      <AllEvents :events="filteredEvents" />
      <EventCard />
    </main>
</template>

<script>
import EventCard from './components/EventCard.vue';
import FeaturedEvents from './components/FeaturedEvents.vue';
import AllEvents from './components/AllEvents.vue';
import {Button} from './index.js';
import Nav from "./components/Nav.vue";
import userData from "./data.json"

// import EventCard from './components/EventCard.vue';
export default {
  name: 'App',
  components: {
    Button,
    FeaturedEvents,
    Nav,
    AllEvents,
    EventCard
},
data () {
  return {
    AllEvents: userData,
    filteredEvents: userData

}},

}
</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'BR Firma', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f9fb;
  padding: 4rem 7rem;

}
</style>

