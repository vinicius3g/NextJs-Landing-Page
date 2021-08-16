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

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutSection
      ...sectionTech
      ...sectionConcepts
    }
  }
`
export default GET_LANDING_PAGE
