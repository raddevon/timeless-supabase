import { createApp } from 'vue';
import App from './App.vue';

import supabase from 'vue-3-supabase';

const app = createApp(App);

app.use(supabase, {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
  options: {},
});

app.mount('#app');
