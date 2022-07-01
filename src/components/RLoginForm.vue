<template>
  <v-card class="pa-4 container-setting">
    <v-form ref="form" :value="validity" @submit.prevent="onSubmitForm">
      <img alt="logo" class="mx-auto d-block" height="100" src="../assets/logo.png" width="120"/>
      <section class="px-4 mt-10">
        <v-text-field
            v-model="credentials.username"
            :rules="username_rules"
            label="Email or User Name"
            placeholder="Please Email or User Name"
            solo
        ></v-text-field>

        <v-text-field
            v-model="credentials.password"
            :rules="password_rules"
            label="Password"
            placeholder="Enter Password of at least 8 characters"
            solo
            type="password"
        ></v-text-field>

        <v-checkbox
            class="my-3"
            hide-details
            label="Remember me"
        ></v-checkbox>

        <v-divider class="mb-2"/>

        <div class="d-flex justify-space-between align-center">
          <v-btn
              :disabled="loading"
              :loading="loading"
              color="success"
              type="submit"
          >
            Login
          </v-btn>

          <a :href="forgotPasswordLink">
            Forgot your password?
          </a>

        </div>

        <v-btn
            block
            class="my-2"
            color="error"
        >
          <v-icon left>
            mdi-gmail
          </v-icon>
          Login from Gmail
        </v-btn>

        <v-btn
            block
            class="my-2"
            color="info"
        >
          <v-icon left>
            mdi-twitter
          </v-icon>
          Login from Twitter
        </v-btn>
      </section>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "RLoginForm",
  props: {
    forgotPasswordLink: {
      type: String,
      default: '#'
    },
    validity: {
      type: Boolean,
      default: false
    },
    onSubmit: {
      type: Function,
      default: null,
    }
  },
  data() {
    return {
      loading: false,
      credentials: {
        username: '',
        password: '',
      },

      // validation
      username_rules: [
        v => !!v || 'Name/Email is required',
        v => (v && v.length > 3) || 'Name/Email must be greater than 3 characters',
      ],

      password_rules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Name/Email must be greater than or equal to 8 characters',
      ],
    }
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
        }, 3000)
        this.loading = false

        // Method from parent component
        if (this.onSubmit) {
          // submit login logics successfully!
          this.$emit('onSuccess')
          this.$refs.form.reset()
          this.$refs.form.resetValidation()
        }

        console.log('form submitted from components')
      }
    }
  },
}
</script>

<style scoped>
.container-setting {
  width: 50%;
  margin: 0px auto;
  padding: 0px
}
</style>