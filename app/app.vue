<template>
  <div class="relative min-h-screen overflow-x-clip text-slate-900">
    <div class="pointer-events-none fixed inset-0 -z-10">
      <div class="absolute -left-32 top-[-120px] h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
      <div class="absolute -right-20 top-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
      <div class="absolute bottom-[-120px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-300/20 blur-3xl" />
    </div>

    <NuxtRouteAnnouncer />
    <NuxtPage />

    <a
      href="https://wa.me/6281234567890?text=Halo%20Pak%20Novian,%20saya%20ingin%20konsultasi%20sistem%20bisnis"
      target="_blank"
      rel="noopener noreferrer"
      class="floating-wa"
      aria-label="Chat WhatsApp"
    >
      WA
    </a>
  </div>
</template>
