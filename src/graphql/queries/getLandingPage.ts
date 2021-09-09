const GET_LANDING_PAGE = /*GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }
  fragment header on LandingPage {
    header {
      title
      description
      id
      button {
        id
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }
  fragment aboutSection on LandingPage {
    sectionAboutProject {
        title
        description
        media {
          url
          alternativeText
        }
      }
  }
  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          name
          alternativeText
          url
        }
      }
    }
  }
  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        id
        title
      }
    }
  }
  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }
  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      id
      title
      description
    }
  }
  fragment pricingBox on LandingPage {
    pricingBox {
      id
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        id
        label
        url
      }
    }
  }
  fragment sectionAboutUs on LandingPage {
    sectionAboutUs {
      id
      title
      authors {
        photo {
          url
          alternativeText
        }
        name
        role
        socialLinks {
          url
          title
        }
        description
      }
    }
  }
  fragment sectionReviews on LandingPage {
    sectionReviews {
      id
      title
      reviews {
        name
        text
        photo {
          url
        }
      }
    }
  }
  fragment sectionFaq on LandingPage {
    sectionFaq {
      id
      title
      questions {
        id
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutSection
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFaq
    }
  }
`
export default GET_LANDING_PAGE
