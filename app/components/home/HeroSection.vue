<script setup lang="ts">
const { scrollY } = useScroll()

const textRevealed = ref(false)

onMounted(() => {
  setTimeout(() => {
    textRevealed.value = true
  }, 200)
})
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-dark-primary">
    <!-- Video Background -->
    <video
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="/hero-poster.webp"
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(180deg, rgba(16,21,18,0.15) 0%, rgba(16,21,18,0.4) 40%, rgba(16,21,18,0.85) 75%, #101512 100%);"
    />

    <!-- Floating Geometric Shapes -->
    <div class="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      <!-- Hexagon — top right -->
      <div
        class="absolute top-[15%] right-[12%] w-40 h-40 opacity-[0.07] hero-shape-float"
        style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #1ED11E); animation-duration: 22s;"
      />

      <!-- Diamond — center right -->
      <div
        class="absolute top-[35%] right-[25%] w-24 h-24 opacity-[0.06] hero-shape-float"
        style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #17A317); animation-duration: 28s; animation-delay: -5s;"
      />

      <!-- Glowing Orb — top left -->
      <div
        class="absolute top-[20%] left-[8%] w-64 h-64 rounded-full opacity-[0.12] hero-shape-pulse"
        style="background: radial-gradient(circle, rgba(152,255,152,0.3), transparent 70%); filter: blur(60px); animation-duration: 8s;"
      />

      <!-- Circle Outline — mid right -->
      <div
        class="absolute top-[50%] right-[8%] w-32 h-32 rounded-full border border-brand-500/[0.08] hero-shape-pulse"
        style="animation-duration: 16s; animation-delay: -3s;"
      />

      <!-- Small Dots — scattered -->
      <div
        class="absolute top-[25%] left-[20%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float"
        style="animation-duration: 18s;"
      />
      <div
        class="absolute top-[40%] right-[35%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float"
        style="animation-duration: 24s; animation-delay: -8s;"
      />
      <div
        class="absolute top-[60%] left-[15%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float"
        style="animation-duration: 20s; animation-delay: -12s;"
      />
      <div
        class="absolute top-[70%] right-[20%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float"
        style="animation-duration: 26s; animation-delay: -4s;"
      />
      <div
        class="absolute top-[15%] right-[40%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float"
        style="animation-duration: 19s; animation-delay: -10s;"
      />
      <div
        class="absolute top-[55%] left-[30%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float"
        style="animation-duration: 23s; animation-delay: -6s;"
      />
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 min-h-screen flex items-end pb-24 sm:pb-32 lg:pb-40">
      <div class="max-w-3xl">
        <!-- Badge -->
        <p
          class="text-brand-500 font-display font-semibold text-sm uppercase tracking-widest mb-6 hero-text-reveal"
          :class="textRevealed ? 'hero-text-visible' : ''"
          style="transition-delay: 0.2s;"
        >
          Decision-Grade Valuation &amp; Management
        </p>

        <!-- Heading -->
        <h1
          class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 hero-text-reveal"
          :class="textRevealed ? 'hero-text-visible' : ''"
          style="transition-delay: 0.4s;"
        >
          Canonical <span class="text-brand-500">Realty</span>
        </h1>

        <!-- Subtext -->
        <p
          class="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl hero-text-reveal"
          :class="textRevealed ? 'hero-text-visible' : ''"
          style="transition-delay: 0.6s;"
        >
          Kenya's trusted partner for property valuation and management. VRB-registered, ISK-membered, and committed to evidence-based methodology.
        </p>

        <!-- CTAs -->
        <div
          class="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:max-w-lg hero-text-reveal"
          :class="textRevealed ? 'hero-text-visible' : ''"
          style="transition-delay: 0.8s;"
        >
          <UButton to="/services/valuation" color="primary" size="lg" trailing-icon="i-lucide-arrow-right" class="justify-center">
            Request Valuation
          </UButton>
          <UButton to="/services/property-management" color="neutral" variant="outline" size="lg" class="justify-center">
            Property Management
          </UButton>
        </div>

        <!-- Trust Badges -->
        <div
          class="flex flex-wrap gap-3 mt-8 hero-text-reveal"
          :class="textRevealed ? 'hero-text-visible' : ''"
          style="transition-delay: 1s;"
        >
          <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <div class="w-4 h-4 rounded-full bg-brand-500/20 flex items-center justify-center">
              <svg class="w-2.5 h-2.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-xs text-white/70 font-medium">Court Admissibility</span>
          </div>
          <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <div class="w-4 h-4 rounded-full bg-brand-500/20 flex items-center justify-center">
              <svg class="w-2.5 h-2.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-xs text-white/70 font-medium">VRB Sign-Off on Every Report</span>
          </div>
          <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <div class="w-4 h-4 rounded-full bg-brand-500/20 flex items-center justify-center">
              <svg class="w-2.5 h-2.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-xs text-white/70 font-medium">Direct Digital Ledger</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-opacity duration-500"
      :class="scrollY > 200 ? 'opacity-0 pointer-events-none' : 'opacity-100'"
    >
      <span class="text-white/40 text-xs uppercase tracking-widest font-sans">Scroll</span>
      <div class="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
        <div class="w-1 h-2 rounded-full bg-brand-500 hero-scroll-bounce" />
      </div>
    </div>
  </section>
</template>
