<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './components/supabaseClient'

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

onMounted(() => {
  getCountries()
  getNames()
})
</script>

<template>

<ul>
    <li v-for="person in persons" :key="person.id">{{ person.Name }}</li>
  </ul>
  
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>

<RouterLink to="/about">Log In Here</RouterLink>
<RouterLink to="/">Sign In Here</RouterLink>
 <button type="button" id="btn2">Sign In Here</button>
</template>