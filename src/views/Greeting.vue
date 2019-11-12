<template>
  <section class="bg-blue w-screen h-screen p-20 flex flex-col justify-center">
    <div class="text-6xl text-white font-semibold">안녕하세요,</div>
    <div class="text-6xl text-white font-semibold">Front-End 개발자 윤주혜입니다.</div>
  </section>
</template>

<script>
export default {
  name: 'Greeting',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
