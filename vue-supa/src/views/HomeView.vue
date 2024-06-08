<template>
   <div>
    <h2>After showing your saved quotes, hit dislike to see another one!</h2>
   
    <div id="quote">
      <h2>{{ currentQuote?.content }}</h2>
      <h3>- {{ currentQuote?.author }}</h3>
    </div>

    <div class="buttons">
      <button @click="addLike">Like</button>
      <RouterLink to="/quotes">My quotes</RouterLink>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { supabase } from '@/stores/supabase';
import { sessionStore } from '@/stores/session';
import router from '@/router';

const url = "https://api.quotable.io/random";
const currentQuote = ref();

onMounted(async () => {
  if (!sessionStore().session.id) {
    router.push("/login");
  }
  await getApiData();
})

async function getApiData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      currentQuote.value = await response.json();
    } catch (error) {
      console.error(error);
    }
}

async function addLike () {
  try {
    console.log(sessionStore().session.id, currentQuote.value.content, currentQuote.value.author)
        const { error } = await supabase.from('quotes').insert({
      user_id: sessionStore().session.id,
      quote: currentQuote.value?.content,
      author: currentQuote.value?.author
    });
    if (error) throw error;
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        }
    }
}

</script>

<style scoped>
.title {
  font-size: 1.5rem;
  color: #333;
}

#quote {
  margin-top: 20px;
}

#quote h2 {
  font-size: 2.0rem;
  color: #d39a20;
}

#quote h3 {
  font-size: 1.5rem;
  color: #d12e11c0;
}

.buttons {
  margin-top: 20px;
}

.like-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.like-button:hover {
  background-color: #0056b3;
}

.link {
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid #007bff;
  color: #007bff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.link:hover {
  background-color: #007bff;
  color: #fff;
}
</style>
