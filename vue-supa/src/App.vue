<template>
  <h1>Test</h1>
  <div class="inputContainer">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email">
      </div>

      <div class="inputContainer">
          <label for="password">password:</label>
          <input type="password" id="password" v-model="password">
      </div>
      <div class="buttonContainer">
          <button @click = "CreateAccount">create</button>
          <button @click = "login">login</button>
          <button @click = "seeCurrentuser">see user</button>
          <button @click = "logout">logout</button>
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
<<<<<<< HEAD
import { supabase } from './components/supabaseClient'
import Auth from './components/AuthSupa.vue'
import Account from './components/AccountSupa.vue'
import SignIn from './components/SignIn.vue'
=======
>>>>>>> yuhan

//connects input
let email = ref("")
let password = ref("")

//create account
function CreateAccount() {
  console.log ("create account")
}
//login
function login() {
  console.log ("login")
}
<<<<<<< HEAD


const session = ref()

onMounted(() => {

  supabase.auth.getSession().then(({ data }) => {
    session.value=data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })

  getCountries()
  getNames()
})





</script>

<template>

  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
    <SignIn></SignIn>
    
  </div>


</template>
=======
//seeCurrentuser
function seeCurrentuser() {
  console.log ("seeCurrentUser")
}
//logout
function logout () {
  console.log ("logot")
}
</script>

>>>>>>> yuhan
