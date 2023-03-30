<template>
  <p class="font-semibold text-black text-[18px]">Featured Events</p>
  <div class="relative">
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(event, index) in carouselData" :key="event.id">
        <FeaturedCard :title="event.lineup[0]" :link="event.offers.url" :location="event.venue.city" :index="index + 1"   />
      </div>
    </div>
    <button v-if="currentPage !== 1" class="absolute left-[-12px] bottom-[50%] p-[2px] rounded-full bg-white shadow" @click="currentPage--"><Icon icon="material-symbols:arrow-forward-ios" :horizontalFlip="true" color="#6c757d"  width="24" /></button>
    <button v-if="currentPage !== totalPages" class="absolute right-[-12px] bottom-[50%] p-[2px] rounded-full bg-white shadow" @click="currentPage++"><Icon icon="material-symbols:arrow-forward-ios" color="#6c757d"  width="24" /></button>
  </div>
</template>

<script>
import FeaturedCard from './FeaturedCard.vue';
import axios from "axios";
import { Paragraph } from '../index.js';
import { Icon } from "@iconify/vue";

export default {
  name: "FeaturedEvent",
  components: {
    FeaturedCard, Paragraph, Icon
  },
  data(){
    return {
      currentPage: 1,
      perPage: 2,
      totalPages: 0,
      loading: true,
      featuredEvents: []
    }
  },
  methods: {
    async fetchData() {
      // await new Promise((resolve) => setTimeout(resolve, 1700));
      this.loading = true;
      try {
        const response = await axios.get(
          "https://rest.bandsintown.com/artists/john%20legend/events?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe"
        );
        this.featuredEvents = response.data;
        this.totalPages = Math.ceil(this.featuredEvents.length / this.perPage);
        console.log(this.featuredEvents)
      } catch (error) {
      } finally {
        this.loading = false;
      }
  }
},
computed: {
    carouselData() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.featuredEvents.slice(startIndex, endIndex);
    },
  },
mounted() {
   // Check screen width and set perPage accordingly
    if (window.innerWidth < 768) {
      this.perPage = 1;
    }else {
      this.perPage = 2
    }
    this.fetchData();
  }
};
</script>

<style>
  .shadow {
    box-shadow: 0px 4px 10px rgba(36, 79, 190, 0.1);
  }
</style>