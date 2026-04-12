<template>
  <main class="container py-5">
    <section class="section-card">
      <h2 class="section-title">我的项目</h2>
      <p class="mb-4">记录我参与和开发的各个项目</p>
      
      <div class="row">
        <div class="col-md-6 mb-4" v-for="project in projects" :key="project.id">
          <div class="project-card" @click="goToProject(project.id)">
            <div class="project-image">
              <img :src="project.image" :alt="project.title">
            </div>
            <h4>{{ project.title }}</h4>
            <p class="text-muted small">{{ project.description }}</p>
            <div class="mt-2">
              <span class="skill-tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>
            <div class="mt-3">
              <router-link :to="`/projects/${project.id}`" class="btn btn-primary btn-sm">
                查看详情
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const projects = ref([
  {
    id: 1,
    title: '鹿引云途',
    description: '一款旅游软件',
    fullDescription: '鹿引云途是一款专注于旅游体验的移动应用，帮助用户发现周边的旅游景点，规划旅行路线，分享旅行心得。项目包含景点推荐、路线规划、社交分享等核心功能。',
    image: '/project1.jpg',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    features: ['景点智能推荐', '路线规划', '社交分享', '离线地图'],
  },
  {
    id: 2,
    title: '净澜先锋-水下拾圾机器人',
    description: '可以在水下工作的拾取垃圾的机器人',
    fullDescription: '净澜先锋是一款环保型水下机器人，专门用于清理水下垃圾。机器人配备高清摄像头、机械臂和导航系统，能够在复杂的水下环境中自主工作，为保护海洋环境贡献力量。',
    image: '/project2.jpg',
    technologies: ['Python', 'HTML', 'CSS', 'Arduino'],
    features: ['水下导航', '垃圾识别', '机械臂控制', '实时监控'],
  }
])

const goToProject = (id) => {
  router.push(`/projects/${id}`)
}
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
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-title::before {
  content: '';
  width: 4px;
  height: 30px;
  background: linear-gradient(180deg, #4FC3F7 0%, #34A6F4 100%);
  border-radius: 2px;
}

.project-card {
  background: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  background: rgba(144, 202, 249, 0.15);
  border-color: rgba(25, 118, 210, 0.8);
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-card h4 {
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
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
