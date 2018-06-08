<template>
  <div class="hello">
    <h3 class="home-title">Home</h3>
    <button @click="findById" class="btn">Submit</button>
    <p v-if="this.error && this.error.get('global')" class="error">{{ this.error.get('global') }}</p>
  </div>
</template>

<script>
import WordService from '@/services/WordService'
export default {
  name: 'Home',
  data () {
    return {
      error: null
    }
  },
  methods: {
    async findById () {
      try {
        await WordService.findAll()
      } catch (error) {
        this.error = new Map(error.response.data.error.map((e) => [e.key, e.message]))
      }
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
