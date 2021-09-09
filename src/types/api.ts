export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  id: number
  button: {
    id: number
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProps = {
  title: string
  description: string
  media: {
    url: string
    alternativeText: string
  }
}

export type TechIcons = {
  title: string
  icon: {
    name: string
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcons[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    id: number
    title: string
  }>
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  id: string
  title: string
  description: string
}

export type PricingBoxProps = {
  id: string
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    id: string
    label: string
    url: string
  }
}

export type SocialLinks = {
  title: string
  url: string
}

export type Author = {
  name: string
  role: string
  description: string
  photo: {
    url: string
    alternativeText: string
  }
  socialLinks: SocialLinks[]
}

export type SectionAboutUsProps = {
  id: string
  title: string
  authors: Author[]
}

export type Reviews = {
  name: string
  text: string
  photo: {
    url: string
  }
}
export type SectionReviewsProps = {
  id: string
  title: string
  reviews: Reviews[]
}
export type SectionFaqProps = {
  id: number
  title: string
  questions: Array<{
    id: number
    question: string
    answer: string
  }>
}
export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
