<template>
  <div id="Home">
    {{ msg }}
    <router-link to="/home/name">name</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name:'Home',
  data() {
    return {
      msg:'i am a component from home'
    }
  }
}
</script>