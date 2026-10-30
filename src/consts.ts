// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_URL = 'https://blog.xiaolongge.online'
export const SITE_TITLE = 'Joey'
export const SITE_TAGLINE = '写点东西'
export const SITE_DESCRIPTION = '个人博客。记录想法、代码与生活。'

// The calendar renders both its desktop grid and its agenda and hides one with CSS. The
// grid's eager thumbnails put this in a <source> for the other viewports, so a phone
// doesn't download them.
export const CALENDAR_DESKTOP_MEDIA = '(min-width: 56.0625rem)'
export const BLANK_IMAGE =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

/** Local placeholder avatar under public/ (theme shell; replace with your own later). */
export const SITE_AVATAR = {
  favicon: '/avatar-64.png',
  header: '/avatar-80.webp',
  cropped: '/avatar-cropped.png',
} as const
