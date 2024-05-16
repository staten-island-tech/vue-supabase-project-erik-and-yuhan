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
//seeCurrentuser
function seeCurrentuser() {
  console.log ("seeCurrentUser")
}
//logout
function logout () {
  console.log ("logout")
}
</script>

