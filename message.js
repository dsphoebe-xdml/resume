!function(){
  var controller = Controller({
    init: function(view, model) {
      this.messageList = view.querySelector('#messages')
      this.form = view.querySelector('form')
      this.loadMessages()
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

      this.model.save({
        name: messageName.value,
        content: messageContent.value
      }).then((obj) => {
        const { name, content } = obj.attributes
        this.renderMessage(name, content)
      }).then(() => {
        messageName.value = ''
        messageContent.value = ''
      })
    }
  })

  controller.init(
    View('div.messages'), 
    Model({resourceName: 'ResumeMessage'})
  )
}()
