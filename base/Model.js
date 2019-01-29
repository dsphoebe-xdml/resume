window.Model = function(options) {
  let resourceName = options.resourceName
  return {
    init: function() {
      var APP_ID = 'l6drhAs5vaRNYijhMB37mMGi-gzGzoHsz';
      var APP_KEY = '7Bcj70K7MdLUEVEuVaPgVLDp';
      
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function() {
      var query = new AV.Query(resourceName);
      return query.find()
    },
    save: function(obj) {
      var R = AV.Object.extend(resourceName)
      var x = new R()
      return x.save(obj)
    }
  }
}