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

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
}
