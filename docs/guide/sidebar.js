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
        title: 'digi-lands-tile-map',
        path: '/guide/components/digi-lands-tile-map',
      },
      {
        title: 'digi-model-viewer',
        path: '/guide/components/digi-model-viewer',
      },
    ],
  },
]
