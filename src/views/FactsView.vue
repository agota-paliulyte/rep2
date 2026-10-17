<script setup>
import { onMounted, ref } from 'vue'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import FactCard from '../components/FactCard.vue'
import StateMessage from '../components/StateMessage.vue'

const facts = ref([])
const loading = ref(true)
const errorMessage = ref('')
onMounted(async () => {
  try {
    // These cards are populated only from the Firestore collection, not a hard-coded fallback list.
    const snapshot = await getDocs(query(collection(db, 'beaverFacts'), orderBy('title')))
    facts.value = snapshot.docs.map(document => ({ id: document.id, ...document.data() }))
  } catch (error) {
    console.error('Could not load beaver facts from Firestore:', error)
    errorMessage.value = 'The fact library could not be loaded. Check your Firebase configuration, collection, and Firestore read rules, then try again.'
  } finally {
    loading.value = false
  }
})
</script>
<template>
  <section class="page-wrap page-heading"><p class="eyebrow">THE FIELD GUIDE</p><h1>Beaver <em>fact file.</em></h1><p>Short, curious notes about the animal and the habitat it helps shape.</p></section>
  <section class="page-wrap facts-content">
    <StateMessage v-if="loading" kind="info" title="Loading the field notes…" message="Connecting to the live Firestore collection." />
    <StateMessage v-else-if="errorMessage" kind="error" title="Something went wrong" :message="errorMessage" />
    <StateMessage v-else-if="facts.length === 0" kind="info" title="No facts yet" message="The beaverFacts collection is connected, but it has no documents. Add a few fact documents in Firebase Console." />
    <div v-else class="facts-grid"><FactCard v-for="fact in facts" :key="fact.id" :fact="fact" /></div>
    <p class="data-note">This page reads its fact cards from Cloud Firestore at runtime.</p>
  </section>
</template>
