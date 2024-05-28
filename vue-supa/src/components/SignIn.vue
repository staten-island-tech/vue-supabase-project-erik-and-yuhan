<script>
import { supabase } from './supabaseClient';
import { RouterLink, RouterView } from 'vue-router';

export default {
  data(){
    return{
      user: {
        Email: '', 
        Password: '', 
      },
      loggedIn: false
    }
  }, 
  methods: {
    async login(){
      try { 
        const { user, session, error } = await supabase.auth.signInWithPassword({
          email: this.user.Email, 
          password: this.user.Password
        })
        if (error) {
          console.error(error.message)
          document.querySelector("h3").textContent = ("Password or email incorrect")
        }
        else {
          this.loggedIn = true; 
          document.querySelector("h3").textContent = ("Logged in successfully")
          this.$router.push('/home')
        }
       
      }
      catch(error) {
          console.log(error.message)
        }
    }, 
    Submit() {
      this.login()
    }
  }
}
</script>

<template> 
<form class="form-widget" @submit.prevent="Submit"></form>
<h3></h3>

</template>