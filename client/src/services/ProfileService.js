import Api from '@/services/Api'

export default {
  update (user) {
    return Api().post('profile', {
      'id': user.id,
      'name': user.name,
      'email': user.email,
      'language': user.language
    })
  }
}
