<template>
  <div>
    <span>Logout page...</span>
  </div>
</template>

<script>
// import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useLogout } from "@/services/useLogout";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "logout",
  setup() {
    const router = useRouter();
    const { error, logout } = useLogout();

    async function onLogout() {
      await logout();

      if (!error.value) await router.push("/login");
    }

    onLogout();

    return {};
  },
};
</script>
