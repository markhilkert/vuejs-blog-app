<template>
  <div class="posts-edit">
    <h1>Edit Post</h1>
    
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Title: <input v-model="post.title">
      </div>
      <div>
        Image: <input v-model="post.image">
      </div>
      <div>
        Body: <input v-model="post.body">
      </div>

      <input type="submit" value="Update" class="btn btn-warning">
    </form>
  </div>
</template>

<style>
  
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      post: {
                title: "",
                image: "",
                body: ""
              },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/posts/" + this.$route.params.id )
      .then(response => {
        console.log(response.data);
        this.post = response.data;
      });
  },
  methods: {
    submit: function() {
      var params = {
                    title: this.post.title,
                    image: this.post.image,
                    body: this.post.body
                    };
      axios.patch("/api/posts/" + this.post.id, params)
        .then(response => {
          this.$router.push("/posts/" + this.post.id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>
