<template>
   <div>
      <Header title="喵喵影院"></Header>
      <Tabbar></Tabbar>
   </div>
</template>
<script>
   import Header from '@/components/Header';
   import Tabbar from '@/components/Tabbar';
   export default {
      name: 'Cinema',
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
