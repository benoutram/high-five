module.exports = {
    '@tags': ['home'],
    'header': function (browser) {
      const login = browser.page.login().navigate()
        .doLogin()

      const home = browser.page.home();
      home.expect.section('@toolbar').to.be.visible
      
      const toolbarSection = home.section.toolbar
      toolbarSection
        .assert.visible('@home')
        .assert.visible('@profile')
        .assert.visible('@scores')
        .assert.visible('@logout')
    },
    'home': function (browser) {
      const login = browser.page.login().navigate()
        .doLogin()

      const home = browser.page.home();
      home
        .assert.title('client')
        .assert.containsText('@heading','Home')
        .assert.elementNotPresent('@globalError')
    }
  }
  