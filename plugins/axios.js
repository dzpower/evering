export default ({ $axios, $toast }) => {
  $axios.onRequest((config) => {
  })
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
