<template>
  <!-- Contact Section Start -->
  <section id="contact" class="py-24">
    <div class="container">
      <div class="text-center">
        <h2
          class="mb-12 text-4xl text-gray-700 font-bold tracking-wide wow fadeInDown"
          data-wow-delay="0.3s"
        >
          Contact
        </h2>
      </div>
      <div class="flex flex-wrap contact-form-area">
        <div class="w-full md:w-1/2">
          <div class="contact">
            <h2 class="uppercase font-bold text-xl text-gray-700 mb-5 ml-3">Contact Form</h2>
            <form @submit.prevent="submitForm">
              <div class="flex flex-wrap">
                <!-- 表单输入 -->
                <div class="w-full sm:w-1/2 md:w-full lg:w-1/2 mb-3">
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-input rounded-full"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="w-full sm:w-1/2 md:w-full lg:w-1/2 mb-3">
                  <input
                    v-model="form.email"
                    type="text"
                    class="form-input rounded-full"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="w-full mb-3">
                  <input
                    v-model="form.subject"
                    type="text"
                    class="form-input rounded-full"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="w-full mb-3">
                  <textarea
                    v-model="form.message"
                    class="form-input rounded-lg"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div class="w-full">
                  <button class="btn" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2">
        <div class="ml-3 md:ml-12 wow fadeIn">
          <h2 class="uppercase font-bold text-xl text-gray-700 mb-5">Get In Touch</h2>
          <div>
            <div class="flex flex-wrap mb-6 items-center">
              <div class="contact-icon">
                <i class="lni lni-map-marker"></i>
              </div>
              <p class="pl-3">Skopje, Macedonia</p>
            </div>
            <div class="flex flex-wrap mb-6 items-center">
              <div class="contact-icon">
                <i class="lni lni-envelope"></i>
              </div>
              <p class="pl-3">
                <a href="#" class="block">email@gmail.com</a>
                <a href="#" class="block">tomsaulnier@gmail.com</a>
              </p>
            </div>
            <div class="flex flex-wrap mb-6 items-center">
              <div class="contact-icon">
                <i class="lni lni-phone-set"></i>
              </div>
              <p class="pl-3">
                <a href="#" class="block">+42 374 5967</a>
                <a href="#" class="block">+99 123 5967</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact Section End -->

  <Position />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import Position from './Position.vue'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

const form = ref<FormFields>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  try {
    const response = await axios.post('/api/contact', form.value)
    if (response.status === 200) {
      alert('Thank You! Your message has been sent.')
    } else {
      alert('An error occurred while sending your message.')
    }
  } catch (error) {
    console.error('Form submission failed:', error)
    alert('An error occurred while sending your message.')
  }
}
</script>

<style scoped>
/* Your CSS styles */
</style>
