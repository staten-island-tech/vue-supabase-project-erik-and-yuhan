<template>
  <h1>Test</h1>
  <AuthSupa></AuthSupa>

</template>

<script setup>
import { ref } from 'vue'

import AuthSupa from './components/AuthSupa.vue';

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

