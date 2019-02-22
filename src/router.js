import Vue from "vue";
import Router from "vue-router";
import PostsIndex from "./views/PostsIndex.vue";
import About from "./views/About.vue";
import PostsNew from "./views/PostsNew.vue";
import PostsShow from "./views/PostsShow.vue";
import PostsEdit from "./views/PostsEdit.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
            { path: "/", name: "posts-index", component: PostsIndex },
            { path: "/about", name: "about", component: About },
            { path: "/posts/new", name: "posts-new", component: PostsNew },
            { path: "/posts/:id", name: "posts-show", component: PostsShow },
            { path: "/posts/:id/edit", name: "posts-edit", component: PostsEdit },
            { path: "/signup", name: "signup", component: Signup },
            { path: "/login", name: "login", component: Login },
            { path: "/logout", name: "logout", component: Logout }
  ]
})
