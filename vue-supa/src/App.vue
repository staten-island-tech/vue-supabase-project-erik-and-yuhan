<template>
  <h1>Test</h1>
  <div id="app"> 
    <SignIn />
  </div>

</template>

<script>


import { SignIn } from './components/SignIn.vue';

export default { 
  name: 'App', 
  components: {
    SignIn
  }
}
</script>

