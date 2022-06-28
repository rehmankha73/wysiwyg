<template>
  <v-container class="pt-10">
    <v-card class="mx-auto" style="width: 80%">
      <v-card-title> Add New Blog</v-card-title>

      <v-container>
        <v-form ref="form">
          <v-row>
            <v-col cols="6">
              <v-file-input
                  :rules="[required('Image is required!')]"
                  accept="image/png, image/jpeg, image/bmp"
                  counter
                  placeholder="Pick an Image"
                  show-size
                  @change="uploadImage"
              ></v-file-input>
            </v-col>

            <v-col v-if="image && image_url" cols="6">
              <v-img
                  :src="image_url"
                  max-height="150"
                  max-width="250"
              ></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-text-field
                  v-model="title"
                  :rules="[required('Title is required!')]"
                  filled
                  hide-details="auto"
                  label="Title"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                  v-model="slug"
                  filled
                  hide-details="auto"
                  label="Slug"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-textarea
                  v-model="description"
                  :rules="[required('Description is required!')]"
                  filled
                  label="Description"
                  name="input-7-4"
              ></v-textarea>
            </v-col>

          </v-row>

          <v-row>
            <v-col class="d-flex justify-end" cols="12">
              <v-btn
                  color="primary"
                  depressed
                  type="button"
                  @click="submitForm"
              >
                Add Now!
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import {required} from "@/utils/validators"

export default {
  name: 'HomeView',
  data() {
    return {
      title: '',
      slug: '',
      image: '',
      image_url: '',
      description: '',
    }
  },
  watch: {
    title(val) {
      this.slug = this.getSlug(val)
    },
  },
  methods: {
    required,
    submitForm() {
      if (this.$refs.form.validate()) {
        let _data = {
          title: this.title,
          slug: this.slug,
          image: this.image,
          image_url: this.image_url,
          description: this.description
        }

        this.$store.dispatch('addProduct', _data);
        this.resetForm();
      }
    },
    resetForm() {
      this.title = '',
          this.slug = '',
          this.image = '',
          this.image_url = '',
          this.description = ''
    },

    uploadImage(event) {
      this.image = event
      this.image_url = URL.createObjectURL(event)
    },

    getSlug(Text) {
      return Text
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, '')
          ;
    }
  }
}
</script>
