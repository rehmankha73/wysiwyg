<template>
  <v-container>
    <div>
      <img :src="blog.image_url" :alt="blog.title">
      <v-card class="pa-4">
      <p class="text-h4">{{ blog.title }}<span class="text-subtitle-1"> {{ blog.slug }} </span></p>
      <div v-html="blog.description"></div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ShowBlog',
  computed: {
    blog() {
      return this.$store.getters.getBlog
    }
  }
}
</script>
