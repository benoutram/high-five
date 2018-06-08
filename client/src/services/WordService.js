import Api from '@/services/Api'

export default {
  findById (id) {
    return Api().get(`word/${id}`)
  },

  findAll () {
    return Api().get('words')
  }
}
