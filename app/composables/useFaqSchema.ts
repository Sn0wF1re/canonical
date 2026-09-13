export interface FaqEntry {
  label: string
  content: string
}

/**
 * Emits FAQPage structured data for a set of question/answer pairs.
 * Aids answer engines and LLM extraction; note Google restricts FAQ rich
 * results to authoritative government/health domains, so treat this as
 * machine-readability rather than a guaranteed SERP feature.
 */
export function useFaqSchema(faqs: FaqEntry[]) {
  useSchemaOrg([
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.label,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.content
        }
      }))
    }
  ])
}
