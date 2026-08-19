<template>
  <main class="container py-5">
    <section class="section-card">
      <button class="btn btn-secondary mb-4" @click="$router.push('/projects')">
        <i class="bi bi-arrow-left"></i> 返回项目列表
      </button>
      
      <div v-if="project">
        <h1 class="project-title">{{ project.title }}</h1>
        <p class="project-description">{{ project.fullDescription }}</p>
        
        <div class="project-gallery">
          <div class="gallery-image" v-for="(image, index) in project.gallery" :key="index">
            <img :src="image" :alt="`${project.title} - 图片${index + 1}`">
          </div>
        </div>
        
        <div class="project-features">
          <h3 class="section-title">项目特点</h3>
          <ul>
            <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        
        <div class="project-technologies">
          <h3 class="section-title">技术栈</h3>
          <div class="tech-list">
            <span class="skill-tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </div>
      
      <div v-else class="text-center py-5">
        <i class="bi bi-exclamation-circle" style="font-size: 3rem; color: #999;"></i>
        <p class="mt-3 text-muted">项目不存在</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const baseUrl = import.meta.env.BASE_URL
const project = ref(null)

const projects = [
  {
    id: 1,
    title: '鹿引云途',
    description: '一款旅游软件',
    fullDescription: '鹿引云途是一款专注于旅游体验的移动应用，帮助用户发现周边的旅游景点，规划旅行路线，分享旅行心得。项目包含景点推荐、路线规划、社交分享等核心功能。通过智能算法为用户推荐最适合的景点，让每一次旅行都充满惊喜。',
    image: baseUrl + 'project1.jpg',
    gallery: [
      baseUrl + 'project1-1.jpg',
      baseUrl + 'project1-2.jpg',
      baseUrl + 'project1-3.jpg'
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', ],
    features: [
      '景点智能推荐系统，基于用户偏好和历史数据',
      '智能路线规划，优化行程安排',
      '社交分享功能，与好友分享旅行体验',
      '离线地图支持，无网络也能导航',
      '实时天气和交通信息'
    ],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    id: 2,
    title: '净澜先锋-水下拾圾机器人',
    description: '可以在水下工作的拾取垃圾的机器人',
    fullDescription: '净澜先锋是一款环保型水下机器人，专门用于清理水下垃圾。机器人配备高清摄像头、机械臂和导航系统，能够在复杂的水下环境中自主工作，为保护海洋环境贡献力量。项目旨在解决海洋污染问题，通过技术创新实现清洁海洋的目标。',
    image: baseUrl + 'project2.jpg',
    gallery: [
      baseUrl + 'project2-1.jpg',
      baseUrl + 'project2-2.jpg',
      baseUrl + 'project2-3.jpg'
    ],
    technologies: ['Python', 'HTML', 'CSS', 'Arduino', ],
    features: [
      '水下自主导航系统',
      '基于AI的垃圾识别算法',
      '精密机械臂控制',
      '实时视频监控',
      '防水设计，工作深度可达50米'
    ],
    github: 'https://github.com',
    demo: 'https://example.com'
  }
]

onMounted(() => {
  const projectId = parseInt(route.params.id)
  project.value = projects.find(p => p.id === projectId)
})
</script>

<style scoped>
.section-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #1976d2;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-title::before {
  content: '';
  width: 4px;
  height: 25px;
  background: linear-gradient(180deg, #4FC3F7 0%, #34A6F4 100%);
  border-radius: 2px;
}

.project-title {
  color: #1976d2;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.project-description {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.project-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.gallery-image {
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(25, 118, 210, 0.5);
  background: rgba(255, 255, 255, 0.6);
  aspect-ratio: 16/9;
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-image:hover img {
  transform: scale(1.1);
}

.project-features {
  margin-bottom: 2rem;
}

.project-features ul {
  list-style: none;
  padding: 0;
}

.project-features li {
  padding: 1rem;
  margin-bottom: 0.75rem;
  background: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 8px;
  color: #333;
  position: relative;
  padding-left: 2.5rem;
}

.project-features li::before {
  content: '✓';
  position: absolute;
  left: 1rem;
  color: #34A6F4;
  font-weight: bold;
  font-size: 1.2rem;
}

.project-technologies {
  margin-bottom: 2rem;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  background: rgba(144, 202, 249, 0.3);
  border: 2px solid rgba(25, 118, 210, 0.5);
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  display: inline-block;
  transition: all 0.3s ease;
  color: #333;
  font-weight: 500;
}

.skill-tag:hover {
  background: rgba(144, 202, 249, 0.5);
  border-color: rgba(25, 118, 210, 0.8);
  transform: scale(1.1);
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, #4FC3F7 0%, #34A6F4 100%);
  border: none;
  border-radius: 25px;
  padding: 12px 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #34A6F4 0%, #2D8FD4 100%);
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(52, 166, 244, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(25, 118, 210, 0.5);
  color: #333;
  border-radius: 25px;
  padding: 10px 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-secondary:hover {
  background: rgba(144, 202, 249, 0.15);
  border-color: rgba(25, 118, 210, 0.8);
  transform: scale(1.05);
}
</style>
