<template>
  <div class="cartcontrol">
    <div v-show="food.count>0" class="cart-decrease icon-remove_circle_outline"></div>
    <div v-show="food.count>0" class="cart-count">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    prop: {
      food: {
        type: Object
      }
    },
    created() {

    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0
    .cart-decrease, .cart-add
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)
    .cart-count
      display inline-block

</style>
