<template>
  <div class="home">
    <h1>Hello jun</h1>
    <div class="mt-6" v-if="user">{{ user.displayName }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { useUser } from "@/services/useUser";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "register",
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return { user };
  },
});
</script>
