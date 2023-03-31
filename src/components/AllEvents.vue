<template>
  <ParagraphBlack class="font-semibold text-black text-[18px] my-6">All Events</ParagraphBlack>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="event in Events" :key="event.id">
      <EventCard
        :title="event.title"
        :link="event.url"
        :location="event.location"
        :index="event.id"
        :source="event.img_url"
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
  emits: ["search"],
  data() {
    return {
      loading: true,
    };
  },
  props: ["Events"]
};
</script>

<style></style>
