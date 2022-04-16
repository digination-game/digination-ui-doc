module.exports = {
  title: 'Digination UI',
  description: 'Digination UI is a simple block chain oriented component library based on Vue',
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/css/style.css" }],
  ],
  base:"/digination-ui-doc/",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"),
    collapsable:true,
    // sidebarDepth: 2,
    lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "more...",
        buttonText: "update",
      },
    },
    editLinks: true,
    editLinkText: "Edit this page on GitHub!",
  },

};
