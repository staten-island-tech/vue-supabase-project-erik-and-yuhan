<template>
  <div>
    <div v-for="quote in likedQuotes">
      <h2>{{ quote.content }}</h2>
      <h3>{{ quote.author }}</h3>
      <button @click="removeLike(quote)">Remove</button>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { supabase } from '@/stores/supabase';
import { sessionStore } from '@/stores/session';

const likedQuotes = ref();

onMounted(async () => {
  await getLikedQuotes();
})

async function getLikedQuotes () {
  try {
    const { data, error } = await supabase.from('quotes').select().eq("user_id", sessionStore().id);
    if (error) throw error

    likedQuotes.value = data;
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  }
}

async function removeLike (quote) {
  try {
    const { error } = await supabase.from("market").delete().eq("quote", quote.content).eq("author", quote.author).eq("user_id", sessionStore().session.id);
    if (error) throw error;
    const index = likedQuotes.value.findIndex((quote2) => quote2.content == quote.content && quote2.author == quote2.author);
    likedQuotes.value.splice(index, 1);
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
}

</script>

<style scoped>

</style>