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
  /* Reset some default styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #463030;
}

/* Center the form and button */
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Style the form */
form {
  display: flex;
  flex-direction: column;
  background-color: #442d2d;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

input[type="email"],
input[type="password"] {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #d69d9d;
  border-radius: 3px;
}

input[type="submit"] {
  background-color: #4CAF50;
  color: rgb(43, 35, 35);
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

/* Style the button */
button {
  margin-top: 20px;
  background-color: #008CBA;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #006B8F;
}
  </style>