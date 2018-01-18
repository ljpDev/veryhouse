<template>
  <div class="index">
    <el-container class="mainContainer">
      <el-aside class="leftSide">
        <el-header class="header">
          <el-row class="headerRow">
            <el-col :span="12"><span class="userName">王小虎</span></el-col>
            <el-col :span="12">
              <el-dropdown class="setting">
                <i class="el-icon-setting"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-header>
        <el-menu v-if="menuList" :default-active="menuList._id" class="el-menu-vertical" active-text-color="#ffd04b" :collapse="isCollapse" :default-openeds="openMenus">
          <el-submenu v-for="(mitem, index) in menuList.children" :key="index" :index='mitem._id' >
            <template slot="title"><i class="el-icon-menu"></i>{{mitem.showName}}</template>
            <el-menu-item v-for="(mcitem, cindex) in mitem.children" :key="cindex" :index='mcitem._id'>{{mcitem.showName}}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="rightContainer">
        <el-header class="header">
          <el-row>
            <el-col :span="8"><span class="userName">王小虎</span></el-col>
            <el-col :span="8">
              <el-dropdown class="setting">
                <i class="el-icon-setting"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-header>
        
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  created () {
    this.getMenus()
  },
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item),
      defaultOpen: ['1'],
      menuList: [],
      isCollapse: false,
      openMenus: ['menu1', 'menu2', 'menu3']
    }
  },
  methods: {
    getMenus () {
      return new Promise((resolve, reject) => {
        this.$http.get('/api/menu/list')
        .then((res) => {
          let jsonData = res.data
          if (jsonData.code === 0) {
            this.menuList = jsonData.data[0]
            resolve()
          }
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.index
  position fixed
  width 100%
  height 100%
  .leftSide
    position relative
    height 100%
    .header
      vertical-align middle
      height 100%
      .headerRow
        position relative
        top 20px
        height 100%
        .userName
          position relative
          margin-top 10px
        .setting
          width 100%
          text-align right 
          right 0px
    .el-menu-vertical
      color #303133
      background-color #F2F6FC
  .rightContainer
    .header
      position relative
      vertical-align middle 
      text-align right
      font-size 13px
      
</style>
