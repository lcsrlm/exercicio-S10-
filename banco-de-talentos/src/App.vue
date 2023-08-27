
<template>
  <Menu />
<router-view></router-view>

</template>

<script>
import Menu from './views/Menu/Menu.vue';
import NewTalent from './views/Talents/New/NewTalent.vue';
import About from './views/About/About.vue';
import Home from './views/Home/Home.vue';
export default {

  components: {
    Menu,
    NewTalent,
    About,
    Home
  }
}
</script>


<style>
</style>
