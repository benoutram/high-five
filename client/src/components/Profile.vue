<template>
  <v-card color="secondary" flat>
    <v-card-text>
      <v-card-title primary-title>
        <h3 class="profile-title">Profile</h3>
      </v-card-title>
      <v-container fluid>
        <v-layout row>
          <v-flex>
            <v-text-field
              name="email"
              label="you@someone.com"
              v-model="user.email"
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
              v-model="user.name"
              :error-messages = "errorForField('name')"
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
              v-model="user.language"
              name="language"
              label="Language"
              autocomplete
              :error-messages = "errorForField('language')"
              single-line
              prepend-icon="map"
              hide-details
              dark
              required
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-btn color="primary" @click="update" class="submit-btn">Update</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
</v-card>
</template>


<script>
import LanguageService from '@/services/LanguageService'
import ProfileService from '@/services/ProfileService'
export default {
  data () {
    return {
      user: this.$_.cloneDeep(this.$store.state.user),
      languages: [],
      searchLanguages: null,
      error: null
    }
  },
  created: function () {
    this.setLanguages()
  },
  methods: {
    async update () {
      try {
        await ProfileService.update(this.user)
        this.$store.dispatch('setUser', this.$_.cloneDeep(this.user))
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