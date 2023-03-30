<template>
  <div class=" bg-white p-[20px] rounded-[10px]">
    <div class="relative flex flex-col gap-[8px]">
      <img
        :src="source"
        class="rounded-[10px]"
        alt="event-image"
      />
      <div class="font-bold text-black">{{ title ? title : "Event" }}</div>
      <div
        class="absolute bottom-[2rem] right-[20px] px-[16px] py-[10px] rounded-[10px] bg-orange-100 font-semibold"
        ><Paragraph class="text-[#FF6A2C]" v-if="date">{date}</Paragraph>
      <Paragraph class="text-[#FF6A2C]" v-else>31 Oct</Paragraph></div
      >
      
      <div class="flex gap-[10px] items-center">
        <Icon icon="material-symbols:location-on-outline" color="#6c757d" />
        <Paragraph v-if="location">{{location}}</Paragraph>
        <Paragraph v-else>Lagos</Paragraph>
      </div>
      <div class="flex gap-[10px] items-center">
        <Icon icon="akar-icons:ticket" color="#6c757d" :horizontalFlip="true" />
        <Paragraph class=""
          >Starting from
          <span class="text-blue-900 text-[14px] font-semibold"
            >#15,000</span
          ></Paragraph
        >
      </div>
    </div>
    <Button class="mt-[20px]" :link="link">Buy Tickets</Button>
  </div>
</template>

<script>
import { Button, Paragraph } from "../index.js";
import { Icon } from "@iconify/vue";


export default {
  name: "EventCard",
  components: {
    Button,
    Paragraph,
    Icon,
  },
  props: ["title", "location", "link", "date", "source"],
};
</script>

<style></style>
