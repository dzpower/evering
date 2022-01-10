export default ({ $axios, $toast }) => {
  $axios.onRequest((config) => {
    if (localStorage.getItem('uid')) {
      $axios.setToken(localStorage.getItem('uid'), 'Bearer')  }
    }
  )
  $axios.onResponse((config) => {
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
