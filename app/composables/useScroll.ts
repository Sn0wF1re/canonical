export const useScroll = () => {
  const isScrolled = ref(false)
  const scrollY = ref(0)

  const onScroll = () => {
    scrollY.value = window.scrollY
    isScrolled.value = scrollY.value > 50
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { isScrolled, scrollY }
}
