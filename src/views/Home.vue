<template>
  <main class="container py-5">
    <div class="row">
      <div class="col-lg-8">
        <section id="about" class="section-card">
          <h2 class="section-title">关于我</h2>
          <div class="row align-items-center">
            <div class="col-md-4 text-center">
            <div class="avatar-wrapper">
              <img src="/avatar.jpg" class="profile-avatar mb-3" alt="头像">
              <div class="avatar-tooltip">害羞男大一名</div>
            </div>
          </div>
            <div class="col-md-8">
              <h3 class="mb-3">鹤</h3>
              <p class="mb-2">昵称：鹤</p>
              <p class="mb-2">性别：男</p>
              <p class="mb-2">职业：学生</p>
              <p class="mb-3">爱好：编程、游戏、运动</p>
              <p>梦想：愿父母安康无恙，所爱之人常常相伴</p>
            </div>
          </div>
        </section>

        <section id="projects" class="section-card">
          <h2 class="section-title">我的项目</h2>
          <div class="row">
            <div class="col-md-6">
              <div class="project-card" @click="router.push('/projects/1')" style="cursor: pointer;">
                <h4>鹿引云途</h4>
                <p class="text-muted small">一款旅游软件</p>
                <div class="mt-2">
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">C++</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="project-card" @click="router.push('/projects/2')" style="cursor: pointer;">
                <h4>净澜先锋-水下拾圾机器人</h4>
                <p class="text-muted small">可以在水下工作的拾取垃圾的机器人</p>
                <div class="mt-2">
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">html</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" class="section-card">
          <h2 class="section-title">时间线</h2>
          <div class="timeline-item">
            <h5>2025年10月</h5>
            <p class="text-muted small">开始接触编程</p>
          </div>
          <div class="timeline-item">
            <h5>2025年11月</h5>
            <p class="text-muted small">学习HTML、CSS、JavaScript</p>
          </div>
          <div class="timeline-item">
            <h5>2026年3月</h5>
            <p class="text-muted small">获得了第一次比赛奖项</p>
          </div>
          <div class="timeline-item">
            <h5>2026年3月</h5>
            <p class="text-muted small">完成个人博客</p>
          </div>
        </section>

        <section id="posts" class="section-card">
          <h2 class="section-title">最新文章</h2>
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">加载中...</span>
            </div>
          </div>
          <div v-else-if="posts.length === 0" class="text-center py-5">
            <i class="bi bi-inbox" style="font-size: 3rem; color: #a0aec0;"></i>
            <p class="mt-3 text-muted">暂无文章</p>
          </div>
          <div v-else>
            <PostCard v-for="post in posts" :key="post.id" :post="post" />
          </div>
          <nav v-if="totalPages > 1" id="pagination">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">上一页</a>
              </li>
              <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">下一页</a>
              </li>
            </ul>
          </nav>
        </section>
      </div>

      <div class="col-lg-4">
        <div class="section-card">
          <h2 class="section-title">搜索</h2>
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="searchQuery" placeholder="搜索文章..." @keypress.enter="searchPosts">
            <button class="btn btn-primary" @click="searchPosts">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>

        <div class="section-card">
          <h2 class="section-title">分类</h2>
          <div class="mt-3">
            <a v-for="category in categories" :key="category" href="#" class="skill-tag" @click.prevent="filterByCategory(category)">
              {{ category }}
            </a>
          </div>
        </div>

        <section id="links" class="section-card">
          <h2 class="section-title">友链</h2>
          <a href="https://linfun.top" target="_blank" class="link-card">
            <h5>he.top</h5>
            <p class="text-muted small mb-0">鹤的个人网站</p>
          </a>
          <a href="https://github.com" target="_blank" class="link-card">
            <h5>GitHub</h5>
            <p class="text-muted small mb-0">代码托管平台</p>
          </a>
          <a href="https://stackoverflow.com" target="_blank" class="link-card">
            <h5>Stack Overflow</h5>
            <p class="text-muted small mb-0">技术问答社区</p>
          </a>
        </section>

        <section id="happy" class="section-card">
          <h2 class="section-title">我的happy</h2>
          <div class="happy-list">
            <div class="happy-item">
              <div class="happy-number">1</div>
              <div class="happy-content">
                <h5>修满了3分的第二课堂分</h5>
                <p class="text-muted small mb-0">完成了所有第二课堂要求</p>
              </div>
            </div>
        
            <div class="happy-item">
              <div class="happy-number">2</div>
              <div class="happy-content">
                <h5>结识了很好的技术大佬们</h5>
                <p class="text-muted small mb-0">认识了很多技术大牛，受益匪浅</p>
              </div>
            </div>
            <div class="happy-item">
              <div class="happy-number">3</div>
              <div class="happy-content">
                <h5>学会了很多新技术</h5>
                <p class="text-muted small mb-0">掌握了 HTML、JavaScript、CSS 等技术</p>
              </div>
            </div>
          </div>
        </section>

        <div class="section-card">
          <h2 class="section-title">技术栈</h2>
          <div class="mt-3">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">c</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">java</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PostCard from '../components/PostCard.vue'

