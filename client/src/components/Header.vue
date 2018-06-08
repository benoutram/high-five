<template>
  <v-toolbar fixed color="cyan" class="toolbar">
    <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
    <!--<v-toolbar-title>High Five</v-toolbar-title>-->
    <router-link to="/" v-if="$store.state.isUserLoggedIn">
      <v-btn flat class="home-btn">
        Home
      </v-btn>
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="login" v-if="!$store.state.isUserLoggedIn">
      <v-btn flat class="login-btn">
        Login
      </v-btn>
    </router-link>
    <router-link to="register" v-if="!$store.state.isUserLoggedIn">
      <v-btn flat class="signup-btn">
        Sign Up
      </v-btn>
    </router-link>
    <router-link to="scores" v-if="$store.state.isUserLoggedIn">
      <v-btn flat class="scores-btn">
        Scores
      </v-btn>
    </router-link>
    <v-btn flat @click='logout' v-if="$store.state.isUserLoggedIn" class="logout-btn">
      Log Out
    </v-btn>
    <router-link to="profile" v-if="$store.state.isUserLoggedIn">
      <v-btn icon class="profile-btn">
        <v-icon>account_circle</v-icon>
      </v-btn>
    </router-link>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>

<style scoped>
</style>