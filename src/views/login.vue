<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start: form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="daoquangtrung.97ht@gmail.com"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder="****************"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign In
          </button>
          <button
            v-else
            type="button"
            class="py-3 text-center w-full bg-gray-200 text-white font-bold rounded-lg cursor-not-allowed"
            disabled
          >
            Loading....
          </button>
        </div>
      </form>

      <!-- start: Error -->
      <div v-if="error" class="text-left text-red mt-4">
        <span>{{ error }}</span>
      </div>

      <!-- start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-bold"
            >Sign Up
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useSignIn } from "@/services/useSignIn";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signIn(email.value, password.value);
      if (!error.value) this.$router.push({ name: "profile", params: {} });
    }
    return { email, password, error, isPending, signIn, onSubmit };
  },
});
</script>
