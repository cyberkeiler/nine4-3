// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Home: nine4",
      meta: [{ name: "description", content: "Welcome to nine4 homepage." }],
    },
  },
});
