<template>
  <main class="container py-5">
    <section class="section-card">
      <h2 class="section-title">我的Happy时刻</h2>
      <p class="mb-4">记录生活中的每一个美好瞬间</p>
      
      <div class="happy-list">
        <div class="happy-item">
          <div class="happy-number">1</div>
          <div class="happy-content">
            <h5>修满了3分的第二课堂分</h5>
            <p class="text-muted small mb-0">完成了所有第二课堂要求，感觉很有成就感！</p>
          </div>
        </div>
        
        <div class="happy-item">
          <div class="happy-number">2</div>
          <div class="happy-content">
            <h5>进入了入党积极分子</h5>
            <p class="text-muted small mb-0">成为入党积极分子，继续努力，争取早日入党！</p>
          </div>
        </div>
        
        <div class="happy-item">
          <div class="happy-number">3</div>
          <div class="happy-content">
            <h5>完成了个人博客网站</h5>
            <p class="text-muted small mb-0">从零开始学习Vue.js，成功搭建了自己的博客，记录成长历程</p>
          </div>
        </div>
        
        <div class="happy-item">
          <div class="happy-number">4</div>
          <div class="happy-content">
            <h5>获得了第一次比赛奖项</h5>
            <p class="text-muted small mb-0">在编程比赛中获得奖项，这是对我努力的肯定</p>
          </div>
        </div>
        
        <div class="happy-item">
          <div class="happy-number">5</div>
          <div class="happy-content">
            <h5>父母身体健康</h5>
            <p class="text-muted small mb-0">最大的幸福就是家人健康平安</p>
          </div>
        </div>
      </div>
      
      <div class="mt-5 text-center">
        <p class="text-muted">持续更新中... 每一个happy时刻都值得被记录</p>
      </div>
    </section>
  </main>
</template>

<script setup>
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

.happy-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.happy-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.3s ease;
}

.happy-item:hover {
  background: rgba(144, 202, 249, 0.15);
  border-color: rgba(25, 118, 210, 0.8);
  transform: translateX(10px);
}

.happy-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4FC3F7 0%, #34A6F4 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
  color: white;
  margin-right: 1rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(52, 166, 244, 0.3);
}

.happy-content {
  flex: 1;
}

.happy-content h5 {
  margin-bottom: 0.25rem;
  color: #333;
  font-weight: 600;
  font-size: 1.1rem;
}

.happy-content p {
  color: #666;
  font-size: 0.9rem;
}
</style>
