<template>
  <div class="login">
    <div class="login_title">Sign in</div>
    <WInput v-model="userName" placeholder="Username" :maxLength="12" />
    <WInput v-model="password" type="password" placeholder="Password" :maxLength="16" @enter="onLogin" />
    <WButton :isLoading="isLoading" @click="onLogin">Login</WButton>
  </div>
</template>

<script>
import WInput from '@/components/input.vue'
import WButton from '@/components/button.vue'
const MockInfo = {
  userName: 'coderxu',
  password: '19961221xjw',
}
export default {
  name: 'LoginPage',
  components: {
    WInput,
    WButton,
  },
  data() {
    return {
      userName: '',
      password: '',
      isLoading: false,
    }
  },
  methods: {
    async onLogin() {
      if (!this.userName || !this.password) return

      this.isLoading = true
      const res = await this.request()

      if (
        this.userName === MockInfo.userName &&
        this.password === MockInfo.password
      ) {
        localStorage.setItem('token', 'userToken')

        if (res.errCode === 0) {
          this.$router.push('/home')
        }
        this.isLoading = false
      }
    },
    request() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ errCode: 0, data: {} })
        }, 2000)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  border-radius: 20px;
  width: 280px;
  min-height: 340px;
  padding: 14px 16px;
  box-sizing: border-box;
  background: $primary-color;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: $text-color;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login_title {
  font-size: $title-size;
  font-weight: 600;
  text-align: center;
  padding: 12px 0;
  user-select: none;
}
</style>
