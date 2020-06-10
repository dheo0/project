<template>
  <div class="home">
    <Accordion v-bind:parentData="accorItem" accoType="all"> </Accordion>
  </div>
</template>

<script>
// @ is an alias to /src
import Accordion from "@/components/Accordion.vue";

export default {
  name: "Accor",
  components: {
    Accordion
  },
  data() {
    return {
      type: "separate",
      accorItem: [
        {
          title: "title",
          content: "content1"
        },
        {
          title: "title2",
          content: "content22222222"
        },
        {
          title: "title3",
          content: "content3"
        }
      ]
    };
  }
};
</script>
