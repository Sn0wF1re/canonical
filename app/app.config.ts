export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'slate'
    },
    button: {
      compoundVariants: [
        {
          color: 'primary' as const,
          variant: 'solid' as const,
          class: 'text-dark-primary bg-primary hover:bg-white active:bg-white'
        }
      ]
    }
  }
})
