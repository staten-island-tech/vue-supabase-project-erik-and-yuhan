<template>
    <div>
      <div>
        <form @submit.prevent="handleAuth(login ? 'login' : 'signup')">
          <input required type="email" placeholder="Email" v-model="email" />
          <input required type="password" placeholder="Password" v-model="password" />
          <input type="submit" :value="login ? 'Log in' : 'Sign up'" />
        </form>
      </div>
  
      <button @click="login = !login">
        <h3 v-if="login">Click to sign up</h3>
        <h3 v-else>Click to log in</h3>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { supabase } from '@/stores/supabase'
  import router from '@/router'
  import { sessionStore } from '@/stores/session';
  
  const password = ref("")
  const email = ref("")
  const login = ref(true)
  
  async function loginOrSignup (type) {
    try {
      
      if (type == "login") {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value
        })
        if (error) throw error
        return data
  
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value
        })
        if (error) throw error
        return data
      }
  
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }
  
  async function handleAuth (type) {
    const data = await loginOrSignup(type)
    
    if (data && data.user && data.session) {
      sessionStore().changeSession({ 
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        token_type: data.session.token_type,
        authenticated: true,
        id: data.user.id,
        email: data.user.email
      })
      
      router.push("/home")
    }
  }
  </script>
  
  <style>
  
  </style>