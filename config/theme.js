const breakpoint_tablet = '767px'
const breakpoint_desktop = '1025px'
const breakpoint_widescreen = '1216px'

const colors = {
  light: '#fbfbfb',
  dark: '#404040',
  darker: '#202020',
  grey: '#a0a0a0',
  primary: '#94e2af',
  primaryLight: '#c3efd2',
  primaryDark: '#5fd388',
  secondary: '#0a232d',
  warning: '#ffcc00',
  warningDarker: '#ecbd00',
}

module.exports = {
  fonts: {
    main: 'Abel, sans-serif',
    headings: 'Russo One, sans-serif',
    postTitles: 'Russo One, sans-serif',
    menu: 'Abel, sans-serif',

    sizes: {
      small: '.75em',
      medium: '1em',
      large: '1.2em',
      xLarge: '1.5em',
      menu: 'medium',
    },

    weights: {
      menu: '600',
    },
  },
  colors: {
    ...colors,
    menu: {
      background: colors.primary,
      dropdown: {
        border: colors.dark,
        background: colors.primary,
      },
      items: {
        color: colors.dark,
        background: colors.primary,
        hover: {
          color: colors.primary,
          background: colors.dark,
        },
      },
    },
    button: {
      color: colors.light,
      background: colors.primary,
      border: colors.primaryDark,
      hover: {
        color: colors.light,
        background: colors.primaryDark,
      },
    },
    tag: {
      background: colors.primaryLight,
      color: colors.dark,
      hover: {
        background: colors.primary,
        color: colors.dark,
      },
    },
    anchorLink: {
      color: colors.dark,
      hover: colors.darker,
    },
    footer: {
      color: colors.light,
      background: colors.dark,
      anchorLinkColor: colors.primaryLight,
      anchorLinkHoverColor: colors.primary,
    },
    textboxOpaque: {
      background: 'rgba(0,0,0,0.4)',
    },
    dividerText: {
      divider: colors.secondary,
      text: colors.secondary,
    },
    categoryCard: {
      background: colors.secondary,
    },
    blockquote: {
      leftBorder: colors.primary,
      background: colors.primaryLight,
    },
    pagination: {
      items: {
        active: {
          color: colors.light,
          background: colors.primary,
        },
        inactive: {
          color: colors.light,
          background: colors.primaryLight,
        },
        disabled: {
          color: colors.light,
          background: colors.grey,
        },
      },
    },
    progressBar: {
      color: colors.secondary,
    },
  },
  breakpoints: {
    tabletBk: breakpoint_tablet,
    desktopBk: breakpoint_desktop,
    widescreenBk: breakpoint_widescreen,
    mobile: `only screen and (max-width: calc(${breakpoint_tablet} - 1px))`,
    tablet: `only screen and (min-width: ${breakpoint_tablet}, max-width: calc(${breakpoint_desktop} - 1px))`,
    touch: `only screen and (max-width: calc(${breakpoint_desktop} - 1px))`,
    desktop: `only screen and (min-width: ${breakpoint_desktop})`,
  },
  spacings: {
    xxxSmall: '.1rem',
    xxSmall: '.25rem',
    xSmall: '.5rem',
    small: '1rem',
    medium: '2rem',
    large: '3rem',
    xLarge: '4rem',
    xxLarge: '6rem',
  },
  animations: {
    times: {
      fast: '0.1s',
      medium: '0.22s',
      slow: '0.6s',
    },
    button: 'box-shadow 0.3s ease',
    link: 'color 0.2s ease',
  },
  shadows: {
    medium: '0.2em 0.2em 1em rgba(30,30,30,0.15)',
    text: '0 0 10px #000, 0.1em 0.1em 0.5em #000',
  },
  borders: {
    card: '0.5rem',
    control: '0.25rem',
  },
  dimensions: {
    container: {
      large: '1100px',
      medium: '960px',
      small: '768px',
      xSmall: '512px',
    },
    fullHeight: '100vh',
    largeHeight: '75vh',
    mediumHeight: '50vh',
    smallHeight: '20vh',
    xSmallHeight: '10vh',
    categoryCard: {
      normalHeight: '12em',
      expandedHeight: '20em',
    },
    postCard: {
      height: '15em',
    },
    postHeader: {
      normalHeight: '25em',
      expandedHeight: '75em',
    },
    bannerImage: {
      height: '20vh',
    },
    carousel: {
      height: '50vh',
    },
    progressBar: {
      height: '6',
    },
  },
  special: {
    sectionBackgroundImageUrl: '/static/specialSectionBackground.png',
  },
}
