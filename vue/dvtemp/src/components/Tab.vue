<template>
  <div class="tabWrap">
    <ul class="tabMenu">
      <li
        v-for="(tab, index) in tabs"
        v-bind:key="index"
        v-bind:class="{ on: currentTab === index }"
      >
        <a href="#none" v-on:click="currentTab = index"> {{ tab }} </a>
      </li>
    </ul>
    <div class="tab-cont" v-bind:class="{ on: currentTab === 0 }" id="tab1">
      Tab1
      <slot name="tabCont01"></slot>
    </div>
    <div class="tab-cont" v-bind:class="{ on: currentTab === 1 }" id="tab2">
      Tab2
    </div>
    <div class="tab-cont" v-bind:class="{ on: currentTab === 2 }" id="tab3">
      Tab3
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      currentTab: 0,
      tabs: ["tab1", "tab2", "tab3"]
    };
  }
};
</script>

<style scoped lang="scss">
.tab-cont {
  display: none;
}
.tab-cont.on {
  display: block;
}
.tabWrap {
  .tabMenu {
    li {
      float: left;
      border: 1px solid #bababa;
      &.on {
        a {
          background: #000;
          color: #fff;
        }
      }
      a {
        display: block;
        padding: 6px 10px;
      }
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
}
</style>
