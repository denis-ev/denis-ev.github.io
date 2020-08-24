module.exports = {
  title: "Denis Evers",
  description: "My personal site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "Dash", link: "https://vlab.evers.sh/" },
      // { text: "Guide", link: "/guide/" },
      { text: "GitHub", link: "https://dev.vivumlab.com/github/" }
    ],
    // sidebar: {
    //   '/guide/': genSidebarConfig('Guide')
    // },
    lastUpdated: 'Last Updated (GMT)'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

// function genSidebarConfig (title) {
//   return [
//     {
//       title,
//       collapsable: false,
//       children: [
//         '',
//         'getting-started',
//         'customize',
//         'advanced',
//       ]
//     }
//   ]
// }

