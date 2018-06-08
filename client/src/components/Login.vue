<template>
  <v-card color="secondary" flat>
    <v-card-text>
      <v-card-title primary-title>
        <h3 class="login-title">Login</h3>
      </v-card-title>
      <v-container fluid>
        <v-layout row>
          <p v-if="this.error && this.error.get('global')" class="error">{{ this.error.get('global') }}</p>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-text-field
              name="email"
              label="you@someone.com"
              v-model="email"
              :error-messages = "errorForField('email')"
              single-line
              dark
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-text-field
              name="password"
              label="password"
              v-model="password"
              type="password"
              :error-messages = "errorForField('password')"
              single-line
              dark
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-btn color="primary" @click="login" class="submit-btn">Login</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
</v-card>
</template>


<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      language: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'Home'
        })
      } catch (error) {
        this.error = new Map(error.response.data.error.map((e) => [e.key, e.message]))
      }
    },
    errorForField (field) {
      if (this.error) {
        return this.error.get(field) ? [this.error.get(field)] : []
      }
      return []
    }
  }
}
</script>

<style scoped>
  .error {
      color: red;
  }
</style>