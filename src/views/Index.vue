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

    <!--musinsa-->
    <div>
      <Musinsa></Musinsa>
    </div>

    <!--contact-->
    <div>
      <Contact></Contact>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Greeting from './Greeting.vue'
import Musinsa from './Musinsa.vue'
import Profile from './Profile.vue'
import Contact from './Contact.vue'


export default {
  name: 'Index',
  components: {
    Greeting, Musinsa, Profile, Contact
  }
}
</script>
