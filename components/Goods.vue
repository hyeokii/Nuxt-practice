<template>
  <div class="goods">
    <div class="goos-imgWrap">
      <img
        v-if="isView"
        loading="lazy"
        class="goods-img"
        :src="imageUrl(item.goodsRepImgPathNm)"
        :alt="item.goodsNo"
      />
      <div v-if="item.saleStatCd === '20'" class="overlay">
        <span>품절</span>
      </div>
    </div>
    <div class="goods-like" @click="handleLike(item.goodsNo)">
      <img :src="likeIconSrc" alt="like" />
    </div>

    <div :class="{ 'goods-des': true, 'no-rate': item.dcRate === 0 }">
      <div class="goods-name">{{ item.goodsNm }}</div>
      <div class="goods-price">{{ item.rcntSalePrc }}<span>원</span></div>
      <span v-if="item.dcRate" class="goods-rate">{{ item.dcRate }}%</span>
      <span v-if="item.dcRate" class="goods-saleprice">
        {{ item.salePrc }}<span>원</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["getGoodsFavorite"]),
    isView() {
      return this.item?.goodsRepImgPathNm;
    },
    isFavorite() {
      return this.getGoodsFavorite.has(this.item.goodsNo);
    },
    likeIconSrc() {
      return this.isFavorite
        ? "https://fo.x2bee.com/images/icons/like_active.svg"
        : "https://fo.x2bee.com/images/icons/like.svg";
    },
  },
  methods: {
    ...mapActions(["addGoodsFavorite", "deleteGoodsFavorite"]),
    imageUrl(src) {
      if (src.endsWith(".png") || src.endsWith(".jpg")) {
        return `https://img-stg.x2bee.com/${src}`;
      } else if (src.endsWith(".svg")) {
        return `https://fo.x2bee.com/${src}`;
      }
    },
    async handleLike(id) {
      if (this.isFavorite) {
        await this.deleteGoodsFavorite(id);
      } else {
        await this.addGoodsFavorite(id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.goods {
  font-size: 12px;
  cursor: pointer;

  .goods-like {
    display: flex;
    justify-content: end;
    padding: 6px 0;
  }
  .goos-imgWrap {
    position: relative;
    width: 100%;
    .goods-img {
      width: 100%;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 282px;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: white;
        font-size: 16px;
      }
    }
  }

  .goods-des {
    .goods-name {
      font-size: 14px;
    }
    .goods-price {
      text-decoration: line-through;
    }

    .goods-rate {
      font-size: 14px;
      color: red;
      font-weight: bold;
    }
    .goods-saleprice {
      font-size: 14px;
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
  }
  .goods-des.no-rate {
    .goods-name {
      font-size: 14px;
    }
    .goods-price {
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
  }
}
</style>
