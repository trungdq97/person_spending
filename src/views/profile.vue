<template>
  <!-- start: Info -->
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            :src="require('@/assets/images/trau.jpg')"
            alt="User's profile avatar"
            sizes="xs"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="font-bold text-2xl text-primary mt-3">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400 mt-1">
          {{ user.email }}
        </p>
      </div>
    </div>
  </div>

  <!-- start: Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul class="text-dark">
            <li v-for="(item, index) in profileOptions" :key="index">
              <router-link
                :to="item.route"
                class="flex justify-between items-center py-3"
              >
                <div
                  class="flex items-center text-left"
                  :class="{ 'text-red': index === profileOptions.length - 1 }"
                >
                  <i class="t2ico text-2xl" :class="item.icon"></i>
                  <h5 class="font-semibold ml-3">{{ item.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { PROFILE_OPTIONS } from "@/common/constants";
import { useUser } from "@/services/useUser";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "profile",
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    const profileOptions = reactive(PROFILE_OPTIONS);

    return { profileOptions, user };
  },
});
</script>
