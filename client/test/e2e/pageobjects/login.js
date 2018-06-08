const loginCommands = {
  doLogin: function() {
    return this.assert.title('client')
    .assert.containsText('@heading','Login')
    .assert.visible('@username')
    .setValue('@username','ben@outram.com')
    .assert.visible('@password')
    .setValue('@password','password')
    .assert.elementNotPresent('@globalError')
    .click('@submit')
    .waitForElementVisible('h3.home-title', 2000)
    .assert.urlEquals(this.api.globals.devServerURL + '/#/')
  }
};

module.exports = {
  url: function() {
    return this.api.globals.devServerURL + '/#/login'
  },
  commands: [loginCommands],
  sections: {
    toolbar: {
        selector: 'nav.toolbar',
        elements: {
            login: {
              selector: '.login-btn'
            },
            signup: {
              selector: '.signup-btn'
            }
        }
    }
  },
  elements: {
    heading: 'h3.login-title',
    globalError: 'p.error',
    username: 'input[name=email]',
    password: 'input[name=password]',
    submit: 'button.submit-btn'
  }
};