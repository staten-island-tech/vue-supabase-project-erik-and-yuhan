<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './components/supabaseClient'
import Auth from './components/AuthSupa.vue'
import Account from './components/AccountSupa.vue'

const countries = ref([])


async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
  console.log(data)
  

}
const persons = ref([])
async function getNames() {
  const { data } = await supabase.from('persons').select()
  persons.value = data
  console.log(data) 
}


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
  </div>


</template>