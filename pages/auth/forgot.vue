<template>
  <div class='forgot'>
    <h2>Restoring access to your personal account</h2>
    <p class='sub-header'>
      Please specify the <strong>phone number</strong> or <strong>email address</strong> that you used to log in to the site
    </p>
    <input
      type='text'
      placeholder='Phone number or email address *'
      required
      class='input-default'/>
    <eve-button square>Send</eve-button>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>
