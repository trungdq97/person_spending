import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);

async function logout() {
  error.value = null;

  try {
    return await projectAuth.signOut();
  } catch (e) {
    console.log(e.message, 11);
    error.value = e.message;
  }
}

export function useLogout() {
  return { error, logout };
}
