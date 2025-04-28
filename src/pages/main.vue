<template>
  <div class="main">
    <div class="side_nav">
      <router-link to="/home">主页</router-link>
      <router-link to="/collect">收藏</router-link>
    </div>
    <div class="main_view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
}
</script>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 30px;
  padding: 20px;
  box-sizing: border-box;
  background: $primary-color;

  .side_nav {
    width: 64px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .main_view {
    flex: 1;
    height: 100%;
  }
}
</style>
