// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "stylesheet", href:
      "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
        ],
      }
    },
    
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt', '@nuxtjs/tailwindcss', '@pinia/nuxt'],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },
  appConfig: {
    apikey: process.env.SUPABASE_API_KEYS,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRETS_KEY,
    storageUrl: process.env.SUPABASE_STORAGE_URL,
    baseStorageUrl: process.env.SUPABASE_GET_STORAGE_URL,
    },

  pwa: {   
    manifest: {"theme_color":"#8936FF",
    "background_color":"#2EC6FE",
    "icons":[{"purpose":"maskable",
    "sizes":"512x512",
    "src":"icon512_maskable.png",
    "type":"image/png"},
    {"purpose":"any",
    "sizes":"512x512",
    "src":"icon512_rounded.png",
    "type":"image/png"}],
    "orientation":"any",
    "display":"standalone",
    "dir":"auto",
    "lang":"id-ID",
    "name":"VayangStore",
    "short_name":"VayangStore"},
    devOptions: {
      enabled: true,
    }
  }
})
