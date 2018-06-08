module.exports = {
    '@tags': ['profile'],
    'header': function (browser) {
      const login = browser.page.login().navigate()
        .doLogin()
      
      const home = browser.page.home().clickProfile()

      const profile = browser.page.profile()
      profile.expect.section('@toolbar').to.be.visible

      const toolbarSection = profile.section.toolbar
      toolbarSection
        .assert.visible('@home')
        .assert.visible('@profile')
        .assert.visible('@scores')
        .assert.visible('@logout')
    },
    'home': function (browser) {
      const login = browser.page.login().navigate()
      .doLogin()
    
      const home = browser.page.home().clickProfile()

      const profile = browser.page.profile()
      profile
        .assert.title('client')
        .assert.containsText('@heading','Profile')
        .assert.value('@email','ben@outram.com')  
        // TODO Why is it necessary to click the input prior to clearing?
        .click('@email')
        .clearValue('@email')
        .setValue('@email','john@smith.com')
        .assert.value('@name','Ben Outram')
        // TODO Why is it necessary to click the input prior to clearing?
        .click('@name')
        .clearValue('@name')
        .setValue('@name','John Smith')
        // TODO Can't set the language field
        //.assert.value('@language','English')
        // TODO Why is it necessary to click the input prior to clearing?
        //.click('@language')
        //.clearValue('@language')
        //.setValue('@language', 'French')
        .assert.elementNotPresent('@globalError')
        .click('@submit')
        .assert.elementNotPresent('@globalError')

        // Reset data
        .click('@email')
        .clearValue('@email')
        .setValue('@email','ben@outram.com')
        .click('@name')
        .clearValue('@name')
        .setValue('@name','Ben Outram')
        .click('@submit')
    }
  }
  