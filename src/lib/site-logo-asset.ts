/** Public path for the canonical site logo (keep in sync with `public/images/site-logo.svg`). */
export const DEFAULT_SITE_LOGO_PUBLIC_PATH = '/images/site-logo.svg'

/** Inline SVG mirrored from `public/images/site-logo.svg` for theme defaults and DB fallbacks. */
export const DEFAULT_SITE_LOGO_SVG_SOURCE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 519.54 472.5" fill="currentColor" fill-rule="evenodd">
  <path d="m175.53,469.91V0h133.05v64.4h-62.28v126.68h54.49v65.11h-54.49v149.32h66.52v64.4h-137.29Z"/>
  <path d="m517.42,0l-51.66,222.22,53.79,247.69h-72.89l-26.89-159.23h-2.83l-26.89,159.23h-72.18l55.2-237.79L319.97,0h72.18l26.18,147.91h2.83L447.35,0h70.06Z"/>
  <path d="m92.87,329.76h60.43v75.5c0,44.99-26.08,67.23-75.7,67.23S0,448.19,0,404.75v-213.58c0-44.99,25.44-66.71,76.97-66.71s76.33,19.13,76.33,66.2v58.96h-60.43v-61.02c0-10.34-5.09-15.51-14.63-15.51s-13.99,5.17-13.99,15.51v220.31c0,10.86,3.18,15.52,13.36,15.52s15.27-4.65,15.27-15.52v-79.12Z"/>
</svg>`

const LEGACY_SITE_LOGO_MARKERS = [
  '#cdff00',
  'k-transparent',
  'viewbox="0 0 518 414"',
  'viewbox="0 0 165 150"',
  'm0 0h37v150h0z',
] as const

export function isLegacySiteLogoSvg(value: string | null | undefined) {
  if (!value?.trim()) {
    return false
  }

  const normalized = value.trim().toLowerCase()
  return LEGACY_SITE_LOGO_MARKERS.some(marker => normalized.includes(marker))
}
