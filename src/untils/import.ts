import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app: any) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/components/layouts/auth.vue"))
  );

  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/components/layouts/default.vue"))
  );
}
