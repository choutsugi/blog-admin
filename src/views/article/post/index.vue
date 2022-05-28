<template>
  <div>
    <n-space vertical>
      <div class="flex flex-row justify-between items-center h-full">
        <n-input
          v-model:value="article.title"
          class="flex flex-grow h-9 w-screen"
          placeholder="输入文章标题"
          size="large"
          type="text"
        />
        <n-button class="ml-4 h-9" :disabled="disablePublish" type="primary" @click="publicClick"> 发布 </n-button>
      </div>

      <!--markdown-->
      <Markdown v-model:text="article.content" />

      <!--发布NDrawer-->
      <n-drawer v-model:show="show" close-on-esc placement="right" width="45%">
        <n-drawer-content title="发布文章">
          <n-form :model="article" class="mt-5" label-placement="left">
            <n-grid :cols="1" :x-gap="30">
              <!--              <n-form-item-gi label="文章封面">-->
              <!--                <n-upload v-model:file-url="article.firstPicture">-->
              <!--                  <n-icon size="30">-->
              <!--                    <Upload />-->
              <!--                  </n-icon>-->
              <!--                  <p class="mt-3">上传图片</p>-->
              <!--                </n-upload>-->
              <!--              </n-form-item-gi>-->
              <n-form-item-gi label="编辑摘要">
                <n-input
                  v-model:value="article.description"
                  :rows="5"
                  maxlength="80"
                  minlength="30"
                  show-count
                  type="textarea"
                  placeholder="请输入摘要"
                />
              </n-form-item-gi>
              <n-form-item-gi :span="2" label="添加分类">
                <n-select v-model:value="article.category" :options="categoryOption" placeholder="请选择分类" />
              </n-form-item-gi>
              <n-form-item-gi :span="2" label="添加标签">
                <n-select v-model:value="article.tags" :options="tagsOption" multiple placeholder="请选择标签" />
              </n-form-item-gi>
              <n-form-item-gi label="是否置顶">
                <n-switch v-model:value="article.isTop" />
              </n-form-item-gi>
              <n-form-item-gi label="允许评论">
                <n-switch v-model:value="article.allowComment" />
              </n-form-item-gi>
            </n-grid>
          </n-form>
          <template #footer>
            <n-button class="mr-4" @click="cancelCallback"> 取消 </n-button>
            <n-button type="primary" @click="submitCallback"> 确定并发布 </n-button>
          </template>
        </n-drawer-content>
      </n-drawer>
    </n-space>
    <!--    <button-->
    <!--      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"-->
    <!--    >-->
    <!--      文章发布-->
    <!--    </button>-->
  </div>
</template>

<script lang="ts" setup>
import Markdown from "@/components/Markdown/index.vue";
import { computed, ref } from "vue";
import { createArticle } from "@/types/article";
import { useMessage } from "naive-ui";

const message = useMessage();

const article = ref(createArticle());
const categoryOption = [];
const tagsOption = [];

//计算发布按钮是否有效：当title和article不为空时有效
const disablePublish = computed(() => {
  return article.value.title === "" || article.value.content === "";
});

const show = ref(false);

const publicClick = () => {
  show.value = true;
};

const cancelCallback = () => {
  show.value = false;
  message.success("取消");
};

//提交后清楚数据
const submitCallback = () => {
  resetArticle();
  message.success("提交");
  show.value = false;
};

//清除数据
const resetArticle = () => {
  article.value = createArticle();
};
</script>

<style lang="less" scoped></style>
