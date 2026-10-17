<script setup>
defineProps({ kind: { type: String, default: 'info' }, title: { type: String, required: true }, message: { type: String, required: true } })
</script>
<template><div class="state-message" :class="`state-${kind}`" role="status"><strong>{{ title }}</strong><p>{{ message }}</p></div></template>
