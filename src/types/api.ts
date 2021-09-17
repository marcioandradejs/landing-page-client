export type LogoProps = {
  alternativeText: string
  url: string
}

export type SectionHeroProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  sectionHero: SectionHeroProps
  sectionAboutProject: SectionAboutProjectProps
}
