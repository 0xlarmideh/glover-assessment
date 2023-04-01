<template>
  <div class=" bg-white p-[14px] pb-[18px] rounded-[10px]">
    <div class="relative flex flex-col gap-[8px]">
      <img
        :src="source"
        class="rounded-[10px] w-[100%] h-[270px] object-cover"
        alt="event-image"
      />
      <ParagraphBlack class="w-[70%]" >{{ title ? title : "Event" }}</ParagraphBlack>
      <div
        class="absolute bottom-[2rem] right-[0] px-[8px] py-[8px] rounded-[10px] bg-orange-100 font-medium"
        ><p class="text-[#FF6A2C] text-[14px]" v-if="date">{{formatDate(date)}}</p>
      <p class="text-[#FF6A2C] text-[14px]" v-else>31 Oct</p></div
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
            >₦15,000</span
          ></Paragraph
        >
      </div>
    </div>
    <Button class="mt-[20px]" :link="link">Buy Tickets</Button>
  </div>
</template>

<script>
import { Button, Paragraph, ParagraphBlack } from "../index.js";
import { Icon } from "@iconify/vue";

export default {
  name: "EventCard",
  components: {
    Button,
    Paragraph,
    Icon,
    ParagraphBlack
},
  props: ["title", "location", "link", "date", "source" ],
  methods: {
    formatDate(date) {
  const options = { day: 'numeric', month: 'long' }
  const myDate = new Date(date).toLocaleDateString('en-GB', options)
  return myDate
},
  },
}
</script>

<style></style>
