window.Controller = function(options) {
  var object = {
    view: null,
    model: null,
    init: function(view, model) {
      this.view = view
      this.model = model
      this.model.init()
      options.init.call(this, view, model)
      this.bindEvents()
    }
  }

  for (let key in options) {
    if (key !== 'init') {
      object[key] = options[key]
    }
  }

  return object
}