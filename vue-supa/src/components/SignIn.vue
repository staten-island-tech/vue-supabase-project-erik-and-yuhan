<template>
<div class="signIn">
  <h1>Sign In Here</h1>
  <form @submit.prevent="signIn">
  <div class="input">
    <label for="email">Email</label>
    <input type="email" v-model="email" required />
  </div>
  <div class="input">
    <label for="password">Password</label>
    <input type="password" v-model="password" required />
  </div>
  <button type="submit">Sign In</button>
  <p v-if="error"> {{ error }}</p>
  </form>
</div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from './supabaseClient';

export default {
  name: 'SignIn', 
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref('')

    const SignIn = async () => {
      error.value = ''
      const { user, error: signInError} = await supabase.auth.signIn({
        email : email.value, 
        password : password.value, 
      })
      if (signInError) {
        error.value = signInError.message
      } else {
        console.log('User signed in!', user)
      }
    }
    return { 
      email,
      password, 
      error, 
      SignIn, 
    }
  }
}
</script>