const autobar_options = {
  rootDir: '/js',
  stripNumbers: true,
  maxLevel: 0,
  skipEmptySidebar: true,
  skipEmptyNavbar: true,
  setHomepage: "toGroup"
};

// TODO: default route

module.exports = {
  base: "/Frontend_Notes/",
  title: "Frontend Notes",
  description: "Just a personal frontend learning notes",
  themeConfig: {
    // sidebar: [
    //   ["/browser/", "Browser"],
    //   ["/css/", "CSS"],
    //   ["/html/", "HTML"],
    //   ["/js/", "Javascript"],
    //   ["/mobile/", "Mobile"],
    //   ["/react/", "React"],
    //   ["/vue/", "Vue"],
    //   ["/nodejs/", "Nodejs"],
    //   ["/security/", "Security"],
    //   ["/ts/", "Typescript"],
    //   ["/webpack/", "WebPack"],
    //   ["/tricks/", "Tricks"],
    // ],
    // displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
    ]
  },
  plugins: ['autobar', autobar_options]
}