<template>
  <div class="relative bg-white p-[20px] rounded-[10px]">
    <div class="flex flex-col gap-[12px]">
      <img
        src="../assets/Placeholder.png"
        class="rounded-[10px]"
        alt="event-image"
      />
      <Paragraph class="font-bold text-black" v-if="title">{{ title }} in {{ location }} {{ [index] }}</Paragraph>
      <Paragraph class="font-bold text-black" v-else>Event {id}</Paragraph>
      <div class="flex justify-between items-end">
        <div class="flex flex-col gap-[12px]">
          <div class="flex gap-[30px]">
            <div class="flex gap-[10px] items-center">
              <Icon
                icon="material-symbols:location-on-outline"
                color="#6c757d"
              />
              <Paragraph v-if="location">{{location}}</Paragraph>
              <Paragraph v-else>Lagos</Paragraph>
            </div>
            <div class="flex gap-[10px] items-center">
              <Icon icon="uiw:date" color="#6c757d" />
              <Paragraph v-if="date">{date}</Paragraph>
              <Paragraph v-else>31st Oct, 2021</Paragraph>
            </div>
          </div>

          <div class="flex gap-[10px] items-center">
            <Icon
              icon="akar-icons:ticket"
              color="#6c757d"
              :horizontalFlip="true"
            />
            <Paragraph class=""
              >Starting from
              <span class="text-blue-900 text-[14px] font-semibold"
                >#15,000</span
              ></Paragraph
            >
          </div>
        </div>

        <Button class="right-0 text-[16px] py-[10px] px-[16px]" :link="link">Buy Tickets</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Paragraph } from "../index.js";
import { Icon } from "@iconify/vue";

export default {
  name: "FeaturedCard",
  components: {
    Button,
    Paragraph,
    Icon,
  },
  props: ["title", "location", "date", "link", 'id', "index"],
};
</script>

<style></style>
