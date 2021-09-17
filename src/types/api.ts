export type LogoProps = {
  alternativeText: string
  url: string
}

export type sectionHeroProps = {
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

export type LandingPageProps = {
  logo: LogoProps
  sectionHero: sectionHeroProps
}
