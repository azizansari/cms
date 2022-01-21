const connect = require('camo').connect;
const path = require('path')
module.exports = (function () {
  var database;
  var uri = `nedb:///${path.join(__dirname, "../database/testDB")}`;
  connect(uri).then(function(db) {
      database = db;
      console.log('db :>> ', db);
  // var lassie = Emp.create({
  //   name: 'Lassie',
  //   breed: 'Collie'
  // });
  
  // lassie.save().then(function(l) {
  //   console.log(l._id);
  // });
  // Emp.find({}).then(function(doc){
  //   console.log('doc :>> ', doc);
  // })
  });
})();
