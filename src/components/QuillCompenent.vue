<template>
  <div class="card-content collapse show">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-12">
          <div id="full-wrapper">
            <div id="full-container">
              <vue-editor v-model="content" />
            </div>
            <div v-html="content">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-end">
      <span @click="save" class="btn btn-primary mr-1 mb-1" v-if="!loading">Save</span>
      <button class="btn btn-primary mb-1" type="button" disabled v-if="loading">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Saving ...
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content: '',
      loading: false
    }
  },

  methods: {
    save(){
      console.log('saved into database')
    }
  }
}
</script>