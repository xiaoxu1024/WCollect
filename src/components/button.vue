<template>
  <div class="w-button" @click="onClick">
    <div class="w-button-inner"><slot></slot></div>
    <div v-if="isLoading" class="w-button-loading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WButton',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onClick() {
      if (this.isLoading) {
        return
      }
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.w-button {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: $button-bg-color;
  display: flex;
  gap: 8px;

  &:hover {
    background: $button-bg-hover-color;
  }

  &:active {
    background: $button-bg-active-color;
  }
}

.w-button-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $text-color;
  user-select: none;
  font-size: $button-size;
}

.w-button-loading {
  display: flex;
  gap: 4px;

  .dot {
    width: 6px;
    height: 6px;
    background: $text-color;
    border-radius: 50%;
    animation: bounce 1.4s infinite both;
  }
  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
}

</style>