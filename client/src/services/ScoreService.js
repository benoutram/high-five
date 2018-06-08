import Api from '@/services/Api'

export default {
  findAllByUserId (id) {
    return Api().get(`scores/${id}`)
  },

  findAll () {
    return Api().get('scores')
  }
}