const router = useRouter()
const posts = ref([])
const categories = ref([])
const loading = ref(true)
const currentPage = ref(1)
const totalPages = ref(1)
const searchQuery = ref('')

const loadPosts = async (page = 1, category = null, search = null) => {
  try {
    loading.value = true
    // 模拟数据
    posts.value = []
    totalPages.value = 1
    currentPage.value = page
  } catch (error) {
    console.error('加载文章失败:', error)
  } finally {
    loading.value = false
  }
}

const loadCategories = async () => {
  try {
    // 模拟数据
    categories.value = ['技术分享', '生活随笔', '学习笔记', '项目经验']
  } catch (error) {
    console.error('加载分类失败:', error)
  }
}

const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  loadPosts(page)
}

const searchPosts = () => {
  loadPosts(1, null, searchQuery.value)
}

const filterByCategory = (category) => {
  loadPosts(1, category)
}

onMounted(() => {
  loadPosts()
  loadCategories()
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

.section-title {
  color: #1976d2;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.section-title::before {
  content: '';
  width: 4px;
  height: 30px;
  background: linear-gradient(180deg, #4FC3F7 0%, #34A6F4 100%);
  border-radius: 2px;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #34A6F4;
  box-shadow: 0 5px 20px rgba(52, 166, 244, 0.3);
  transition: all 0.3s ease;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-tooltip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  background: rgba(25, 118, 210, 0.95);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.avatar-wrapper:hover .avatar-tooltip {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.avatar-wrapper:hover .profile-avatar {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(52, 166, 244, 0.5);
}

.timeline-item {
  position: relative;
  padding-left: 30px;
  margin-bottom: 1.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #4FC3F7 0%, #34A6F4 100%);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(52, 166, 244, 0.5);
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 12px;
  width: 2px;
  height: calc(100% - 12px);
  background: rgba(144, 202, 249, 0.4);
}

.link-card {
  background: rgba(220, 235, 255, 0.95);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #333;
  display: block;
}

.link-card:hover {
  background: rgba(210, 230, 255, 0.98);
  border-color: rgba(25, 118, 210, 0.8);
  transform: translateX(10px);
}

.project-card {
  background: rgba(220, 235, 255, 0.95);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  background: rgba(210, 230, 255, 0.98);
  border-color: rgba(25, 118, 210, 0.8);
  transform: translateY(-5px);
}

.skill-tag {
  background: rgba(144, 202, 249, 0.3);
  border: 2px solid rgba(25, 118, 210, 0.5);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  margin: 5px;
  display: inline-block;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #333;
}

.skill-tag:hover {
  background: rgba(144, 202, 249, 0.5);
  border-color: rgba(25, 118, 210, 0.8);
  transform: scale(1.1);
}

.happy-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.happy-item {
  display: flex;
  align-items: center;
  background: rgba(220, 235, 255, 0.95);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.3s ease;
}

.happy-item:hover {
  background: rgba(210, 230, 255, 0.98);
  border-color: rgba(25, 118, 210, 0.8);
  transform: translateX(10px);
}

.happy-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #4FC3F7 0%, #34A6F4 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  margin-right: 1rem;
  flex-shrink: 0;
}

.happy-content {
  flex: 1;
}

.happy-content h5 {
  margin-bottom: 0.25rem;
  color: #222;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 增强所有文字的可读性 */
p {
  color: #333;
  font-weight: 500;
}

h3, h4, h5 {
  color: #222;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.text-muted {
  color: #666 !important;
  font-weight: 400;
}

.input-group input,
.input-group button {
  background: rgba(220, 235, 255, 0.95);
  border: 2px solid rgba(25, 118, 210, 0.5);
  color: #333;
}

.input-group input:focus,
.input-group button:focus {
  background: rgba(210, 230, 255, 0.98);
  border-color: rgba(25, 118, 210, 0.8);
  color: #333;
}

.input-group input::placeholder {
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

.pagination .page-link {
  background: rgba(220, 235, 255, 0.95);
  border: 2px solid rgba(25, 118, 210, 0.5);
  color: #333;
}

.pagination .page-item.active .page-link {
  background: linear-gradient(135deg, #4FC3F7 0%, #34A6F4 100%);
  border-color: #34A6F4;
  color: white;
}

.pagination .page-link:hover {
  background: rgba(210, 230, 255, 0.98);
  border-color: rgba(25, 118, 210, 0.8);
}
</style>
