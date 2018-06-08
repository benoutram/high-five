<template>
 <v-data-table
      v-bind:headers="headers"
      :items="scores"
      hide-actions
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.language }}</td>
      <td class="text-xs-right">{{ props.item.score }}</td>
    </template>
  </v-data-table>
</template>

<script>
import ScoreService from '@/services/ScoreService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Language',
          align: 'left',
          sortable: false,
          value: 'language'
        },
        { text: 'Score', value: 'score' }
      ],
      scores: [],
      error: null
    }
  },
  created: function () {
    this.setScores()
  },
  methods: {
    setScores () {
      try {
        ScoreService.findAllByUserId(this.$store.state.user.id).then(value => {
          const result = JSON.parse(value.data.message)
          this.scores = result
        })
      } catch (error) {
        this.error = new Map(error.response.data.error.map((e) => [e.key, e.message]))
      }
    }
  }
}
</script>

<style scoped>
  .error {
      color: red;
  }
</style>