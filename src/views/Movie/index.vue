<template>
   <div>
      <Header></Header>
      <Tabbar></Tabbar>
   </div>
</template>
<script>
   import Header from '@/components/Header';
   import Tabbar from '@/components/Tabbar';
   export default {
      name: 'Movie',
      components: {
         Header,
         Tabbar
      },
      data() {
         return {}
      }
   }
</script>
<style scoped>
</style>
