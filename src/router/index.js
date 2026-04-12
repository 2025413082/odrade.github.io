import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PostDetail from '../views/PostDetail.vue'
import NewPost from '../views/NewPost.vue'
import MyPosts from '../views/MyPosts.vue'
import Happy from '../views/Happy.vue'
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetail
  },
  {
    path: '/new-post',
    name: 'NewPost',
    component: NewPost
  },
  {
    path: '/my-posts',
    name: 'MyPosts',
    component: MyPosts
  },
  {
    path: '/happy',
    name: 'Happy',
    component: Happy
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
