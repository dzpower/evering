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
        <client-only>
          <date-picker placeholder="yyyy-MM-dd" format="yyyy-MM-dd" v-model="userData.date_of_birth" />
        </client-only>
      </div>
    </div>
    <div class='edit-modal__field edit-modal__field--label'>
      <p>Country</p>
      <div class='edit-modal__field--wrapper'>
        <vSelect
          v-model='userData.country'
          :options='options.country'
        />
      </div>
    </div>
    <div class='edit-modal__field edit-modal__field--label'>
      <p>Currency</p>
      <div class='edit-modal__field--wrapper'>
        <vSelect
          v-model='userData.currency'
          :options='options.currency'
        />
      </div>
    </div>
    <div class='edit-modal__field edit-modal__field--label'>
      <p>Interests</p>
      <div class='edit-modal__field--wrapper'>
        <client-only>
          <vue-tags-input
            v-model="tag"
            :tags="tags"
            :add-on-key="[32]"
            @tags-changed="newTags => tags = newTags"
            :placeholder="'Add your interests'"
          />
        </client-only>
      </div>
    </div>
    <div class='edit-modal__actions'>
      <eve-button class="dark" @onclick="$emit('close-modal')">
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
      tag: '',
      tags: [],
      userData: {
        gender: null,
        country: null,
        currency: null,
        url: null,
        email: null,
        phone: null,
        name: null,
        fullname: null,
        patronymic: null,
        about_me: null,
        date_of_birth: null,
        picture: null,
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
      return this.userData.picture ? `https://api.everigin.com${this.userData.picture}.webp` : '/icons/not-user.svg'
    }
  },
  mounted() {
    this.userData = { ...this.getProfile }
    
    if (this.userData.tags) {
      this.setTags(this.userData.tags)
    }
    // this.file = this.$store.getters['users/getProfile'].picture
  },
  methods: {
    setTags(tags) {
      this.tags = []
      for (const prop of tags) {
        const newTag = {}
        newTag.text = prop
        newTag.tiClasses = ['ti-valid']
        this.tags.push(newTag)
      }
    } ,
    async handleFileUpload( event ){
      this.file = event.target.files[0]
      const data = { picture: this.file }
      await this.$store.dispatch('users/updateProfile', [data, true]).then((res) => {
        if(res.data.status) {
          this.userData.picture = res.data.result.picture
          this.file = null
        }
      })
    },
    async updateProfile() {
      const tags = []
      if (this.tags) {
        for (const prop in this.tags) {
          tags.push(this.tags[prop].text)
        }
        this.userData.tags = [...tags]
      }
      await this.$store.dispatch('users/updateProfile', [this.userData, false]).then((res) => {
        if(res.data.status) {
          this.userData = { ...res.data.result }
          
          if (res.data.result.tags) {
            this.setTags(res.data.result.tags)
          }
        }
      })
    }
  }
}
</script>
