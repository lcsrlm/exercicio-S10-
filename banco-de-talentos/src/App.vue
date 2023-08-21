
<template>
  <Menu />
<router-view></router-view>

</template>

<script>
import Menu from './components/Menu/Menu.vue';
import NewTalent from './components/Talents/New/NewTalent.vue';
import About from './components/About/About.vue';
import Home from './components/Home/Home.vue';
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
