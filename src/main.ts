import { createApp } from 'vue';
import App from '@/App.vue';

import '@/styles/index.scss';
import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';
import '@purge-icons/generated';
import { setupStore } from '@/store';

const app = createApp(App);

setupStore(app);

app.mount('#app');
