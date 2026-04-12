<template>
  <main class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="section-card">
          <h2 class="mb-4" style="color: #34A6F4;">写文章</h2>
          <form @submit.prevent="submitPost">
            <div class="mb-3">
              <label for="title" class="form-label">标题</label>
              <input type="text" v-model="postForm.title" class="form-control" id="title" required>
            </div>

            <div class="mb-3">
              <label for="content" class="form-label">内容（支持Markdown）</label>
              <textarea v-model="postForm.content" class="form-control markdown-editor" id="content" rows="15" required></textarea>
            </div>

            <div class="mb-3">
              <label for="excerpt" class="form-label">摘要（可选）</label>
              <textarea v-model="postForm.excerpt" class="form-control" id="excerpt" rows="3"></textarea>
            </div>

            <div class="row mb-3">
              <div class="col-md-6">
                <label for="category" class="form-label">分类</label>
                <select v-model="postForm.category" class="form-select" id="category">
                  <option value="技术分享">技术分享</option>
                  <option value="生活随笔">生活随笔</option>
                  <option value="学习笔记">学习笔记</option>
                  <option value="项目经验">项目经验</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="author_name" class="form-label">作者</label>
                <input type="text" v-model="postForm.author_name" class="form-control" id="author_name" value="鹤">
              </div>
            </div>

            <div class="mb-3">
              <label for="status" class="form-label">状态</label>
              <select v-model="postForm.status" class="form-select" id="status">
                <option value="draft">草稿</option>
                <option value="published">已发布</option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label">预览</label>
              <div class="preview">
                <div v-if="postForm.content" v-html="renderedPreview"></div>
                <p v-else class="text-muted">在上方输入内容，这里将显示预览...</p>
              </div>
            </div>

            <div class="d-flex gap-2">
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-send"></i> 发布
              </button>
              <button type="button" class="btn btn-secondary" @click="$router.push('/')">
                <i class="bi bi-arrow-left"></i> 返回
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { marked } from 'marked'

const router = useRouter()
const postForm = ref({
  title: '',
  content: '',
  excerpt: '',
  category: '技术分享',
  author_name: '鹤',
  status: 'published'
})

const renderedPreview = computed(() => {
  return postForm.value.content ? marked.parse(postForm.value.content) : ''
})

const submitPost = async () => {
  try {
    // 模拟发布成功
    alert('文章发布成功！')
    router.push('/')
  } catch (error) {
    console.error('发布错误:', error)
    alert('发布失败，请稍后重试')
  }
}
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

.form-control,
.form-select {
  background: rgba(240, 248, 255, 0.95);
  border: 2px solid rgba(25, 118, 210, 0.5);
  color: #333;
}

.form-control:focus,
.form-select:focus {
  background: rgba(230, 240, 255, 0.98);
  border-color: rgba(25, 118, 210, 0.8);
  color: #333;
  box-shadow: 0 0 10px rgba(52, 166, 244, 0.2);
}

.form-control::placeholder {
  color: #999;
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

.btn-secondary {
  background: rgba(240, 248, 255, 0.95);
  border: 2px solid rgba(25, 118, 210, 0.5);
  color: #333;
  border-radius: 25px;
  padding: 10px 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(230, 240, 255, 0.98);
  border-color: rgba(25, 118, 210, 0.8);
  transform: scale(1.05);
}

.markdown-editor {
  min-height: 400px;
  font-family: 'Courier New', monospace;
}

.preview {
  background: rgba(240, 248, 255, 0.95);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  min-height: 400px;
}

.preview :deep(h1) {
  color: #1976d2;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.preview :deep(h2) {
  color: #2196f3;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.preview :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #333;
}

.preview :deep(code) {
  background: rgba(144, 202, 249, 0.3);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

.preview :deep(pre) {
  background: rgba(240, 248, 255, 0.95);
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  border: 1px solid rgba(25, 118, 210, 0.3);
}

.preview :deep(blockquote) {
  border-left: 4px solid #34A6F4;
  padding-left: 1rem;
  color: #666;
  margin: 1rem 0;
}

.preview :deep(ul),
.preview :deep(ol) {
  margin-left: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.preview :deep(li) {
  margin-bottom: 0.5rem;
}
</style>
