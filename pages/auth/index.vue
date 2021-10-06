<script>
export default {
  middleware({ redirect }) {
      return redirect('auth/login')
  }
}
</script>
