<template>
  <div id="app">
    <Float/>
    <router-view/>
  </div>
</template>
<script>
  import Float from '@/components/Float.vue';
  export default {
    components:{Float}
  }

</script>
