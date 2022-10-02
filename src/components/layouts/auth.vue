<template>
  <navigation-brand />
  <slot />
</template>

<script>
import { defineComponent } from "vue";
import NavigationBrand from "@/components/NavigationBrand";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "auth",
  components: {
    NavigationBrand,
  },
});
</script>
