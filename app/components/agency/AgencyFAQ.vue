<script setup lang="ts">
import { siteContent } from '~/content/site'

const faqs = [
  {
    label: 'What commission do you charge?',
    content: `We work on a success-based commission agreed in writing before any listing goes live. Standard rates are ${siteContent.agency.commissionRate} depending on property type and mandate scope — with no hidden charges.`
  },
  {
    label: 'Are you a licensed estate agency?',
    content: `Yes. Canonical Realty is registered with the Estate Agents Registration Board (EARB) under ${siteContent.company.earbRegistration}, and we operate in full compliance with the Estate Agents Act.`
  },
  {
    label: 'How do you market listed properties?',
    content: `Listings are exposed through digital portals, our verified database of ${siteContent.agency.marketingReach}, and targeted outreach to institutional and private buyers. Professional presentation and valuation-informed pricing come standard.`
  },
  {
    label: 'How long does it take to sell or let a property?',
    content: `Well-priced properties typically move within ${siteContent.agency.averageDaysOnMarket}. Pricing, condition, and location are the biggest factors — our in-house valuation team helps you list at a market-true price from day one.`
  },
  {
    label: 'Do you handle the legal conveyancing process?',
    content: 'We coordinate the full transaction timeline with your advocate — offers, sale agreements, and transfer documentation. Legal conveyancing itself is executed by a qualified advocate of your choosing.'
  },
  {
    label: 'How do you verify buyers and tenants?',
    content: 'Every prospective buyer or tenant is screened before viewings: identification verification, financial pre-qualification, and — for tenancies — employment and reference checks.'
  }
]
</script>

<template>
  <section class="bg-light-muted py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute inset-0 pattern-dots pointer-events-none" />
    <div class="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
      <div class="text-center mb-12">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Support</p>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Frequently Asked Questions</h2>
        <p class="text-text-muted">Common questions about our estate agency services</p>
      </div>

      <UAccordion :items="faqs" />

      <div class="mt-12 text-center">
        <UButton to="#request" color="primary" size="lg" trailing-icon="i-lucide-arrow-right">
          Start an Agency Inquiry
        </UButton>
      </div>
    </div>
  </section>
</template>
