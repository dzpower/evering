<template>
  <div class="edit-modal">
    <div class='edit-modal__field'>
      <label class="avatar-wrapper">
        <img class="profile-pic" :src="getPicture"  alt=''/>
        <input id="file" ref="file" type="file" class="file-upload" @change="handleFileUpload" />
      </label>
      <div class='avatar-wrapper__actions'>
        <eve-button @onclick='$refs.file.click()'>Upload a picture</eve-button>
        <eve-button class='dark'>Create picture</eve-button>
      </div>
    </div>
    <div class='edit-modal__field'>
      <input v-model='userData.name' class='eve-input' type='text' placeholder='Name'>
    </div>
    <div class='edit-modal__field'>
      <input v-model='userData.email' class='eve-input' type='text' placeholder='e-mail'>
    </div>
    <div class='edit-modal__field edit-modal__field--label'>
      <p>I`m on social media</p>
      <div class='edit-modal__field--wrapper edit-modal__field--wrapper--social'>
          <img src='/icons/facebook.svg' alt=''>
          <img src='/icons/instagram.svg' alt=''>
          <img src='/icons/pinterest.svg' alt=''>
          <img src='/icons/vk.svg' alt=''>
      </div>
    </div>
    <div class='edit-modal__field edit-modal__field--label'>
      <p>Gender</p>
      <div class='edit-modal__field--wrapper'>
        <RadioButton
          v-for='(gender, index) in options.gender'
          :key='index'
          :model-value='userData.gender'
          :value='gender'
          name='gender'
          @change='userData.gender = $event'
        >
          <span class='radio-button__content'>{{ gender }}</span>
        </RadioButton>
      </div>
    </div>
    <div class='edit-modal__field edit-modal__field--label'>
      <p>Date of birth</p>
      <div class='edit-modal__field--wrapper'>
      </div>
    </div>
    <div class='edit-modal__field edit-modal__field--label'>
      <p>Country</p>
      <div class='edit-modal__field--wrapper'>
        <vSelect
          v-model='country'
          :options='options.country'
        />
      </div>
    </div>
    <div class='edit-modal__field edit-modal__field--label'>
      <p>Currency</p>
      <div class='edit-modal__field--wrapper'>
        <vSelect
          v-model='currency'
          :options='options.currency'
        />
      </div>
    </div>
    <div class='edit-modal__actions'>
      <eve-button>
        Cancel
      </eve-button>
      <eve-button @onclick='updateProfile'>
        Save
      </eve-button>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-js-modal/dist/styles.css'
import RadioButton from '../../ui-common/RadioButton'

export default {

  name: 'EditModal',
  components: {
    RadioButton,
    vSelect
  },
  data() {
    return {
      file: '',
      country: '',
      currency: '',
      userData: {
        gender: null,
        url: null,
        email: "supdzpower@gmail.com",
        phone: null,
        name: "Еуые",
        fullname: null,
        country: null,
        patronymic: null,
        about_me: null,
        date_of_birth: null,
        picture: null
      },
      options: {
        country: [
          'Ukraine',
          'Belarus',
          'USA',
          'Putin hyilo',
        ],
        currency: [
          '$',
          '€',
          '₴',
        ],
        gender: [
          'Male',
          'Female',
          'Other',
        ]
      }
    }
  },
  computed: {
    getProfile() {
      return this.$store.getters['users/getProfile']
    },
    getPicture() {
      return this.file ? `https://api.everigin.com${this.file}.webp` : '/icons/not-user.svg'
    }
  },
  mounted() {
    this.userData = { ...this.getProfile }
    this.file = this.$store.getters['users/getProfile'].picture
  },
  methods: {
    async handleFileUpload( event ){
      this.userData.picture = event.target.files[0]

      await this.$store.dispatch('users/updateProfile', { 'picture': this.userData.picture }).then((res) => {
        if(res.data.status) {
          this.userData.picture = res.data.result.picture
          this.file = res.data.result.picture
        }
      })
    },
    async updateProfile() {
      await this.$store.dispatch('users/updateProfile', this.userData).then((res) => {
        if(res.data.status) {
          this.userData = res.data.result
          this.file = res.data.result.picture
        }
      })
    }
  }
}
</script>
