<script setup>
defineProps({ fact: { type: Object, required: true } })
</script>
<template>
  <article class="fact-card"><div class="fact-card-top"><span class="fact-emoji">{{ fact.emoji || '🦫' }}</span><span class="fact-category">{{ fact.category || 'BEAVER FACT' }}</span></div><h3>{{ fact.title }}</h3><p>{{ fact.description }}</p><span v-if="fact.source" class="source-note">Source: {{ fact.source }}</span></article>
</template>
