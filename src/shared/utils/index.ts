/**
 * Sizes defaults
 */
export const SIZE = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
}

/**
 * Devices Media-screen
 */
export const DEVICE = {
  mobileS: `(max-width: ${SIZE.mobileS}px)`,
  mobileM: `(max-width: ${SIZE.mobileM}px)`,
  mobileL: `(max-width: ${SIZE.mobileL}px)`,
  tablet: `(max-width: ${SIZE.tablet}px)`,
  laptop: `(max-width: ${SIZE.laptop}px)`,
  laptopL: `(max-width: ${SIZE.laptopL}px)`,
  desktop: `(max-width: ${SIZE.desktop}px)`,
  desktopL: `(max-width: ${SIZE.desktop}px)`
}

/**
 * Variables Width
 */
export const WIDTH = {
  screen: window.screen.width,
  window: window.innerWidth
}
