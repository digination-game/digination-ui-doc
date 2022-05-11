const { title } = require('../.vuepress/config')

module.exports = [
  {
    title: 'Introduction',
    collapsable: true,
    children: [{ title: 'Motivation', path: '/guide/introduction/Motivation' }],
  },
  {
    title: 'Getting Started',
    collapsable: true,
    children: [
      { title: 'Installation', path: '/guide/gettingstarted/Installation' },
    ],
  },
  {
    title: 'Components',
    collapsable: true,
    children: [
      {
        title: 'digi-button',
        path: '/guide/components/digi-button',
      },
      {
        title: 'digi-toasts',
        path: '/guide/components/digi-toasts',
      },
      {
        title: 'digi-loading',
        path: '/guide/components/digi-loading',
      },
      {
        title: 'digi-dialog',
        path: '/guide/components/digi-dialog',
      },
      {
        title: 'digi-model-viewer',
        path: '/guide/components/digi-model-viewer',
      },
      {
        title: 'digi-lands-tile-map',
        path: '/guide/components/digi-lands-tile-map',
      },
    ],
  },
]
