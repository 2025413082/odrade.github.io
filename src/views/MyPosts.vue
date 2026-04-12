<template>
  <main class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="section-card">
          <h2 class="mb-4" style="color: #34A6F4;">我的文章</h2>
          
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">加载中...</span>
            </div>
          </div>
          
          <div v-else-if="posts.length === 0" class="text-center py-5">
            <i class="bi bi-inbox" style="font-size: 3rem; color: #a0aec0;"></i>
            <p class="mt-3 text-muted">暂无文章</p>
            <router-link to="/new-post" class="btn btn-primary">
              <i class="bi bi-plus"></i> 写第一篇文章
            </router-link>
          </div>
          
          <div v-else>
            <div v-for="post in posts" :key="post.id" class="post-item">
              <div class="d-flex justify-content-between align-items-start">
                <div class="flex-grow-1">
                  <h4>
                    <router-link :to="`/posts/${post.id}`" class="text-decoration-none">
                      {{ post.title }}
                    </router-link>
                  </h4>
                  <div class="post-meta mb-2">
                    <i class="bi bi-calendar"></i> {{ formatDate(post.created_at) }} |
                    <i class="bi bi-eye"></i> {{ post.views }} |
                    <i class="bi bi-chat"></i> {{ post.comment_count }} |
                    <i class="bi bi-tag"></i> {{ post.category }}
                  </div>
                  <p class="mb-0 text-muted">{{ post.excerpt || post.content.substring(0, 100) }}...</p>
                </div>
                <div class="post-actions">
                  <button @click="editPost(post.id)" class="btn btn-sm btn-outline-primary me-2">
                    <i class="bi bi-pencil"></i> 编辑
                  </button>
                  <button @click="deletePost(post.id)" class="btn btn-sm btn-outline-danger">
                    <i class="bi bi-trash"></i> 删除
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = ref([])
const loading = ref(true)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('zh-CN')
}

const loadPosts = async () => {
  try {
    loading.value = true
    // 模拟数据
    posts.value = []
  } catch (error) {
    console.error('加载文章失败:', error)
  } finally {
    loading.value = false
  }
}

const editPost = (id) => {
  router.push(`/posts/${id}/edit`)
}

const deletePost = async (id) => {
  if (confirm('确定要删除这篇文章吗？')) {
    try {
      // 模拟删除
      posts.value = posts.value.filter(post => post.id !== id)
    } catch (error) {
      console.error('删除文章失败:', error)
      alert('删除失败，请稍后重试')
    }
  }
}

onMounted(() => {
  loadPosts()
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

.section-card:hover {
  background: rgba(210, 230, 255, 0.98);
  border-color: rgba(25, 118, 210, 0.8);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.post-item {
  background: rgba(240, 248, 255, 0.95);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.post-item:hover {
  background: rgba(230, 240, 255, 0.98);
  border-color: rgba(25, 118, 210, 0.8);
  transform: translateY(-3px);
}

.post-item h4 a {
  color: #1976d2;
  font-weight: 600;
  transition: color 0.3s ease;
  text-decoration: none;
}

.post-item h4 a:hover {
  color: #0d47a1;
}

.post-meta {
  color: #666;
  font-size: 0.85rem;
}

.post-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, #4FC3F7 0%, #34A6F4 100%);
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  color: white;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #34A6F4 0%, #2D8FD4 100%);
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(52, 166, 244, 0.4);
}

.btn-outline-primary {
  border-color: rgba(25, 118, 210, 0.5);
  color: #1976d2;
  background: rgba(240, 248, 255, 0.95);
}

.btn-outline-primary:hover {
  background: rgba(230, 240, 255, 0.98);
  border-color: #1976d2;
}

.btn-outline-danger {
  border-color: rgba(255, 99, 132, 0.5);
  color: #dc3545;
  background: rgba(240, 248, 255, 0.95);
}

.btn-outline-danger:hover {
  background: rgba(255, 224, 230, 0.98);
  border-color: #dc3545;
}
</style>
