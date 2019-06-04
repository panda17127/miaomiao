<template>
   <div class="wrapper" ref="wrapper">
      <slot></slot>
   </div>
</template>
<script>
   import BScroll from 'better-scroll';
   
   export default {
      name: 'Scroller',
      props: {
         handleToScroll: {
            type: Function,
            default: function () {
            }
         },
         handleToTouchEnd: {
            type: Function,
            default: function () {
            }
         }
      },
      mounted() {
         this.$nextTick(() => {
            let scroll = new BScroll(this.$refs.wrapper, {
               tap: true,
               probeType: 1 // 1 会节流 2 不会节流
            });
            this.scroll = scroll;
            scroll.on('scroll', (pos) => {
               this.handleToScroll(pos);
            })
            scroll.on('touchEnd', (pos) => {
               this.handleToTouchEnd(pos);
            })
         })
      },
      data() {
         return {}
      },
      methods: {
         toScrollTop(y) {
            this.scroll.scrollTo(0, y);
         }
      }
   }
</script>
<style scoped>
   .wrapper {
      height: 100%;
   }
</style>
