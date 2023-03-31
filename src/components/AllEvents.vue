<template>
  <ParagraphBlack class="font-semibold text-black text-[18px] my-6">All Events</ParagraphBlack>
  <div class="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 mb-[2rem]">
    <div v-for="(event, index) in Events" :key="event.id">
      <EventCard
        :title="event.title"
        :link="event.url"
        :location="event.location"
        :date="event.date"
        :source="selectImage(images[index])"
      />
    </div>
  </div>
</template>

<script>
import EventCard from "./EventCard.vue";
import { Paragraph, ParagraphBlack } from "../index";

export default {
  name: "AllEvent",
  components: {
    EventCard,
    Paragraph,
    ParagraphBlack
},
  data() {
    return {
      loading: true,
    };
  },
  props: ["Events"],
  methods: {
    importAll(r) {
        return r.keys().map(x =>
          x.substring(2, x.length) // remove "./" from file names
        )
      },
      selectImage(image) {
        return require('@/assets/placeholders/' + image)
      }
  },
  computed: {
      images: function() {
        const x = require.context('@/assets/placeholders/', true, /\.png$/)
        return this.importAll(x)
      }
    },
};
</script>

<style></style>
