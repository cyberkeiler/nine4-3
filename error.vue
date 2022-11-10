<script setup>
const props = defineProps({ error: Object });
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="bg-black">
    <Header />
    <div
      class="flex flex-col justify-center mx-auto mt-52 text-center max-w-2x1"
    >
      <h1 class="text-3xl font-bold tracking-tight text-white md:text-5xl">
        {{ error.statusCode }} – {{ error.statusMessage }}
      </h1>
      <br />
      <a
        class="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4 mt-16"
        @click="handleError()"
      >
        Return Home
      </a>
    </div>
    <div class="mt-64"></div>
    <Footer />
  </div>
</template>
