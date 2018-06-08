module.exports = {
    url: function() { 
      return this.api.globals.devServerURL + '/#/profile'
    },
    commands: [],
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
      heading: 'h3.profile-title',
      globalError: 'p.error',
      email: 'input[name=email]',
      name: 'input[name=name]',
      language: 'input[name=language]',
      submit: 'button.submit-btn'
    }
  };