<script setup> 
import { supabase } from './supabaseClient'
import { onMounted } from 'vue'

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
}

onMounted(() =>{
    signInWithEmail()
})

</script>

<template> 
<form class="form-widget" @submit.prevent="signInWithEmail"></form>

</template>