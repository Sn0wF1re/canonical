<template>
  <div class="min-h-screen flex flex-col">
    <GlobalAppNavbar />
    <main class="flex-1 pt-20">
      <slot />
    </main>
    <GlobalAppFooter />
  </div>
</template>
