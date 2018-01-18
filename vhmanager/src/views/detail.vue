<template>
  <div class="index">
    <mt-header title="设备详情">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-cell title="序号" :value="device.order"></mt-cell>
    <mt-cell title="设备名称" :value="device.name"></mt-cell>
    <mt-cell title="颜色" :value="device.color"></mt-cell>
    <mt-cell title="系统版本" :value="device.system"></mt-cell>
    <mt-cell title="mac地址" :value="device.mac_addr"></mt-cell>
    <mt-cell title="当前持有" :value="device.current_user.name"></mt-cell>
    <mt-cell title="联系方式" :value="device.contact_info"></mt-cell>
    <mt-cell title="使用日期" :value="device.borrow_date"></mt-cell>
    <!-- <mt-cell v-for="(dvalue, dkey) in device" :title="dkey" :value="dvalue" :key="dkey"></mt-cell> -->
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
      selected: ''
    }
  },
  created () {
    if (!this.$store.getters.getDevices) {
      this.$store.dispatch('setCurrentDevice', this.$route.params.id)
    } else {
      this.$store.dispatch('getAllDevices').then(() =>
        this.$store.commit('SELECT_DEVICE', this.$route.params.id)
      )
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.commit('SELECT_DEVICE', to.params.id)
    next()
  },
  components: {},
  computed: {
    device () {
      return this.$store.getters.getDevice
    }
  },
  methods: {
    closePage () {
      console.log('close!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
