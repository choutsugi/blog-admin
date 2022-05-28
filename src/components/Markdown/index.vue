<template>
  <v-md-editor
    v-model="poetText"
    height="80vh"
    left-toolbar="undo redo clear | h bold italic strikethrough quote align | ul ol table hr | emoji todo-list tip link image code | save"
    @copy-code-success="handleCopyCodeSuccess"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useMessage } from "naive-ui";

//代码拷贝成功提示
const message = useMessage();
const handleCopyCodeSuccess = () => {
  message.success("已拷贝", {
    duration: 1000,
  });
};

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:text"]);
const poetText = computed({
  get: () => props.text,
  set: (val) => {
    emit("update:text", val);
  },
});
</script>

<style lang="less" scoped></style>
