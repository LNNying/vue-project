<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <a href="javascript:void(0)">
        <span class="main-user-name">{{ userName }}</span>
        <Icon :size="18" type="md-arrow-dropdown"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem name="own">
          个人中心<Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'
export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    logout () {
      this.$auth.logout({
        success: function () {},
        error: function () {}
      })
      // this.handleLogOut().then(() => {
      //   this.$router.push({
      //     name: 'login'
      //   })
      // })
    },
    ownSpace () {
      this.$router.push({
        name: '个人信息'
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.logout()
          break
        case 'own': this.ownSpace()
          break
      }
    }
  },
  mounted () {
    let user = this.$auth.user()
    this.userName = user.realName
  }
}
</script>
