import { useLocalStorage } from "@vueuse/core";

export const userName = useLocalStorage<string>(
  "user-name",
  "Trong for Divertise"
);
