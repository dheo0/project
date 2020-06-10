<template>
  <div class="list">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <div class="thumbnail">
          <a href="#none" class="img">
            <img :src="item.src" alt="상품명" />
          </a>
        </div>
        <div class="summary">
          <div class="title">
            <a href="#none">{{ item.title }}</a>
          </div>
          <div class="sales">
            <span class="percent"> <em>38</em> %</span>
            <span class="sprice">
              <strong>{{ item.sprice | comma }}</strong>
            </span>
            <span class="rprice"
              ><del>{{ item.rprice | comma }}</del></span
            >
          </div>
          <div class="etc">
            <span class="point">최대 2.3% 적립</span>
            <span class="delivery"> 무료배송 </span>
            <span class="sold">구매 {{ item.sold | comma }} </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShopList",
  data() {
    return {
      items: [],
      list: [
        {
          src: "http://localhost:8080/img/temp/test.jpg",
          title: "국산 오이소박이 1kg",
          sold: 852,
          sprice: 9700,
          rprice: 15900
        }
      ]
    };
  },
  mounted() {
    axios
    .get("http://localhost:8080/data/list.json")
    .then(res => {
      this.items = res.data.goods;
    });
  },
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>

<style scoped lang="scss">
$bgColor : #e5e5e5;

@mixin aspect-ratio($width, $height) {
  position: relative;
  width: 100%;
  padding-top: ($height / $width) * 100%;
  overflow: hidden;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
}

.list {
  .thumbnail {
    position: relative;
    overflow: hidden;
    @include aspect-ratio(16, 9);
    a {
      display: block;
      background: $bgColor;
    }
  }
}
</style>
