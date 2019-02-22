<template>
  <div class="container">
    <h1>New Post</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Title: <input v-model="newPostTitle">
      </div>
      <div>
        Image: <input v-model="newPostImage">
      </div>
      <div>
        Body: <input v-model="newPostBody">
      </div>

      <input type="submit" value="Create" class="btn btn-warning">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      posts: [],
      newPostTitle: "",
      newPostImage: "",
      newPostBody: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/posts").then(response => {
this.posts = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
                    title: this.newPostTitle,
                    image: this.newPostImage,
                    body: this.newPostBody
                  };
      axios.post("/api/posts", params)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
