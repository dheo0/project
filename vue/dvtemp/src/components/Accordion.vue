<template>
  <div class="accorWrap">
    <ul class="accorList">
      <li v-for="(item, index) in parentData" v-bind:key="index">
        <a href="#none" v-on:click.prevent="accorCheck"> {{ item.title }} </a>
        <div class="answer">{{ item.content }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    parentData: {
      type: Array,
      default: null
    },
    accoType: {
      // 컨텐츠가 열리는 타입 toggle 형 or click
      type: String,
      default: "all"
    }
  },
  methods: {
    accorCheck: function(event) {
      var accorList = document.querySelectorAll(".accorList > li > a");
      if (this.accoType === "all") {
        for (var i = 0; i < accorList.length; i++) {
          accorList[i].classList.remove("active");
        }
        event.target.classList.add("active");
      } else {
        event.target.classList.toggle("active");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.answer {
  display: none;
}
a.active {
  + .answer {
    display: block;
  }
}
</style>
