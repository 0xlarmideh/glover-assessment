<template>
  <nav class="mb-[2rem] flex justify-between items-center">
    <Heading>Events</Heading>
    <div class="flex items-center gap-4">
      <img class="rounded-[12px] w-[30%]"  src="../assets/Bernice.png" alt="profile-picture">
      <Paragraph class="font-semibold text-black">Bernice</Paragraph>
      <div class="rounded-full p-[2px] bg-[#EAEDF7]"><Icon icon="material-symbols:keyboard-arrow-down-rounded" color="#00000" :horizontalFlip="true" /></div>
    </div>
  </nav>
</template>

<script>
import { Heading, Paragraph } from "../index.js";
import { Icon } from "@iconify/vue";

export default {
  name: "Nav",
  components: {
    Heading, Paragraph, Icon
  }
}
</script>