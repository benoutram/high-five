module.exports = {
  '@tags': ['login'],
  'login header': function (browser) {
    const login = browser.page.login().navigate()
    login.expect.section('@toolbar').to.be.visible
    const toolbarSection = login.section.toolbar
    toolbarSection
      .assert.visible('@login')
      .assert.visible('@signup')
  },
  'login': function (browser) {
    const login = browser.page.login().navigate()
      .doLogin()
  }
}
