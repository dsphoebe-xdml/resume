!function(){
  var model = {
    init: function() {
      var APP_ID = 'l6drhAs5vaRNYijhMB37mMGi-gzGzoHsz';
      var APP_KEY = '7Bcj70K7MdLUEVEuVaPgVLDp';
      
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    }, 
    fetch: function() {
      var q = new AV.Query('ResumeMessage')
      return q.find()
    },
    save: function(name, content) {
      var ResumeMessage = AV.Object.extend('ResumeMessage')
      var rm = new ResumeMessage()
      return rm.save({
        name: name, 
        content: content
      }) 
    }
  }

  var view = document.querySelector('div.messages')

  var controller = {
    view: null,
    model: null,
    init: function(view, model) {
      this.view = view
      this.model = model
      
      this.model.init()

      this.messageList = view.querySelector('#messages')
      this.form = view.querySelector('form')

      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function() {
      this.model.fetch().then((data) => {
        var result = data.map((d) => d.attributes)
        result.forEach((r) => this.renderMessage(r.name, r.content))
      }, (err) => console.log(err))
    },
    renderMessage: function(name, content) {
      var li = document.createElement('li')
      li.innerHTML = `${name}：${content}`
      this.messageList.appendChild(li)
    },
    bindEvents: function() {
      this.form.addEventListener(
        'submit',
        e => {
          e.preventDefault()
          this.saveMessage()
        })
    },
    saveMessage() {
      var messageName = document.querySelector('#name')
      var messageContent = document.querySelector('#content')

      this.model.save(
        messageName.value,
        messageContent.value
      ).then((obj) => {
        const { name, content } = obj.attributes
        this.renderMessage(name, content)
      }).then(() => {
        messageName.value = ''
        messageContent.value = ''
      })
    }
  }

  controller.init(view, model)
}()
