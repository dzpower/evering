export default ({ $axios, $toast, store }) => {
  $axios.onRequest((config) => {
    $axios.setToken(store.getters['users/getToken'] || localStorage.getItem('uid'), 'Bearer')
  })
  $axios.onResponse((response) => {
    store.commit('users/SET_ROLES', response.data)
  })
  $axios.onError((err) => {
    $toast.error(err)
  })
  $axios.onRequestError((err) => {
    $toast.error(err)
  })
  $axios.onResponseError((err) => {
    $toast.error(err)
  })
}
