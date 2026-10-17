<script setup>
import { RouterLink } from 'vue-router'
const highlights = [
  { emoji: '🦷', title: 'Orange incisors', text: 'Beavers have strong front teeth that keep growing throughout their lives.' },
  { emoji: '🌊', title: 'Wetland makers', text: 'Their dams can slow water and create ponds that support diverse wildlife.' },
  { emoji: '🌿', title: 'Plant eaters', text: 'Leaves, bark, twigs, and aquatic plants are all part of a beaver’s menu.' },
]
</script>
<template>
  <section class="hero page-wrap"><div class="hero-copy"><p class="eyebrow">FIELD NOTES FROM THE FRESHWATER WORLD</p><h1>Meet the animal<br>that <em>reshapes nature.</em></h1><p class="hero-lead">Beavers are more than builders. They are fascinating mammals that can change landscapes and create habitats for other species.</p><div class="hero-actions"><RouterLink class="button" to="/facts">Explore the facts <span>↗</span></RouterLink><RouterLink class="text-link" to="/about">Why they matter →</RouterLink></div><div class="hero-stats"><div><strong>2</strong><span>living species</span></div><div><strong>24/7</strong><span>growing incisors</span></div><div><strong>🌱</strong><span>ecosystem impact</span></div></div></div><div class="hero-art" aria-label="Stylized beaver landscape"><div class="hero-sun"></div><div class="hero-hill"></div><div class="hero-water"></div><div class="hero-animal">🦫</div><span class="art-caption">CASTOR · NATURE'S ENGINEER</span></div></section>
  <section class="highlights page-wrap"><div class="section-intro"><p class="eyebrow">A FEW REASONS TO BE CURIOUS</p><h2>Small details.<br><em>Big stories.</em></h2></div><div class="highlight-grid"><article v-for="item in highlights" :key="item.title" class="highlight-card"><span>{{ item.emoji }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p></article></div></section>
  <section class="callout page-wrap"><div><p class="eyebrow">YOUR NEXT DISCOVERY</p><h2>Every beaver fact<br>opens a new <em>world.</em></h2></div><RouterLink class="button button-light" to="/facts">Browse the fact library ↗</RouterLink></section>
</template>
