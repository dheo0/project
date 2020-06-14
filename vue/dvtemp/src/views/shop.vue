<template>
  <div class="list-wrap">
    <ShopList :column="3"></ShopList>
  </div>
</template>

<script>
import ShopList from "@/components/ShopList.vue";
export default {
  name: "shop",
  components: {
    ShopList
  }
};
</script>

<style scoped lang="scss"></style>
