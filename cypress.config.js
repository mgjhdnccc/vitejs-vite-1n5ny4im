import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // node eventleri buraya yazabilirsin
    },
    supportFile: 'cypress/support/e2e.js'  // bunu ekliyoruz
  }
});
