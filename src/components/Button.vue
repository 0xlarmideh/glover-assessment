<template>
  <button  :href="link" class="py-[8px] px-[14px] border-2 border-blue-800 text-[12px] text-blue-800 rounded-[10px] font-semibold"><slot></slot></button>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: false
    },

  }
};
</script>


