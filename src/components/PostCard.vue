<template>
  <div class="card post-card">
    <img v-if="post.cover_image" :src="post.cover_image" class="card-img-top post-cover" :alt="post.title">
    <div class="card-body">
      <h4 class="post-title">
        <router-link :to="`/posts/${post.id}`" class="text-decoration-none">{{ post.title }}</router-link>
      </h4>
      <div class="post-meta mb-2">
        <i class="bi bi-person"></i> {{ post.author_name }} |
        <i class="bi bi-calendar"></i> {{ formatDate(post.created_at) }} |
        <i class="bi bi-eye"></i> {{ post.views }} |
        <i class="bi bi-chat"></i> {{ post.comment_count }}
      </div>
      <p class="card-text">{{ post.excerpt || post.content.substring(0, 120) }}...</p>
      <div class="d-flex justify-content-between align-items-center">
        <span class="badge">{{ post.category }}</span>
        <router-link :to="`/posts/${post.id}`" class="btn btn-primary btn-sm">阅读更多</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('zh-CN')
}
</script>

<style scoped>
.card {
  background: rgba(240, 248, 255, 0.95);
  backdrop-filter: blur(5px);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.card:hover {
  background: rgba(230, 240, 255, 0.98);
  border-color: rgba(25, 118, 210, 0.8);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(52, 166, 244, 0.2);
}

.post-card {
  margin-bottom: 1.5rem;
}

.post-cover {
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.post-meta {
  color: #666;
  font-size: 0.85rem;
}

.post-title {
  color: #1976d2;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.post-title:hover {
  color: #0d47a1;
}

.badge {
  background: linear-gradient(135deg, #4FC3F7 0%, #34A6F4 100%);
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  color: white;
}

.btn-primary {
  background: linear-gradient(135deg, #4FC3F7 0%, #34A6F4 100%);
  border: none;
  border-radius: 25px;
  padding: 8px 20px;
  font-weight: 600;
  transition: all 0.3s ease;
  color: white;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #34A6F4 0%, #2D8FD4 100%);
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(52, 166, 244, 0.4);
}
</style>
