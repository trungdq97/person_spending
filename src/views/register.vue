<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start: form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="Quang Trung"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="daoquangtrung.97ht@gmail.com"
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
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </form>

      <!-- start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm Already members.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Login', params: {} }"
            class="text-primary font-bold"
            >Sign In
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "register",
  setup() {
    function onSubmit() {
      return;
    }
    return { onSubmit };
  },
});
</script>
