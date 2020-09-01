<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>
<script>
  import Float from '@/components/Float.vue';
  import Header from "@/templates/Header";
  export default {
    components:{Header, Float}
  }

</script>
