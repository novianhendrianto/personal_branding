<script setup lang="ts">
const fallbackImages = [
  'https://picsum.photos/seed/netops/900/600',
  'https://picsum.photos/seed/umkm/900/600',
  'https://picsum.photos/seed/callcenter/900/600',
  'https://picsum.photos/seed/integration/900/600',
  'https://picsum.photos/seed/companyweb/900/600',
  'https://picsum.photos/seed/cctvfiber/900/600',
  'https://picsum.photos/seed/hrm/900/600',
  'https://picsum.photos/seed/mobileapp/900/600'
]

const slides = [
  {
    title: 'RT/RW Net Automation',
    subtitle: 'Billing, PPPoE, Monitoring',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'UMKM Digital System',
    subtitle: 'POS, CRM, Inventory',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Call Center & VoIP',
    subtitle: 'SIP, Ticketing, Monitoring',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'API & Middleware',
    subtitle: 'Integrasi real-time antar sistem',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Web Company Profile',
    subtitle: 'Website profesional dan SEO-ready',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'CCTV & Fiber Optic',
    subtitle: 'Instalasi fisik dan desain infrastruktur',
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b2a?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'HRM Application',
    subtitle: 'Absensi, Cuti, Payroll Workflow',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Mobile App Application',
    subtitle: 'Android, iOS, Real-time Sync',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80'
  }
]

const loopSlides = [...slides, ...slides]

const onImageError = (event: Event, index: number) => {
  const target = event.target as HTMLImageElement | null
  if (!target || target.dataset.fallbackApplied === 'true') {
    return
  }

  target.dataset.fallbackApplied = 'true'
  target.src = fallbackImages[index % fallbackImages.length]
}
</script>

<template>
  <section id="showcase" class="section-wrap py-10 sm:py-14">


    <div class="slider-shell overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-[0_20px_40px_rgba(15,23,42,0.09)] sm:p-5">
      <div class="slider-track flex gap-4">
        <article
          v-for="(slide, idx) in loopSlides"
          :key="`${slide.title}-${idx}`"
          class="group relative h-64 w-[290px] shrink-0 overflow-hidden rounded-2xl sm:h-72 sm:w-[340px]"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            @error="onImageError($event, idx)"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Service</p>
            <h3 class="brand-heading mt-1 text-lg font-bold">{{ slide.title }}</h3>
            <p class="mt-1 text-sm text-white/85">{{ slide.subtitle }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slider-shell:hover .slider-track {
  animation-play-state: paused;
}

.slider-track {
  width: max-content;
  animation: serviceMarquee 38s linear infinite;
}

@keyframes serviceMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
