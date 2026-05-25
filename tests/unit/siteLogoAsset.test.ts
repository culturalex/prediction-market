import { describe, expect, it } from 'vitest'
import {
  DEFAULT_SITE_LOGO_SVG_SOURCE,
  isLegacySiteLogoSvg,
} from '@/lib/site-logo-asset'
import { DEFAULT_THEME_SITE_LOGO_SVG } from '@/lib/theme-site-identity'

describe('site logo asset', () => {
  it('uses the CEX wordmark as the default inline svg', () => {
    expect(DEFAULT_THEME_SITE_LOGO_SVG).toContain('viewBox="0 0 519.54 472.5"')
    expect(DEFAULT_THEME_SITE_LOGO_SVG).toContain('fill="currentColor"')
    expect(DEFAULT_SITE_LOGO_SVG_SOURCE).toContain('m175.53,469.91')
  })

  it('detects legacy kuest and placeholder logos', () => {
    expect(isLegacySiteLogoSvg('<svg fill="#CDFF00"></svg>')).toBe(true)
    expect(isLegacySiteLogoSvg('<svg viewBox="0 0 165 150"></svg>')).toBe(true)
    expect(isLegacySiteLogoSvg(DEFAULT_THEME_SITE_LOGO_SVG)).toBe(false)
  })
})
