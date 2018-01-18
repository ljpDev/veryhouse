<template>
  <div class="register">
    <mt-header title="多个按钮">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
    }
  },
  created () {
  },
  components: {},
  computed: {
  },
  methods: {
    back () {
      this.router.go(-1)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
