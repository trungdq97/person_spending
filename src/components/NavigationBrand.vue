<template>
  <div class="flex flex-col pt-24">
    <div class="w-20 h-20 text-center mx-auto">
      <img
        :src="require('@/assets/images/logo.png')"
        alt="iMoney Brand logo"
        class="w-full h-auto object-cover"
      />
    </div>
    <div class="text-center mt-12">
      <h1 class="font-bold text-x1 text-dark">
        Best way to saving Your Money!
      </h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "navigationBrand",
});
</script>
