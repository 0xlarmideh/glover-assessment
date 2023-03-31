<template>
  <ParagraphBlack class="text-[18px] mb-6">Featured Events</ParagraphBlack>
  <div class="relative">
    <div class="grid grid-cols-2 gap-4 max-md:block" >
      <div  class="  max-md:w-full" v-for="(event, index) in carouselData" :key="event.id">
        <FeaturedCard
          :title="event.lineup[0]"
          :link="event.url"
          :location="event.venue.city"
          :index="index + 1"
        />
      </div>
    </div>
    <button
      v-if="currentPage !== 1"
      class="absolute left-[-12px] bottom-[50%] p-[2px] rounded-full bg-white shadow"
      @click="currentPage--"
    >
      <Icon
        icon="material-symbols:arrow-forward-ios"
        :horizontalFlip="true"
        color="#6c757d"
        width="24"
      />
    </button>
    <button
      v-if="currentPage !== totalPages"
      class="absolute right-[-12px] bottom-[50%] p-[2px] rounded-full bg-white shadow"
      @click="currentPage++"
    >
      <Icon
        icon="material-symbols:arrow-forward-ios"
        color="#6c757d"
        width="24"
      />
    </button>
  </div>
</template>

<script>
import FeaturedCard from "./FeaturedCard.vue";
import axios from "axios";
import { Paragraph, ParagraphBlack } from "../index.js";
import { Icon } from "@iconify/vue";

export default {
  name: "FeaturedEvent",
  components: {
    FeaturedCard,
    Paragraph,
    Icon,
    ParagraphBlack
},
  data() {
    return {
      currentPage: 1,
      perPage: 2,
      totalPages: 0,
      loading: true,
      featuredEvents: [],
      screenWidth: 0,
    };
  },
  methods: {
    async fetchData() {
      // Set loading to true
      this.loading = true;
      try {
        const response = await axios.get(
          "https://rest.bandsintown.com/artists/john%20legend/events?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe"
        );
        // Assign API data to featuredEvents
        this.featuredEvents = response.data;

        // Calculate totalPages
        this.totalPages = Math.ceil(this.featuredEvents.length / this.perPage);

        console.log(this.featuredEvents);
      } catch (error) {
      } finally {
        // set loading to false after fetch data
        this.loading = false;
      }
    },

    // Attach event listener to the window to track size changes
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    
    // Function to update window width, recalculate perPage and totalPages
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
      this.screenWidth < 900 ? (this.perPage = 1) : (this.perPage = 2);
      
      if (this.totalPages > 2 && this.screenWidth >= 900) {
        this.currentPage = 2;
      }
      this.totalPages = Math.ceil(this.featuredEvents.length / this.perPage);
    },
  },
  computed: {
    // Function to create a computed data for our Carousel display
    carouselData() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.featuredEvents.slice(startIndex, endIndex);
    },
  },
  mounted() {
    // Call all function on mount
    this.updateScreenWidth();
    this.onScreenResize();
    this.fetchData();
  },
};
</script>

<style>
.shadow {
  box-shadow: 0px 4px 10px rgba(36, 79, 190, 0.1);
}
</style>
