<template>
  <div class="w-input">
    <input
      ref="input"
      :type="type"
      :spellcheck="false"
      :placeholder="placeholder"
      :maxlength="maxLength"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
      @keydown.enter="onEnter"
    />
  </div>
</template>

<script>
export default {
  name: 'WInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    maxLength: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      isFocus: false,
    }
  },
  methods: {
    onFocus() {
      this.isFocus = true
    },
    onBlur() {
      this.isFocus = false
    },
    onInput(e) {
      this.$emit('input', e?.target?.value || '')
    },
    onEnter() {
      if (this.isFocus) {
        this.$emit('enter')
        this.blur()
      }
    },
    blur() {
      this.$refs?.input?.blur?.()
    }
  }
}
</script>

<style scoped lang="scss">
.w-input {
  border-radius: 20px;
  background: #443b4c;
  width: 100%;
  padding: 8px 14px;
  box-sizing: border-box;
  font-size: $input-size;
  color: $text-color;
  
  input {
    outline: none;
    border: none;
    background: transparent;
    width: 100%;
    box-sizing: border-box;
    font-size: $input-size;
    line-height: $input-size;
    color: $text-color;
  }

  input::placeholder {
    color: #79797a;
    font-size: $input-size;
    line-height: $input-size;
    transition: all 0.3s ease;
    user-select: none;
  }
}
</style>