<template>
  <main class="min-h-screen bg-white">
    <header
      class="py-4 px-2.5 sticky top-0 z-50 bg-white bg-opacity-50 backdrop-blur border-b border-slate-100"
    >
      <h1 class="text-gray-500 flex items-center text-sm">
        <span class="h-3 w-3 mr-2 rounded-full bg-primary"></span>
        <span class="font-semibold"> Neueste Updates </span>
      </h1>
    </header>
    <section class="min-h-[calc(100vh-102px)] pt-4">
      <div
        class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <post v-for="(post, i) in sortedData" :content="post" :key="i" />
      </div>
    </section>
    <footer
      class="px-4 py-3 flex items-center justify-between sticky bottom-0 z-50 bg-white bg-opacity-50 backdrop-blur-xl text-xs border-t border-slate-100"
    >
      <a
        class="text-gray-500"
        href="https://www.med.wf"
        target="_blank"
      >
        Erstellt mit 🫀.
      </a>
      <a
        class="text-primary"
        href="https://log.med.wf"
        target="_blank"
      >
        Alle Updates
      </a>
    </footer>
  </main>
</template>

<script setup>
const { data } = await useAsyncData("feed", () =>
  queryContent("/posts").find()
);

const sortedData = data.value.sort((a, b) => {
  const a_version = a.version.split('.').map(Number);
  const b_version = b.version.split('.').map(Number);
  const max_length = Math.max(a_version.length, b_version.length);
  for (let i = 0; i < max_length; i++) {
    const a_part = a_version[i] || 0;
    const b_part = b_version[i] || 0;
    if (a_part < b_part) {
      return 1;
    } else if (a_part > b_part) {
      return -1;
    }
  }
  return 0;
});
</script>
