import { ref } from "vue";
import { defineStore } from "pinia";

export const sessionStore = defineStore("session", () => {
  const session = ref({
    access_token: "",
    refresh_token: "",
    token_type: "",
    authenticated: false,
    id: "",
    email: "",
  });

  function changeSession (newSession) {
    session.value = newSession;
  }

  return { session, changeSession }
  
});