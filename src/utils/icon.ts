import { h } from "vue";
import { NIcon } from "naive-ui";

export const renderIcon = (icon: any, props = { size: 12 }) => {
  return () => h(NIcon, { ...props }, { default: () => h(icon) });
};
