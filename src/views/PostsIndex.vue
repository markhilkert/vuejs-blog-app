<template>
  <div class="posts-index">
  <h1>All Posts</h1>
      <div v-for="post in posts">
        <h2>{{ post.title }}</h2>
        <router-link v-bind:to="'/posts/' + post.id"> 
          <img v-bind:src="post.image" v-bind:alt="post.title">
        </router-link>
      </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      posts: []
    };
  },
  created: function() {
    axios.get("/api/posts")
      .then(response => {
        this.posts = response.data;
      });
  },
  methods: {}
};
</script>