<template>
  <v-card color="secondary" flat>
    <v-card-text>
      <v-card-title primary-title>
        <h3>Register</h3>
      </v-card-title>
      <v-container fluid>
        <v-layout row>
          <v-flex>
            <v-text-field
              name="email"
              label="you@someone.com"
              v-model="email"
              autocomplete="new-password"
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
              name="name"
              label="name"
              v-model="name"
              :error-messages = "errorForField('name')"
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
              type="password"
              v-model="password"
              :error-messages = "errorForField('password')"
              single-line
              dark
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-select
              :items="languages"
              v-model="language"
              label="Language"
              autocomplete
              single-line
              :error-messages = "errorForField('language')"
              prepend-icon="map"
              hide-details
              dark
              required
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-btn color="primary" @click="register">Register</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
</v-card>
</template>


<script>
import LanguageService from '@/services/LanguageService'
import RegistrationService from '@/services/RegistrationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      name: '',
      language: '',
      languages: [],
      searchLanguages: null,
      error: null
    }
  },
  created: function () {
    this.setLanguages()
  },
  methods: {
    async register () {
      try {
        const response = await RegistrationService.register({
          email: this.email,
          password: this.password,
          name: this.name,
          language: this.language
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
    setLanguages () {
      LanguageService.findAll().then(value => {
        const result = JSON.parse(value.data.message)
        this.languages = result.map(language => {
          return {
            value: language.id,
            text: language.name
          }
        })
      })
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