# Beaver Atlas — Vue Beaver Explorer

An English-language Vue 3 website about beavers, with three routed views and a fact library loaded from Cloud Firestore.

## Features and assignment requirements
- **Vue components:** `SiteHeader.vue` (navigation), `FactCard.vue` (one fact), and `StateMessage.vue` (loading, empty, and error states), in addition to `App.vue`.
- **Props:** `FactsView.vue` reads Firestore documents and passes each document as the `fact` prop to `FactCard.vue`. The child declares its prop with `defineProps` and only displays the passed data.
- **Vue Router routes:** `/` (Home), `/facts` (Firestore fact library), and `/about` (why beavers matter). Navigation uses `RouterLink`, and `App.vue` renders `RouterView`.
- **Firestore:** reads the `beaverFacts` collection, with loading, empty, and error states. `firestore.rules` allows public reads and denies client writes.
- **Firebase Hosting:** `firebase.json` includes an SPA rewrite so direct route visits and page refreshes resolve to `index.html`.

## 1. Configure Firebase
1. Create a Firebase project at https://console.firebase.google.com/.
2. Add a Web app in Project settings and copy its configuration into `src/firebase.js`, replacing every `YOUR_...` placeholder.
3. Create a Cloud Firestore database.
4. Create a collection named `beaverFacts`. Add documents with fields like these (use each field's indicated type):
   - `title` (string): `Orange incisors`
   - `description` (string): `A beaver's front teeth contain iron-rich compounds that help make them strong and orange.`
   - `category` (string): `ADAPTATION`
   - `emoji` (string): `🦷`
   - `source` (string): `Wildlife reference to be verified`
5. Add several documents, with a `title` field on every document because the app orders by title. Use trustworthy references to verify facts before submitting.
6. In Firebase Console, publish the rules in `firestore.rules` (or deploy them with the Firebase CLI). These rules make facts publicly readable and prevent client-side writes. Never use service-account credentials in a browser app.

## 2. Install and run locally
Requires a current Node.js LTS version.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The Firebase configuration and `beaverFacts` collection must exist for the facts page to load data.

## 3. Build and deploy

```bash
npm run build
npm install -g firebase-tools
firebase login
firebase use --add
firebase deploy --only hosting,firestore:rules
```

Choose the Firebase project that contains your Firestore database. The Hosting site URL will be shown after deployment, usually `https://YOUR_PROJECT_ID.web.app`.

## 4. GitHub
Create a separate GitHub repository for this Vue project. Commit regularly with descriptive messages, for example `Create Vue routes`, `Add Firestore fact cards`, and `Style responsive pages`. Push the source code and include the README, `firebase.json`, and `firestore.rules`. Do not commit `node_modules`, `dist`, or private credentials.

## Before submitting
- Replace Firebase placeholders and test the live Firestore read.
- Verify all three routes by navigating, refreshing, and opening `/facts` and `/about` directly on the deployed site.
- Capture screenshots of the `beaverFacts` collection and its fields for the assignment.
- Add your actual GitHub and Firebase Hosting URLs to your submission notes.
