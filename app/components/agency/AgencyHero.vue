<script setup lang="ts">
</script>

<template>
  <section class="relative bg-dark-elevated pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
    <!-- Floating Geometric Shapes -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-[15%] right-[8%] w-40 h-40 opacity-[0.06] hero-shape-float"
        style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #1ED11E); animation-duration: 23s;"
      />
      <div
        class="absolute top-[45%] left-[6%] w-44 h-44 rounded-full opacity-[0.08] hero-shape-pulse"
        style="background: radial-gradient(circle, rgba(152,255,152,0.25), transparent 70%); filter: blur(50px); animation-duration: 9s;"
      />
      <div
        class="absolute top-[30%] right-[28%] w-20 h-20 opacity-[0.05] hero-shape-float"
        style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #17A317); animation-duration: 27s; animation-delay: -6s;"
      />
      <div class="absolute top-[25%] left-[18%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 19s;" />
      <div class="absolute top-[65%] right-[18%] w-[3px] h-[3px] rounded-full bg-brand-500/20 hero-shape-float" style="animation-duration: 25s; animation-delay: -5s;" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="max-w-3xl">
        <p class="text-brand-500 font-display font-semibold text-sm uppercase tracking-widest mb-4">Estate Agency</p>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Buy, Sell &amp; Let with Confidence
        </h1>
        <p class="text-lg text-white/60 leading-relaxed mb-8">
          Professional property marketing and disposal for owners, plus trusted representation for buyers and tenants — backed by valuation-grade pricing intelligence.
        </p>
        <UButton to="#request" color="primary" size="lg" trailing-icon="i-lucide-arrow-right">
          Get Started
        </UButton>
      </div>

      <!-- Dual Focus -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-3xl">
        <div class="bg-dark-primary/60 border border-dark-muted rounded-xl p-5">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
              <UIcon name="i-lucide-megaphone" class="w-5 h-5 text-brand-500" />
            </div>
            <h3 class="font-display font-bold text-white text-sm">Property Marketing &amp; Disposal</h3>
          </div>
          <p class="text-xs text-white/50 leading-relaxed">Valuation-informed pricing, professional listings, and qualified buyer matching for sales and lettings.</p>
        </div>
        <div class="bg-dark-primary/60 border border-dark-muted rounded-xl p-5">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
              <UIcon name="i-lucide-user-check" class="w-5 h-5 text-brand-500" />
            </div>
            <h3 class="font-display font-bold text-white text-sm">Buyer &amp; Tenant Representation</h3>
          </div>
          <p class="text-xs text-white/50 leading-relaxed">Verified listings, negotiated terms, and due diligence support for purchasers and tenants.</p>
        </div>
      </div>
    </div>
  </section>
</template>
