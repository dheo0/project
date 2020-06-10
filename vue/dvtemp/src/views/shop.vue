<template>
  <div class="list">
    sdfsdf
    <ShopList></ShopList>
  </div>
</template>

<script>
import ShopList from "@/components/ShopList.vue";
export default {
  name: "shop",
  components: {
    ShopList
  },
  data() {
    return {
      currentTab: 0,
      tabs: ["tab1", "tab2", "tab3"]
    };
  }
};
</script>

<style scoped lang="scss"></style>
