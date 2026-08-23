<script setup lang="ts">
import { ref, computed } from 'vue'

const { elementRef: headingRef, isRevealed } = useReveal()

const monthlyRentPerUnit = ref(50000)
const totalUnits = ref(10)
const managementFeeRate = 0.07

const grossMonthlyRevenue = computed(() => monthlyRentPerUnit.value * totalUnits.value)
const estimatedManagementFee = computed(() => grossMonthlyRevenue.value * managementFeeRate)
const netLandlordPayout = computed(() => grossMonthlyRevenue.value - estimatedManagementFee.value)

const formatKES = (val: number) => {
  return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(val)
}
</script>

<template>
  <section class="bg-dark-primary py-16 sm:py-24 relative overflow-hidden">
    <!-- Floating Shapes -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-[15%] left-[8%] w-40 h-40 rounded-full opacity-[0.06] hero-shape-pulse"
        style="background: radial-gradient(circle, rgba(152,255,152,0.2), transparent 70%); filter: blur(50px); animation-duration: 10s;"
      />
      <div
        class="absolute top-[55%] right-[10%] w-24 h-24 opacity-[0.05] hero-shape-float"
        style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); background: linear-gradient(135deg, #98FF98, #1ED11E); animation-duration: 22s; animation-delay: -3s;"
      />
      <div class="absolute top-[40%] right-[30%] w-[3px] h-[3px] rounded-full bg-brand-500/15 hero-shape-float" style="animation-duration: 18s;" />
    </div>
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div ref="headingRef" class="text-center mb-12 hero-text-reveal" :class="isRevealed ? 'hero-text-visible' : ''">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Estimate Your Portfolio</h2>
        <p class="text-white/60">Interactive calculator for operational estimations. Official quotations require property audit.</p>
      </div>

      <div class="bg-dark-elevated border border-dark-muted rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                Monthly Rent per Unit: {{ formatKES(monthlyRentPerUnit) }}
              </label>
              <input type="range" min="10000" max="300000" step="5000" v-model.number="monthlyRentPerUnit" class="w-full accent-[#98FF98]" />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                Total Units: {{ totalUnits }}
              </label>
              <input type="range" min="1" max="100" step="1" v-model.number="totalUnits" class="w-full accent-[#98FF98]" />
            </div>
          </div>

          <div class="bg-dark-primary p-6 rounded-lg border border-dark-muted space-y-4">
            <div>
              <span class="block text-xs text-white/50 uppercase">Gross Monthly Revenue</span>
              <span class="text-lg font-mono font-medium text-white">{{ formatKES(grossMonthlyRevenue) }}</span>
            </div>
            <div>
              <span class="block text-xs text-white/50 uppercase">Estimated Fee (7%)</span>
              <span class="text-sm font-mono text-white/80">{{ formatKES(estimatedManagementFee) }}</span>
            </div>
            <div class="pt-3 border-t border-dark-muted">
              <span class="block text-xs text-brand-500 uppercase font-semibold">Estimated Net Disbursement</span>
              <span class="text-2xl font-mono font-bold text-brand-500">{{ formatKES(netLandlordPayout) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
