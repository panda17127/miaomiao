<template>
   <div>
      <Header title="我的喵喵"></Header>
      <Tabbar></Tabbar>
   </div>
</template>
<script>
   import Header from '@/components/Header';
   import Tabbar from '@/components/Tabbar';
   export default {
      name: 'Mine',
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
