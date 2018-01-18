<template>
  <div class="login">
    <mt-header title="请登陆">
      <mt-button icon="back" slot="left" @click="back">返回</mt-button>
      <router-link to="/register" slot="right">
        <mt-button>注册</mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="user.name"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="user.password"></mt-field>
    </div>
    <div class="buttonField">
      <mt-button type="primary" size="large" @click.native="doLogin">登陆</mt-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  created () {
  },
  components: {},
  computed: {
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    doLogin: function () {
      this.$store.dispatch('login', this.user).then(() => {
        this.$router.push('index')
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.login
  position relative
  .content
    position relative
    margin-top 50px
  .buttonField
    position relative
    top 50px
</style>
