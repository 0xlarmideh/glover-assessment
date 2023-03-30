<template>
  <Paragraph class="font-semibold text-black text-[18px]">All Events</Paragraph>
  <div class="grid grid-cols-2 gap-4">
    <div v-for="event in events" :key="event.id">
      <EventCard :title="event.title" :link="event.url" :location="event.location" :index="event.id" :source="event.img_url"   />
    </div>
  </div>
</template>

<script>
import EventCard from './EventCard.vue';
import { Paragraph } from '../index';
import axios from "axios";
import userData from "../data.json"

export default {
  name: "AllEvent",
  components: {
    EventCard, Paragraph
  },
  data(){
    return {
      loading: true,
      events: userData,
    };
  },
  
};

</script>

<style>

</style>