<script setup>
import SiteHeader from './components/SiteHeader.vue'
</script>
<template>
  <div class="app-shell">
    <SiteHeader />
    <main><RouterView /></main>
    <footer class="site-footer"><a class="wordmark" href="/">🦫 Beaver Atlas</a><p>Curiosity is the first step toward conservation.</p><span>Made for curious minds · English edition</span></footer>
  </div>
</template>
