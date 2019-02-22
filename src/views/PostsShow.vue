<template>
  <div class="posts-show">
    <h1>{{ post.title }}</h1>
    <img :src=" post.image " :alt="post.title ">
    <h4>{{ post.body }}</h4>

    <router-link class="btn btn-primary" :to=" '/posts/' + post.id + '/edit' ">Edit</router-link>
    <button class="btn btn-warning" v-on:click="destroyPost()">Delete</button>


    <h1> Comments </h1>
    <h2> {{ comment.content }} </h2>
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
      comment: {
                user_id: "",
                post_id: "",
                content: ""
              }
    };
  },
  created: function() {
    axios.get("/api/posts/" + this.$route.params.id )
      .then(response => {
        console.log(response.data);
        this.post = response.data;
      }); 
    axios.get("/api/comments/" + this.$route.params.id )
      .then(response => {
        console.log(response.data);
        this.post = response.data;
      });
  },
  methods: {
    destroyPost: function() {
      axios.delete("/api/posts/" + this.post.id)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/");
        });
    }
  }
}
</script>
