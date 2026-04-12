<template>
  <main class="container py-5">
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">加载中...</span>
      </div>
    </div>
    <div v-else-if="post" class="row">
      <div class="col-lg-8">
        <article class="section-card">
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-meta mb-4">
            <i class="bi bi-person"></i> {{ post.author_name }} |
            <i class="bi bi-calendar"></i> {{ formatDate(post.created_at) }} |
            <i class="bi bi-eye"></i> {{ post.views }} |
            <i class="bi bi-tag"></i> {{ post.category }}
          </div>
          <div class="post-content" v-html="renderedContent"></div>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const route = useRoute()
const post = ref(null)
const loading = ref(true)

const renderedContent = computed(() => {
  return post.value ? marked.parse(post.value.content) : ''
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('zh-CN')
}

const loadPost = async () => {
  try {
    loading.value = true
    // 模拟数据
    post.value = null
    document.title = '文章不存在 - 我的博客'
  } catch (error) {
    console.error('加载文章失败:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadPost()
})
</script>

<style scoped>
.section-card {
  background: rgba(220, 235, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-title {
  color: #1976d2;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.post-meta {
  color: #666;
  font-size: 0.9rem;
}

.post-content {
  color: #333;
  line-height: 1.8;
  font-size: 1.1rem;
}
</style>