<template>
  <div>
    <!--greeting-->
    <div>
      <Greeting></Greeting>
    </div>
    <!--profile-->
    <div>
      <Profile></Profile>
    </div>

    <!--portfolio-->
    <div>
      <Portfolio></Portfolio>
    </div>

    <!--contact-->
    <div>
      <Contact></Contact>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Greeting from '@/components/Greeting.vue'
import Profile from '@/components/Profile.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'


export default {
  name: 'home',
  components: {
    Greeting, Profile, Portfolio, Contact
  }
}
</script>
