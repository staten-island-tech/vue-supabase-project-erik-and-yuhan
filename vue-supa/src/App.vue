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
const ider = ref([])
async function ids(){
  const most = await supabase.from('Users').select('id')
  ider.value = most
  console.log(most)
}


onMounted(() => {
  getCountries()
  getNames()
  ids()
})




/* async function signup(){
  const {data} = await supabase.from('Users').insert({ id:  })
} */
</script>

<template>

<input type="text" name="Email" id="Email">
<button type="button" id="btn">Sign In</button>


<input type="text" name="user" id="user">
<button type="button" id="btn2">Sign Up</button>

<ul>
    <li v-for="person in persons" :key="person.id">{{ person.Name }}</li>
  </ul>
  
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>

<RouterLink to="/about">Stuff</RouterLink>
<RouterLink to="/">Sign In Here</RouterLink>
</template>