export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Image = {
  alternativeText: string
  url: string
}

export type LogoProps = Image

export type SectionHeroProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type Modules = {
  id: number
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  princeInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  photo: Image
  name: string
  id: number
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  photo: Image
  id: number
  name: string
  text: string
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
  newQuestion: {
    title: string
    description: string
  }
}

export type SectionFooterProps = {
  description: string
}

export type LandingPageProps = {
  logo: LogoProps
  sectionHero: SectionHeroProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
  sectionFooter: SectionFooterProps
}
