<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i class="bi bi-journal-text"></i> My start
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#about">关于我</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#projects">我的项目</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#timeline">时间线</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#links">友链</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#happy">happy</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/new-post">写文章</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/my-posts">我的文章</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  background: rgba(52, 166, 244, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(52, 166, 244, 0.2);
}

.navbar-brand {
  font-weight: bold;
  color: #1976d2 !important;
  font-size: 1.5rem;
  text-decoration: none;
}

.nav-link {
  color: #1976d2 !important;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: #0d47a1 !important;
  background: rgba(52, 166, 244, 0.2);
  border-radius: 5px;
}
</style>
