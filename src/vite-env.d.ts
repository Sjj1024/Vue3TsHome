/// <reference types="vite/client" />
<<<<<<< HEAD
=======
declare module 'qs'
>>>>>>> 24718178adee77e1802e3a5a6d044347a2637a0d

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
