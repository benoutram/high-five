import Api from '@/services/Api'

export default {
  findById (id) {
    return Api().get(`language/${id}`)
  },

  findAll () {
    return Api().get('languages')
  }
}
