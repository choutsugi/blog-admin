<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-icon-size="20"
    :collapsed-width="68"
    :indent="24"
    :options="menuOptions"
    :value="activeKey"
    accordion
    inverted
    @update:value="handleUpdateValue"
  />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { renderIcon } from "@/utils/icon";
import type { MenuOption } from "naive-ui";
import { BagOutline as BagOutlineIcon, FishOutline as FishIcon, PawOutline as PawIcon } from "@vicons/ionicons5";

defineProps({
  collapsed: {
    type: Boolean,
  },
});

const router = useRouter();
const currentRoute = useRoute(); // 当前路由
const activeKey = ref(currentRoute.name);
function handleUpdateValue(key: string) {
  console.log(key);
  // 防止闪烁
  activeKey.value = key;
  router.push({ name: key });
}
const menuOptions: MenuOption[] = [
  {
    label: "鱼",
    key: "fish",
    icon: renderIcon(FishIcon),
    children: [
      {
        label: "红烧",
        key: "braise",
        children: [
          {
            label: "加辣",
            key: "spicy",
          },
        ],
      },
      {
        label: "清蒸",
        key: "steamed",
        children: [
          {
            label: "不要葱",
            key: "no-green-onion",
          },
        ],
      },
    ],
  },
  {
    label: "熊掌",
    key: "bear-paw",
    icon: renderIcon(PawIcon),
    children: [
      {
        label: "保护野生动物",
        key: "protect-wild-animals",
      },
    ],
  },
  {
    label: "两个都要",
    key: "both",
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: "鱼和熊掌不可兼得",
        key: "can-not",
      },
    ],
  },
];
</script>

<style lang="less" scoped></style>
