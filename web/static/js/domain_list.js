var DomainList = {
  init: function link($) {
    this.$ = $;
    var input = document.getElementById("js-domain-input");
    if (input != null) {
      this.initAwesomplete(input);
      this.loadDomains();
    }
  },

  initAwesomplete: function(input) {
    this.awesomplete = new Awesomplete(input);
    this.awesomplete.minChars = 1;
    this.awesomplete.autoFirst = true;
  },

  loadDomains: function() {
    var that = this;

    this.$.get("/domains")
    .done(function(response) {
      that.awesomplete.list = response.domains;
    })
    .fail(function(error) {
      console.log(error);
    });
  }
};

module.exports = {
  DomainList: DomainList
};

