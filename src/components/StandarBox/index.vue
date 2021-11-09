<template>
  <div class="standardbox">
    <!-- 标题 -->
    <div
      class="header"
      :class="{ dialog: title.isDialog }"
      v-if="!title.hidden"
      v-cloak
    >
      {{ title.value }}

      <el-button @click="goBack" v-if="!back.hidden">返回上一页</el-button>
    </div>

    <!-- 操作栏 -->
    <slot name="operate"></slot>

    <!-- 主体内容 -->
    <div class="databox">
      <slot name="databox"></slot>
    </div>

    <!-- 脚部操作栏 -->
    <slot name="foot-operate"></slot>
  </div>
</template>

<script>
export default {
  name: "StandardBox",

  props: {
    title: {
      type: Object,
      default: () => ({
        value: "请输入标题",
        isDialog: false,
        hidden: false,
      }),
    },

    back: {
      type: Object,
      default: () => ({
        hidden: true,
      }),
    },
  },

  methods: {
    /**
     * @描述 返回
     */
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.standardbox {
  display: grid;
  grid-template-rows: minmax(50px, auto) auto;
  gap: 1.5rem 0px;

  width: 100%;
  height: 100%;

  border-radius: 2px;
  background-color: #fff;

  & > .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 50px;

    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #3e3a39;

    &.dialog {
      height: 68px;
      line-height: 68px;
      padding-left: 30px;

      background-color: #fbfbfb;
    }
  }
}
</style>
