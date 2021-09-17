const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment sectionHero on LandingPage {
    sectionHero {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...sectionHero
    }
  }
`

export default GET_LANDING_PAGE
