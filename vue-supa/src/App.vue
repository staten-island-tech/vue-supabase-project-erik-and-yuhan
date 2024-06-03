<template>
  <div>
    <SignIn/>
    <RouterLink to="/"></RouterLink>
  </div>
  <RouterView/>
</template>

<script setup>
import SignIn from './components/SignIn.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<style  scoped>

</style>