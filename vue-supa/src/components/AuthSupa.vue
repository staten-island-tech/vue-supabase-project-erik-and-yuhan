<script>
import { RouterLink, RouterView } from 'vue-router';
import { supabase } from './supabaseClient';

export default {
  data() {
    return{
      users: [], 
      user: {
        Email: '',
        Password: '', 
      }
    }
  },
methods: {
  Submit() {
    this.users.push(this.user)
    this.user = {Email: '', Password: '',};
    console.log(this.users)
    this.users.forEach(async(user) => {
      let { data, error } = await supabase.auth.signUp({
        email: user.Email, 
        password: user.Password, 
      });
      if (error) { 
        console.log(error.message); 
      }
      else {
        console.log(data);
      }
    }, 
  )  
}
}
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">HI</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" required type="email" placeholder="Your email" v-model="email" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>