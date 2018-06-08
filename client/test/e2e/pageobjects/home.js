const homeCommands = {
  clickProfile: function() {
    this.section.toolbar.click('@profile')
    .assert.urlEquals(this.api.globals.devServerURL + '/#/profile')
  }
}

module.exports = {
  url: function() { 
    return this.api.globals.devServerURL + '/#/'
  },
  commands: [homeCommands],
  sections: {
    toolbar: {
      selector: 'nav.toolbar',
      elements: {
        home: {
          selector: '.home-btn'
        },
        profile: {
          selector: '.profile-btn'
        },
        scores: {
          selector: '.scores-btn'
        },
        logout: {
          selector: '.logout-btn'
        }
      }
    }
  },
  elements: {
    heading: 'h3.home-title',
    globalError: 'p.error'
  }
};