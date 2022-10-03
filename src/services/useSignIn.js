import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  isPending.value = true;
  error.value = null;

  try {
    return await projectAuth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signIn };
}
